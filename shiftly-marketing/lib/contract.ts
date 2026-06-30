// ─────────────────────────────────────────────────────────────────────────────
// Shiftly UNIFIED DATA CONTRACT — reference implementation (v2).
//
// The single source of truth for how every client (Desktop / Web / Android / iOS)
// shapes its Firestore data lives in /CONTRACT.md. THIS module is the executable
// mirror of that spec for the TS clients: canonical types, normalization, the
// one-time legacy→v2 migration, and converters to/from the existing PC `Shift`.
//
// Pure & portable: NO Firebase imports, no React, no `window`. Only type-only
// imports from the app so it can be unit-tested and reused anywhere. If this file
// and CONTRACT.md disagree, CONTRACT.md wins — fix this file.
// ─────────────────────────────────────────────────────────────────────────────

import type { Shift } from '../components/app/features/shifts/useShifts'
import type { ShiftType } from '../components/app/features/shifts/categories'

export const SCHEMA_VERSION = 2

// ── Provenance (CONTRACT §4.4) ───────────────────────────────────────────────
export type Platform = 'web' | 'desktop' | 'android' | 'ios'
/** Who wrote a record. The one place provenance grows (add deviceId, etc. here). */
export interface ClientRef {
  platform: Platform
  appVersion: string
  uid: string
  [k: string]: unknown
}
export interface Audit {
  createdAt: number          // epoch ms
  createdBy: ClientRef
  updatedAt: number          // epoch ms
  updatedBy: ClientRef
}

// ── Shift (CONTRACT §3) ──────────────────────────────────────────────────────
export type Category = ShiftType            // regular|overtime|night|training|leave
export const KNOWN_CATEGORIES: Category[] = ['regular', 'overtime', 'night', 'training', 'leave']

export interface Overtime { hours: number; pct: number; start: string | null; end: string | null }
export interface Gcal { eventId: string | null; calendarId: string | null; synced: boolean }

export interface ContractShift {
  id: string                 // ULID, == doc id
  date: string               // 'YYYY-MM-DD' (queryable)
  start: string | null       // 'HH:MM' or null
  end: string | null         // 'HH:MM' or null (may be <= start → crosses midnight)
  hours: number              // authoritative worked hours for pay
  breakMin: number           // unpaid break minutes
  overtime: Overtime | null
  workplace: string | null
  notes: string | null
  category: Category
  planned: boolean
  rateOverride: number | null
  gcal: Gcal | null
  legacyRef: string | null   // 'YYYY-MM-DD' migrated from; null for native shifts
  audit: Audit
  schemaVersion: number
  ext: Record<string, unknown>
}

// ── Settings (CONTRACT §2) ───────────────────────────────────────────────────
export interface PaySettings { rate: number; currency: string }
export interface LocaleSettings { lang: string; weekStart: number }
export interface AppearanceSettings { theme: 'dark' | 'light' }
export interface IntegrationSettings { calSync: boolean }
export interface NotificationSettings { shiftReminders: boolean }
export interface Settings {
  schemaVersion: number
  pay: PaySettings
  locale: LocaleSettings
  appearance: AppearanceSettings
  integrations: IntegrationSettings
  notifications: NotificationSettings
  ext: Record<string, unknown>
  [group: string]: unknown   // unknown groups are preserved, not dropped
}
export interface Profile { displayName: string | null; email: string | null; photo: string | null }
export interface RootDoc {
  schemaVersion: number
  settings: Settings
  profile: Profile
  audit: Audit
  [k: string]: unknown
}

export const DEFAULT_SETTINGS = (): Settings => ({
  schemaVersion: SCHEMA_VERSION,
  pay: { rate: 31.4, currency: 'PLN' },
  locale: { lang: 'en', weekStart: 1 },
  appearance: { theme: 'dark' },
  integrations: { calSync: false },
  notifications: { shiftReminders: false },
  ext: {},
})

const UNKNOWN_CLIENT: ClientRef = { platform: 'web', appVersion: '0.0.0', uid: '' }

// ── Small pure helpers ───────────────────────────────────────────────────────
const HHMM = /^\d{2}:\d{2}$/
const round2 = (n: number) => Math.round(n * 100) / 100
const clamp = (n: number, lo: number, hi: number) => Math.min(Math.max(n, lo), hi)
const pad2 = (v: string | number) => String(v).padStart(2, '0')
const num = (v: unknown, fallback: number): number => {
  const n = typeof v === 'number' ? v : parseFloat(String(v))
  return Number.isFinite(n) ? n : fallback
}
const toMin = (hhmm: string) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m }
/** Worked hours between two HH:MM, wrapping past midnight. */
const rangeHours = (start: string, end: string) => {
  let min = toMin(end) - toMin(start)
  if (min < 0) min += 1440
  return round2(min / 60)
}
const isFutureDate = (date: string): boolean => {
  const [y, m, d] = date.split('-').map(Number)
  const t = new Date()
  return new Date(y, m - 1, d).getTime() > new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime()
}
const weekdayOf = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' })

