'use client'

// Desktop toolbar sync cluster — a live "calendar synced" pill with a relative
// last-sync time, a stack of connected-account avatars, and a working refresh.
// Reads as a premium native status bar; demo-local state only (no Platform/Service
// changes). Mirrors the mobile Integrations language so the brand is consistent.
import { useState } from 'react'
import { Icon } from '../../ui/Icon'

const ACCOUNTS = [
  { id: 'g', label: 'work@gmail.com', color: '#34c98a' },
  { id: 'p', label: 'personal@gmail.com', color: '#8b8bf5' },
]
const rel = (m: number) => m < 1 ? 'just now' : m < 60 ? `${m} min ago` : `${Math.round(m / 60)} h ago`

export function SyncStatus() {
  const [mins, setMins] = useState(2)
  const [syncing, setSyncing] = useState(false)

  const sync = () => {
    if (syncing) return
    setSyncing(true)
    setTimeout(() => { setSyncing(false); setMins(0) }, 900)
  }

  return (
    <div className="syncbar" title="Connected calendars">
      <span className="acct-stack">
        {ACCOUNTS.map(a => (
          <span key={a.id} className="acct-avatar" style={{ background: a.color }} title={a.label}>
            {a.label[0].toUpperCase()}
          </span>
        ))}
      </span>
      <span className="sync-pill">
        <span className={`sync-dot${syncing ? '' : ' on'}`} />
        {syncing ? 'Syncing…' : `Synced ${rel(mins)}`}
      </span>
      <button className="icon-btn sync-refresh" onClick={sync} title="Sync now" aria-label="Sync now">
        <Icon name="sync" size={16} className={syncing ? 'spin' : undefined} />
      </button>
    </div>
  )
}
