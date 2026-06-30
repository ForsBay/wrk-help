// ─────────────────────────────────────────────────────────────────────────────
// Cloud store — Firestore-backed shift persistence for signed-in users.
//
// SAFETY: the phone PWA keeps its real data in `users/{uid}.data` / `.cfg` / `.ot`.
// This module ONLY ever reads/writes a SEPARATE field, `users/{uid}.shiftlyApp`,
// using setDoc(..., { merge: true }) — which adds/overwrites just that field and
// never removes the legacy ones. So binding the new app to the same account is
// non-destructive to existing phone data.
//
// Cross-device sync: writes are debounced; `subscribeCloud` uses onSnapshot so a
// change on the PC appears on the phone (and vice-versa) without a reload.
// ─────────────────────────────────────────────────────────────────────────────

import { doc, getDoc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { getFirebase } from './firebase'
import type { Shift } from '../components/app/features/shifts/useShifts'

const FIELD = 'shiftlyApp'

/** One-time read of the user's app shifts. Returns null if none stored yet. */
export async function loadCloud(uid: string): Promise<Shift[] | null> {
  const fb = getFirebase()
  if (!fb) return null
  try {
    const snap = await getDoc(doc(fb.db, 'users', uid))
    const app = snap.exists() ? (snap.data() as any)[FIELD] : null
    return app && Array.isArray(app.shifts) ? (app.shifts as Shift[]) : null
  } catch (e) {
    console.error('cloud load failed', e)
    return null
  }
}

/** Persist the shift list to the cloud (debounced by the caller). */
export async function saveCloud(uid: string, shifts: Shift[]): Promise<void> {
  const fb = getFirebase()
  if (!fb) return
  try {
    await setDoc(
      doc(fb.db, 'users', uid),
      { [FIELD]: { shifts, updatedAt: serverTimestamp() } },
      { merge: true },
    )
  } catch (e) {
    console.error('cloud save failed', e)
  }
}

/** Live updates from other devices. Ignores our own pending writes. */
export function subscribeCloud(uid: string, cb: (shifts: Shift[]) => void): () => void {
  const fb = getFirebase()
  if (!fb) return () => {}
  return onSnapshot(doc(fb.db, 'users', uid), s => {
    if (s.metadata.hasPendingWrites) return            // our own write echoing back
    const app = s.exists() ? (s.data() as any)[FIELD] : null
    if (app && Array.isArray(app.shifts)) cb(app.shifts as Shift[])
  }, err => console.error('cloud snapshot error', err))
}
