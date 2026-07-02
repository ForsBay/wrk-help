'use client'

// Console bridge for testing the unified-contract migration on a TEST account,
// without shipping any UI. Renders nothing; attaches helpers on `window` bound to
// the signed-in uid. All destructive actions are explicit console calls — nothing
// runs on its own. Safe to keep mounted: it only READS unless you call migrate().
//
//   __shiftlyContract.status()          → { signedIn, uid, flagOn }
//   await __shiftlyContract.plan()      → dry run: exactly what migrate() would write (no writes)
//   __shiftlyContract.enable()          → turn the feature flag ON (reloads)
//   await __shiftlyContract.migrate()   → run the real migration (atomic, non-destructive)
//   await __shiftlyContract.rollback()  → undo the migration (deletes migrated shifts)
//   __shiftlyContract.disable()         → turn the flag OFF (reloads)

import { useEffect } from 'react'
import { useAuth } from '@/lib/auth'
import { setContractSync, contractSyncEnabled } from '@/lib/flags'
import { planMigration, runMigration, rollbackContract, needsMigration, webClient } from '@/lib/contractCloud'

export function DevMigrationBridge() {
  const { user } = useAuth()
  const uid = user?.uid ?? null
  useEffect(() => {
    if (typeof window === 'undefined') return
    const need = () => { if (!uid) throw new Error('Sign in with Google first'); return uid }
    ;(window as any).__shiftlyContract = {
      status: () => ({ signedIn: !!uid, uid, flagOn: contractSyncEnabled() }),
      enable: () => { setContractSync(true); location.reload() },
      disable: () => { setContractSync(false); location.reload() },
      needsMigration: () => needsMigration(need()),
      plan: () => planMigration(need(), webClient(need())),
      migrate: () => runMigration(need(), webClient(need())),
      rollback: () => rollbackContract(need()),
    }
    return () => { try { delete (window as any).__shiftlyContract } catch (_) {} }
  }, [uid])
  return null
}