// ── ULID (Crockford base32, time-sortable) — dependency-free ─────────────────
const ENC = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'
const rnd32 = (): number => {
  const g = (globalThis as unknown as { crypto?: { getRandomValues?: (a: Uint8Array) => Uint8Array } })
  if (g.crypto?.getRandomValues) { const a = new Uint8Array(1); g.crypto.getRandomValues(a); return a[0] % 32 }
  return Math.floor(Math.random() * 32)
}
/** A 26-char ULID: 48-bit ms timestamp (10 chars) + 80 bits randomness (16 chars). */
export function ulid(now: number = Date.now()): string {
  let t = now, time = ''
  for (let i = 0; i < 10; i++) { time = ENC[t % 32] + time; t = Math.floor(t / 32) }
  let rand = ''
  for (let i = 0; i < 16; i++) rand += ENC[rnd32()]
  return time + rand
}

// ── Normalization ────────────────────────────────────────────────────────────
type LegacyOt = { h?: number; hours?: number; pct?: number; mult?: number; from?: string; to?: string; start?: string; end?: string }
export type ShiftInput =
  Partial<Omit<ContractShift, 'overtime' | 'audit' | 'category'>>
  & { overtime?: Overtime | LegacyOt | null; audit?: Partial<Audit>; category?: string }

/** Coerce any (legacy or v2) overtime shape into the unified `Overtime | null`. */
export function normalizeOvertime(ot: Overtime | LegacyOt | null | undefined): Overtime | null {
  if (!ot) return null
  const start = ('start' in ot && ot.start) || ('from' in ot && ot.from) || null
  const end = ('end' in ot && ot.end) || ('to' in ot && ot.to) || null
  let hours = num((ot as LegacyOt).hours ?? (ot as LegacyOt).h, 0)
  if (start && end && HHMM.test(start) && HHMM.test(end)) hours = rangeHours(start, end)
  if (hours <= 0) return null
  const pct = ot.pct != null ? num(ot.pct, 150)
    : (ot as LegacyOt).mult != null ? num((ot as LegacyOt).mult, 1.5) * 100
    : 150
  return { hours: round2(hours), pct: clamp(pct, 0, 1000), start: start || null, end: end || null }
}

const normalizeCategory = (c: string | undefined): Category =>
  (KNOWN_CATEGORIES as string[]).includes(c ?? '') ? (c as Category) : 'regular'

function makeAudit(input: Partial<Audit> | undefined, client: ClientRef | undefined, now: number): Audit {
  const who = client ?? input?.updatedBy ?? input?.createdBy ?? UNKNOWN_CLIENT
  return {
    createdAt: input?.createdAt ?? now,
    createdBy: input?.createdBy ?? who,
    updatedAt: client ? now : (input?.updatedAt ?? now),
    updatedBy: client ?? input?.updatedBy ?? who,
  }
}

/**
 * Fill defaults, clamp, recompute `hours` from start/end−break when both times are
 * present (CONTRACT §4.1), and stamp audit. Preserves `ext` and unknown keys.
 * Pass `client` on a real write so updatedAt/updatedBy are stamped.
 */
export function normalizeShift(input: ShiftInput, client?: ClientRef): ContractShift {
  const now = Date.now()
  const start = input.start && HHMM.test(input.start) ? input.start : null
  const end = input.end && HHMM.test(input.end) ? input.end : null
  const breakMin = Math.max(0, num(input.breakMin, 0))

  let hours: number
  if (start && end) hours = Math.max(0, rangeHours(start, end) - breakMin / 60)  // times win
  else hours = Math.max(0, num(input.hours, 0))                                  // manual entry
  hours = round2(hours)

  return {
    id: input.id || ulid(),
    date: String(input.date ?? ''),
    start,
    end,
    hours,
    breakMin,
    overtime: normalizeOvertime(input.overtime),
    workplace: input.workplace ?? null,
    notes: input.notes ?? null,
    category: normalizeCategory(input.category),
    planned: input.planned ?? isFutureDate(String(input.date ?? '')),
    rateOverride: input.rateOverride != null ? num(input.rateOverride, 0) : null,
    gcal: input.gcal ?? null,
    legacyRef: input.legacyRef ?? null,
    audit: makeAudit(input.audit, client, now),
    schemaVersion: SCHEMA_VERSION,
    ext: input.ext ?? {},
  }
}

// ── Legacy → v2 migration (CONTRACT §5) ──────────────────────────────────────
export interface LegacyDoc {
  cfg?: Record<string, unknown>
  data?: Record<string, Record<string, number>>           // { 'YYYY-MM': { day: hours } }
  ot?: Record<string, Record<string, LegacyOt>>            // { 'YYYY-MM': { day: ot } }
  calIds?: Record<string, Record<string, string>>         // { 'YYYY-MM': { day: gcalEventId } }
}

/**
 * Convert a legacy `{cfg,data,ot,calIds}` doc into v2 shift records. Idempotent:
 * pass any already-migrated shifts as `existing` and a day that already has a shift
 * with the same `legacyRef` is updated in place (re-runs never duplicate).
 */
