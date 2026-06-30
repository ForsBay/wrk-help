'use client'

// MOBILE Integrations / Calendar Sync view — now wired to the REAL universal
// providers layer (window.__calendars) the standalone PWA uses. "Connect" runs the
// actual Google OAuth flow; "Sync now" pushes the current shifts to every connected
// calendar; "Disconnect" really disconnects. When no OAuth client id is configured
// the provider throws `requires_config` and we surface that honestly instead of
// faking a connection. Outlook/Apple stay genuinely "coming soon".
import { useEffect, useState } from 'react'
import type { ShiftsContext } from '../shifts/useShifts'
import { Icon, type IconName } from '../../ui/Icon'
import { useToast } from '../../ui/Toast'
import { connectGoogle, disconnectGoogle, googleAccountEmail, syncMany } from '../../../../lib/gcalSync'

interface Provider { id: string; name: string; detail: string; icon: IconName; soon?: boolean }
const PROVIDERS: Provider[] = [
  { id: 'google',  name: 'Google Calendar',  detail: 'Sign in with Google', icon: 'calendar' },
  { id: 'outlook', name: 'Outlook Calendar', detail: 'Coming soon',          icon: 'calendar', soon: true },
  { id: 'apple',   name: 'Apple Calendar',   detail: 'Coming soon',          icon: 'calendar', soon: true },
]

export function MobileIntegrations({ ctx }: { ctx: ShiftsContext }) {
  const [email, setEmail] = useState<string | null>(null)
  const [busy, setBusy] = useState<string | null>(null) // provider id mid-action
  const toast = useToast()

  // Reflect any already-connected Google account from the providers layer.
  useEffect(() => { googleAccountEmail().then(setEmail).catch(() => {}) }, [])

  const connect = async () => {
    setBusy('google')
    try {
      const acc = await connectGoogle()
      const e = (acc && acc.email) || await googleAccountEmail()
      setEmail(e || 'Google')
      toast.success('Google Calendar connected')
    } catch (err: any) {
      toast.toast(err?.message || 'Could not connect Google', { tone: 'danger' })
    } finally { setBusy(null) }
  }

  const disconnect = async () => {
    setBusy('google')
    try { await disconnectGoogle(); setEmail(null); toast.toast('Disconnected', { tone: 'info' }) }
    finally { setBusy(null) }
  }

  const syncNow = async () => {
    if (!email) { toast.toast('Connect a calendar first', { tone: 'info' }); return }
    setBusy('sync')
    try { await syncMany(ctx.state.rows); toast.success('Calendar synced', 'sync') }
    finally { setBusy(null) }
  }

  return (
    <div className="m-stack">
      <section className="m-section">
        <h2 className="m-section-title">Calendar sync</h2>
        <div className="m-stack" style={{ gap: 12 }}>
          {PROVIDERS.map(p => {
            const connected = p.id === 'google' && !!email
            return (
              <div key={p.id} className="conn-card">
                <span className="conn-icon" style={connected ? { background: 'var(--accent-soft)', color: 'var(--accent)' } : undefined}>
                  <Icon name={p.icon} size={20} />
                </span>
                <div className="conn-main">
                  <div className="conn-name">{p.name}</div>
                  <div className="conn-detail">
                    {connected ? <><span className="sync-dot on" /> {email}</> : p.soon ? 'Coming soon' : p.detail}
                  </div>
                </div>
                {p.soon
                  ? <span className="pill-soon">Soon</span>
                  : connected
                    ? <button className="btn-ghost" style={{ padding: '8px 14px', fontSize: 13 }} disabled={busy === 'google'} onClick={disconnect}>Disconnect</button>
                    : <button className="cta-primary" style={{ padding: '8px 14px', fontSize: 13 }} disabled={busy === 'google'} onClick={connect}>{busy === 'google' ? '…' : 'Connect'}</button>}
              </div>
            )
          })}
        </div>
      </section>

      <button className="btn-ghost sync-now" onClick={syncNow} disabled={busy === 'sync'}>
        <Icon name="sync" size={16} className={busy === 'sync' ? 'spin' : undefined} />
        {busy === 'sync' ? 'Syncing…' : 'Sync now'}
      </button>
    </div>
  )
}
