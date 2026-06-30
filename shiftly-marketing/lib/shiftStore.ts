// ─────────────────────────────────────────────────────────────────────────────
// Shift persistence — the REAL data layer behind the headless `useShifts`
// contract. Replaces the in-memory demo array with a durable store:
//
//   • survives page reload (localStorage),
//   • stays in sync across open shells/tabs in the same browser (the `storage`
//     event fires Desktop ↔ Mobile updates with no reload),
//   • seeds once on first run so an empty browser still shows example data.
//
// It is intentionally a thin, swappable module: pointing `load/save/subscribe`
// at Firestore later is a drop-in replacement — `useShifts` never changes, exactly
// as its `decouple-implementation` contract intended. SSR-safe (guards `window`).
// ─────────────────────────────────────────────────────────────────────────────

import type { Shift } from '../components/app/features/shifts/useShifts'

const KEY = 'shiftly_shifts_v1'
const SEED_FLAG = 'shiftly_seeded_v1'

const hasWindow = () => typeof window !== 'undefined'

/** Read the persisted shifts. On a fresh browser, seed once and persist the seed. */
export function loadShifts(seed: Shift[]): Shift[] {
  if (!hasWindow()) return seed
  try {
    const raw = window.localStorage.getItem(KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed as Shift[]
    }
    // First run → persist the seed so every surface starts from the same data.
    if (!window.localStorage.getItem(SEED_FLAG)) {
      window.localStorage.setItem(KEY, JSON.stringify(seed))
      window.localStorage.setItem(SEED_FLAG, '1')
    }
  } catch (_) { /* private mode / quota — fall back to seed in memory */ }
  return seed
}

/** Persist the full shift list. */
export function saveShifts(shifts: Shift[]): void {
  if (!hasWindow()) return
  try { window.localStorage.setItem(KEY, JSON.stringify(shifts)) } catch (_) {}
}

/**
 * Subscribe to changes made by OTHER shells/tabs (the `storage` event does not
 * fire in the tab that made the change — that one already has the new state).
 * Returns an unsubscribe fn.
 */
export function subscribeShifts(cb: (shifts: Shift[]) => void): () => void {
  if (!hasWindow()) return () => {}
  const handler = (e: StorageEvent) => {
    if (e.key !== KEY || e.newValue == null) return
    try {
      const parsed = JSON.parse(e.newValue)
      if (Array.isArray(parsed)) cb(parsed as Shift[])
    } catch (_) {}
  }
  window.addEventListener('storage', handler)
  return () => window.removeEventListener('storage', handler)
}
