// ─────────────────────────────────────────────────────────────────────────────
// Contract cloud store — Firestore persistence on the UNIFIED DATA CONTRACT v2
// (see /CONTRACT.md and lib/contract.ts).
//
//   users/{uid}                    ← root: { schemaVersion, settings, ... }
//   users/{uid}/shifts/{shiftId}   ← one ContractShift per document
//
// GUARDED: every entry point here writes to real user data, so it must only be
// reached behind the `contractSync` feature flag (lib/flags.ts), which is OFF by
// default. Migration is opt-in, ATOMIC (batched), IDEMPOTENT (keyed on
// `legacyRef`), NON-DESTRUCTIVE (legacy cfg/data/ot are left as a cold backup)
// and supports rollback. Nothing here runs automatically for production accounts.
// ─────────────────────────────────────────────────────────────────────────────

import {
  collection, doc, getDoc, getDocs, onSnapshot, setDoc, writeBatch, serverTimestamp,
} from 'firebase/firestore'
import { getFirebase } from './firebase'
import {
  SCHEMA_VERSION, migrateLegacyShifts, migrateLegacySettings,
  type ContractShift, type Settings, type ClientRef, type LegacyDoc,
} from './contract'

const APP_VERSION = '1.8.1'
export const webClient = (uid: string): ClientRef => ({ platform: 'web', appVersion: APP_VERSION, uid })

const shiftsColPath = (uid: string) => ['users', uid, 'shifts'] as const
const chunk = <T,>(arr: T[], n: number): T[][] => {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n))
  return out
}
const BATCH_LIMIT = 450   // Firestore hard limit is 500 ops/batch

// ── Reads ────────────────────────────────────────────────────────────────────
export async function loadContractShifts(uid: string): Promise<ContractShift[]> {
  const fb = getFirebase(); if (!fb) return []
  const snap = await getDocs(collection(fb.db, ...shiftsColPath(uid)))
  return snap.docs.map(d => d.data() as ContractShift)
}

export function subscribeContractShifts(uid: string, cb: (shifts: ContractShift[]) => void): () => void {
  const fb = getFirebase(); if (!fb) return () => {}
  return onSnapshot(collection(fb.db, ...shiftsColPath(uid)), snap => {
    if (snap.metadata.hasPendingWrites) return           // our own write echoing back
    cb(snap.docs.map(d => d.data() as ContractShift))
  }, err => console.error('contract shifts snapshot error', err))
}

async function loadRoot(uid: string): Promise<Record<string, any> | null> {
  const fb = getFirebase(); if (!fb) return null
  const snap = await getDoc(doc(fb.db, 'users', uid))
  return snap.exists() ? (snap.data() as Record<string, any>) : null
}

export async function loadContractSettings(uid: string): Promise<Settings | null> {
  const root = await loadRoot(uid)
  return (root?.settings as Settings) ?? null
}

export function subscribeContractSettings(uid: string, cb: (settings: Settings) => void): () => void {
  const fb = getFirebase(); if (!fb) return () => {}
  return onSnapshot(doc(fb.db, 'users', uid), snap => {
    if (snap.metadata.hasPendingWrites) return
    const s = snap.exists() ? (snap.data() as any).settings : null
    if (s) cb(s as Settings)
  }, err => console.error('contract settings snapshot error', err))
}

/** True when the root doc has not yet been migrated to the current schema. */
export async function needsMigration(uid: string): Promise<boolean> {
  const root = await loadRoot(uid)
  return ((root?.schemaVersion as number) ?? 0) < SCHEMA_VERSION
}

// ── Writes (per-field merge → preserves unknown keys, CONTRACT §4.5) ─────────
/** Persist a full shift list by diffing against the previous one: upsert changed
 *  / new docs, delete removed ones. Batched. */