export function migrateLegacyShifts(legacy: LegacyDoc, client: ClientRef, existing: ContractShift[] = []): ContractShift[] {
  const byRef = new Map<string, ContractShift>()
  for (const s of existing) if (s.legacyRef) byRef.set(s.legacyRef, s)

  const out: ContractShift[] = []
  const data = legacy.data ?? {}
  for (const mo of Object.keys(data)) {
    for (const day of Object.keys(data[mo] ?? {})) {
      const hours = Number(data[mo][day])
      if (!Number.isFinite(hours)) continue
      const ref = `${mo}-${pad2(day)}`
      const prev = byRef.get(ref)
      const evId = legacy.calIds?.[mo]?.[day] ?? null
      out.push(normalizeShift({
        id: prev?.id,
        date: ref,
        start: null,
        end: null,
        hours,
        breakMin: 0,
        overtime: legacy.ot?.[mo]?.[day],
        category: 'regular',
        planned: isFutureDate(ref),
        gcal: evId ? { eventId: evId, calendarId: null, synced: true } : null,
        legacyRef: ref,
        audit: prev?.audit,
        ext: prev?.ext ?? {},
      }, client))
    }
  }
  return out
}

/** Map a legacy flat `cfg` (with `cur`) into the grouped `Settings`. */
export function migrateLegacySettings(cfg: Record<string, unknown> = {}): Settings {
  const s = DEFAULT_SETTINGS()
  if (cfg.rate != null) s.pay.rate = num(cfg.rate, s.pay.rate)
  if (cfg.cur != null) s.pay.currency = String(cfg.cur)
  if (cfg.currency != null) s.pay.currency = String(cfg.currency)
  if (cfg.lang != null) s.locale.lang = String(cfg.lang)
  if (cfg.weekStart != null) s.locale.weekStart = num(cfg.weekStart, 1)
  if (cfg.theme === 'light' || cfg.theme === 'dark') s.appearance.theme = cfg.theme
  if (cfg.calSync != null) s.integrations.calSync = !!cfg.calSync
  return s
}

// ── Bridge to/from the existing PC `Shift` ───────────────────────────────────
/** Contract shift → the PC app's `Shift` (used by the desktop/web UI layer). */
export function toPcShift(c: ContractShift): Shift {
  return {
    id: c.id,
    date: c.date,
    weekday: weekdayOf(c.date),
    from: c.start ?? '',
    to: c.end ?? '',
    hours: c.hours,
    overtime: c.overtime?.hours ?? 0,
    planned: c.planned,
    breakMin: c.breakMin,
    workplace: c.workplace ?? undefined,
    notes: c.notes ?? undefined,
    gcalSynced: c.gcal?.synced ?? false,
    type: c.category,
    rate: c.rateOverride ?? undefined,
  }
}

/**
 * PC `Shift` → contract shift. Pass the previous contract shift (if this is an edit)
 * so non-PC fields — `ext`, `legacyRef`, overtime times, gcal ids, createdAt — are
 * preserved rather than lost (CONTRACT §4.5).
 */
export function fromPcShift(s: Shift, client: ClientRef, prev?: ContractShift): ContractShift {
  const overtime: Overtime | null = s.overtime && s.overtime > 0
    ? { hours: s.overtime, pct: prev?.overtime?.pct ?? 150, start: prev?.overtime?.start ?? null, end: prev?.overtime?.end ?? null }
    : null
  const gcal: Gcal | null = prev?.gcal
    ? { ...prev.gcal, synced: s.gcalSynced ?? prev.gcal.synced }
    : (s.gcalSynced != null ? { eventId: null, calendarId: null, synced: s.gcalSynced } : null)
  return normalizeShift({
    id: s.id || prev?.id,
    date: s.date,
    start: s.from || null,
    end: s.to || null,
    hours: s.hours,
    breakMin: s.breakMin ?? prev?.breakMin ?? 0,
    overtime,
    workplace: s.workplace ?? null,
    notes: s.notes ?? null,
    category: s.type ?? 'regular',
    planned: s.planned,
    rateOverride: s.rate ?? null,
    gcal,
    legacyRef: prev?.legacyRef ?? null,
    audit: prev?.audit,
    ext: prev?.ext ?? {},
  }, client)
}

/**
 * Phone-style per-day rollup of rich shifts — for a client that shows one entry per
 * day (today's phone). Sums worked + overtime hours of every shift on each date.
 */
export function rollupByDay(shifts: ContractShift[]): Record<string, { hours: number; overtimeHours: number }> {
  const out: Record<string, { hours: number; overtimeHours: number }> = {}
  for (const s of shifts) {
    const day = (out[s.date] ??= { hours: 0, overtimeHours: 0 })
    day.hours += s.hours
    day.overtimeHours += s.overtime?.hours ?? 0
  }
  for (const k of Object.keys(out)) {
    out[k].hours = round2(out[k].hours)
    out[k].overtimeHours = round2(out[k].overtimeHours)
  }
  return out
}
