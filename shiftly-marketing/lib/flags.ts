// ─────────────────────────────────────────────────────────────────────────────
// Feature flags. `contractSync` gates the NEW unified-contract Firestore sync
// (root `settings` + `users/{uid}/shifts` subcollection + legacy migration).
//
// OFF by default → production behaviour is unchanged and NOTHING is written to
// the contract or migrated. Enable per-machine/test-account from the console:
//     localStorage.setItem('shiftly_flag_contract_sync', '1'); location.reload()
// or globally at build time with NEXT_PUBLIC_CONTRACT_SYNC=1.
// ─────────────────────────────────────────────────────────────────────────────

const LS_KEY = 'shiftly_flag_contract_sync'

/** Is the new unified-contract sync enabled on this client? Default false. */
export function contractSyncEnabled(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const v = window.localStorage.getItem(LS_KEY)
    if (v === '1') return true
    if (v === '0') return false
  } catch (_) { /* private mode */ }
  return process.env.NEXT_PUBLIC_CONTRACT_SYNC === '1'
}

/** Persisted override so a tester can flip the flag without a rebuild. */
export function setContractSync(on: boolean): void {
  try { window.localStorage.setItem(LS_KEY, on ? '1' : '0') } catch (_) {}
}