export async function saveContractShiftsDiff(
  uid: string, next: ContractShift[], prev: ContractShift[],
): Promise<void> {
  const fb = getFirebase(); if (!fb) return
  const db = fb.db
  const prevById = new Map(prev.map(s => [s.id, s]))
  const nextById = new Map(next.map(s => [s.id, s]))

  const upserts = next.filter(s => JSON.stringify(prevById.get(s.id)) !== JSON.stringify(s))
  const deletes = prev.filter(s => !nextById.has(s.id)).map(s => s.id)

  const ops: Array<{ kind: 'set' | 'del'; id: string; data?: ContractShift }> = [
    ...upserts.map(s => ({ kind: 'set' as const, id: s.id, data: s })),
    ...deletes.map(id => ({ kind: 'del' as const, id })),
  ]
  for (const group of chunk(ops, BATCH_LIMIT)) {
    const b = writeBatch(db)
    for (const op of group) {
      const ref = doc(db, ...shiftsColPath(uid), op.id)
      if (op.kind === 'set') b.set(ref, op.data as ContractShift)
      else b.delete(ref)
    }
    await b.commit()
  }
}

export async function saveContractSettings(uid: string, settings: Settings): Promise<void> {
  const fb = getFirebase(); if (!fb) return
  await setDoc(
    doc(fb.db, 'users', uid),
    { schemaVersion: SCHEMA_VERSION, settings, updatedAt: serverTimestamp() },
    { merge: true },
  )
}

// ── Migration (opt-in, atomic, idempotent, reversible) ───────────────────────
export interface MigrationPlan {
  shifts: ContractShift[]      // the contract shifts that WOULD be written
  settings: Settings           // the settings that WOULD be written
  toWrite: number
  alreadyMigrated: number      // existing contract shifts (idempotency)
  hasLegacy: boolean           // legacy `data` present on the root doc
}

/** DRY RUN — reads only, writes NOTHING. Returns exactly what a migration would do. */
export async function planMigration(uid: string, client = webClient(uid)): Promise<MigrationPlan> {
  const root = (await loadRoot(uid)) ?? {}
  const existing = await loadContractShifts(uid)
  const legacy: LegacyDoc = { cfg: root.cfg, data: root.data, ot: root.ot }
  const shifts = migrateLegacyShifts(legacy, client, existing)
  const settings = migrateLegacySettings(root.cfg ?? {})
  return { shifts, settings, toWrite: shifts.length, alreadyMigrated: existing.length, hasLegacy: !!root.data }
}

/**
 * Perform the migration. Writes the contract shifts (batched) then the root
 * settings + schemaVersion; legacy fields are left untouched. On error, with
 * `rollbackOnError` (default true) every shift doc written by THIS run is deleted,
 * restoring the pre-migration state.
 */
export async function runMigration(
  uid: string, client = webClient(uid), opts: { rollbackOnError?: boolean } = {},
): Promise<{ written: number; rolledBack: boolean }> {
  const rollbackOnError = opts.rollbackOnError ?? true
  const fb = getFirebase(); if (!fb) throw new Error('Offline')
  const db = fb.db
  const plan = await planMigration(uid, client)
  const committed: string[] = []
  try {
    for (const group of chunk(plan.shifts, BATCH_LIMIT)) {
      const b = writeBatch(db)
      for (const s of group) b.set(doc(db, ...shiftsColPath(uid), s.id), s)
      await b.commit()
      committed.push(...group.map(s => s.id))
    }
    // Mark migrated LAST, so an interrupted run is never seen as "done".
    await saveContractSettings(uid, plan.settings)
    return { written: committed.length, rolledBack: false }
  } catch (e) {
    console.error('contract migration failed', e)
    if (rollbackOnError && committed.length) {
      for (const group of chunk(committed, BATCH_LIMIT)) {
        const b = writeBatch(db)
        for (const id of group) b.delete(doc(db, ...shiftsColPath(uid), id))
        await b.commit()
      }
      return { written: 0, rolledBack: true }
    }
    throw e
  }
}

/** Undo a migration for testing: delete every migrated shift (has `legacyRef`)
 *  and reset schemaVersion. Legacy cfg/data/ot are never touched. */
export async function rollbackContract(uid: string): Promise<{ deleted: number }> {
  const fb = getFirebase(); if (!fb) throw new Error('Offline')
  const db = fb.db
  const migrated = (await loadContractShifts(uid)).filter(s => s.legacyRef)
  for (const group of chunk(migrated, BATCH_LIMIT)) {
    const b = writeBatch(db)
    for (const s of group) b.delete(doc(db, ...shiftsColPath(uid), s.id))
    await b.commit()
  }
  await setDoc(doc(db, 'users', uid), { schemaVersion: 1 }, { merge: true })
  return { deleted: migrated.length }
}
