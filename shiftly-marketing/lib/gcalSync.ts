// ─────────────────────────────────────────────────────────────────────────────
// Google Calendar bridge — wires the app to the EXISTING universal providers
// layer (the same ES-module engine the standalone PWA uses), served by this app
// at /app/providers/index.js and exposed on `window.__calendars`.
//
// We do NOT re-implement sync. We load that layer once and call its public API:
//   • syncShift(descriptor) → create/update the event across connected accounts
//   • removeDay(mo, day)    → delete the event(s) for a day
//   • connect('google')     → interactive OAuth (needs a Web client id)
//
// When no Google account is connected, the SyncEngine's syncShift is a safe no-op
// (it has no writable targets), so calling these is always safe. Connecting needs
// `window.__shiftlyConfig.google.clientId` (env: NEXT_PUBLIC_GOOGLE_CLIENT_ID);
// until that is set, connect() throws `requires_config` and we surface it honestly
// instead of faking success.
// ─────────────────────────────────────────────────────────────────────────────

import { categoryOf, type ShiftType } from '../components/app/features/shifts/categories'

// Minimal structural shape — accepts both the raw Shift (from state) and the
// formatted ShiftRow, so callers never have to pre-format before syncing.
interface SyncableShift {
  date: string; from: string; to: string; hours: number; overtime: number
  workplace?: string; notes?: string; type?: ShiftType
}

interface CalendarsApi {
  syncShift: (d: any) => Promise<void>
  removeDay: (mo: string, day: number) => Promise<void>
  syncMany: (ds: any[]) => Promise<void>
  getAccounts: () => any[]
  hasAnyAccount: () => boolean
  isEnabled: () => boolean
  connect: (type: string) => Promise<any>
  disconnect: (id: string) => Promise<void>
  onChange: (fn: (accts: any[]) => void) => () => void
}
declare global {
  interface Window {
    __calendars?: CalendarsApi
    __shiftlyConfig?: { google?: { clientId?: string }; outlook?: { clientId?: string } }
  }
}

const PROVIDERS_SRC = '/app/providers/index.js'
let loadPromise: Promise<CalendarsApi | null> | null = null

/** Google event colour ids per shift category (keeps calendar colours on-brand). */
const COLOR: Record<string, string> = { regular: '10', overtime: '6', night: '9', training: '7', leave: '8' }

/** Lazy-load the providers ES module exactly once; resolves to the API or null. */
export function ensureProviders(): Promise<CalendarsApi | null> {
  if (typeof window === 'undefined') return Promise.resolve(null)
  if (window.__calendars) return Promise.resolve(window.__calendars)
  if (loadPromise) return loadPromise

  loadPromise = new Promise((resolve) => {
    // Make the (optional) OAuth client id visible to the Google provider before load.
    window.__shiftlyConfig = window.__shiftlyConfig || {
      google: { clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '' },
    }
    const done = () => resolve(window.__calendars || null)
    if (window.__calendars) return done()
    window.addEventListener('calendars:ready', done, { once: true })

    const s = document.createElement('script')
    s.type = 'module'
    s.src = PROVIDERS_SRC
    s.onerror = () => resolve(null)
    document.head.appendChild(s)
    // Safety timeout so callers never hang if the module can't load.
    setTimeout(done, 4000)
  })
  return loadPromise
}

/** ShiftRow → SyncEngine descriptor (one 'work' event spanning the shift). */
function toDescriptor(row: SyncableShift) {
  const [y, m, d] = row.date.split('-').map(Number)
  const cat = categoryOf(row.type)
  return {
    mo: `${y}-${String(m).padStart(2, '0')}`,
    day: d,
    kind: 'work' as const,
    hours: row.hours + row.overtime,
    from: row.from,
    to: row.to,
    title: row.workplace ? `${cat.label} · ${row.workplace}` : `Shiftly · ${cat.label}`,
    notes: row.notes || '',
    colorId: COLOR[cat.id] || '10',
  }
}

/** Push (create/update) a shift's event. No-op when no account is connected. */
export async function pushShift(row: SyncableShift): Promise<void> {
  const api = await ensureProviders()
  if (!api || !api.hasAnyAccount()) return
  try { await api.syncShift(toDescriptor(row)) } catch (_) {}
}

/** Remove a shift's event(s) for its day. No-op when no account is connected. */
export async function removeShift(row: SyncableShift): Promise<void> {
  const api = await ensureProviders()
  if (!api || !api.hasAnyAccount()) return
  const [y, m, d] = row.date.split('-').map(Number)
  try { await api.removeDay(`${y}-${String(m).padStart(2, '0')}`, d) } catch (_) {}
}

/** Whether the providers layer reports at least one connected, writable account. */
export async function hasGoogleAccount(): Promise<boolean> {
  const api = await ensureProviders()
  return !!(api && api.isEnabled())
}

/** Interactive Google connect via the existing provider. Throws on missing config. */
export async function connectGoogle(): Promise<{ email?: string } | null> {
  const api = await ensureProviders()
  if (!api) throw new Error('Calendar layer unavailable')
  return api.connect('google')
}

/** Re-sync a batch (used by "Sync now"). */
export async function syncMany(rows: SyncableShift[]): Promise<void> {
  const api = await ensureProviders()
  if (!api || !api.hasAnyAccount()) return
  try { await api.syncMany(rows.map(toDescriptor)) } catch (_) {}
}

/** The connected Google account's email, or null. */
export async function googleAccountEmail(): Promise<string | null> {
  const api = await ensureProviders()
  if (!api) return null
  const a = api.getAccounts().find((x: any) => x.providerType === 'google')
  return a ? (a.email || 'Google') : null
}

/** Disconnect the given Google account by id (or the first one if id omitted). */
export async function disconnectGoogle(): Promise<void> {
  const api = await ensureProviders()
  if (!api) return
  const a = api.getAccounts().find((x: any) => x.providerType === 'google')
  if (a) { try { await api.disconnect(a.id) } catch (_) {} }
}
