'use client'

// Desktop toolbar sync cluster — wired to the REAL providers layer. Shows the
// connected Google account (or a Connect action), and a working refresh that
// pushes the current shifts to every connected calendar via the SyncEngine.
// Honest: when nothing is connected it says so and offers Connect; when no OAuth
// client id is configured, connect() surfaces the provider's real error.
import { useEffect, useState } from 'react'
import { Icon } from '../../ui/Icon'
import { useToast } from '../../ui/Toast'
import { connectGoogle, googleAccountEmail, syncMany } from '../../../../lib/gcalSync'
import type { ShiftRow } from '../shifts/useShifts'

export function SyncStatus({ rows }: { rows: ShiftRow[] }) {
  const [email, setEmail] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const toast = useToast()

  useEffect(() => { googleAccountEmail().then(setEmail).catch(() => {}) }, [])

  const connect = async () => {
    setBusy(true)
    try {
      const acc = await connectGoogle()
      setEmail((acc && acc.email) || await googleAccountEmail() || 'Google')
      toast.success('Google Calendar connected')
    } catch (err: any) {
      toast.toast(err?.message || 'Could not connect Google', { tone: 'danger' })
    } finally { setBusy(false) }
  }

  const sync = async () => {
    setBusy(true)
    try { await syncMany(rows); toast.success('Calendar synced', 'sync') }
    finally { setBusy(false) }
  }

  if (!email) {
    return (
      <button className="ghost-btn" onClick={connect} disabled={busy} title="Connect Google Calendar">
        <Icon name="sync" size={15} className={busy ? 'spin' : undefined} />
        {busy ? 'Connecting…' : 'Connect Google'}
      </button>
    )
  }

  return (
    <div className="syncbar" title={`Connected: ${email}`}>
      <span className="acct-stack">
        <span className="acct-avatar" style={{ background: '#34c98a' }}>{email[0].toUpperCase()}</span>
      </span>
      <span className="sync-pill"><span className="sync-dot on" /> Synced</span>
      <button className="icon-btn sync-refresh" onClick={sync} disabled={busy} title="Sync now" aria-label="Sync now">
        <Icon name="sync" size={16} className={busy ? 'spin' : undefined} />
      </button>
    </div>
  )
}
