'use client'

// MOBILE Integrations / Calendar Sync view. Connection cards with a clear live
// status (connected account, last-sync time, a working "Sync now" affordance)
// and "coming soon" providers that never pretend to be live. Mirrors the desktop
// sync language so the brand reads the same on both. Demo-local state only — no
// platform/service changes.
import { useState } from 'react'
import { Icon, type IconName } from '../../ui/Icon'
import { useToast } from '../../ui/Toast'

interface Provider {
  id: string; name: string; detail: string; icon: IconName; connected: boolean; soon?: boolean
}

const INITIAL: Provider[] = [
  { id: 'google',  name: 'Google Calendar',    detail: 'work@gmail.com',   icon: 'calendar', connected: true },
  { id: 'outlook', name: 'Outlook Calendar',   detail: 'Microsoft 365',    icon: 'calendar', connected: false, soon: true },
  { id: 'apple',   name: 'Apple Calendar',     detail: 'iCloud',           icon: 'calendar', connected: false, soon: true },
]

const relTime = (mins: number) => mins < 1 ? 'just now' : mins < 60 ? `${mins} min ago` : `${Math.round(mins / 60)} h ago`

export function MobileIntegrations() {
  const [providers, setProviders] = useState(INITIAL)
  const [lastSync, setLastSync] = useState(4) // minutes ago
  const [syncing, setSyncing] = useState(false)
  const toast = useToast()

  const syncNow = () => {
    setSyncing(true)
    setTimeout(() => { setSyncing(false); setLastSync(0); toast.success('Calendar synced', 'sync') }, 900)
  }
  const toggle = (id: string) => setProviders(p => p.map(x => x.id === id ? { ...x, connected: !x.connected } : x))

  return (
    <div className="m-stack">
      <section className="m-section">
        <h2 className="m-section-title">Calendar sync</h2>
        <div className="m-stack" style={{ gap: 12 }}>
          {providers.map(p => (
            <div key={p.id} className="conn-card">
              <span className="conn-icon" style={p.connected ? { background: 'var(--accent-soft)', color: 'var(--accent)' } : undefined}>
                <Icon name={p.icon} size={20} />
              </span>
              <div className="conn-main">
                <div className="conn-name">{p.name}</div>
                <div className="conn-detail">
                  {p.connected
                    ? <><span className="sync-dot on" /> {p.detail} · synced {relTime(lastSync)}</>
                    : p.soon ? 'Coming soon' : p.detail}
                </div>
              </div>
              {p.soon
                ? <span className="pill-soon">Soon</span>
                : <button className={p.connected ? 'btn-ghost' : 'cta-primary'} style={{ padding: '8px 14px', fontSize: 13 }} onClick={() => toggle(p.id)}>{p.connected ? 'Disconnect' : 'Connect'}</button>}
            </div>
          ))}
        </div>
      </section>

      <button className="btn-ghost sync-now" onClick={syncNow} disabled={syncing}>
        <Icon name="sync" size={16} className={syncing ? 'spin' : undefined} />
        {syncing ? 'Syncing…' : 'Sync now'}
      </button>
    </div>
  )
}
