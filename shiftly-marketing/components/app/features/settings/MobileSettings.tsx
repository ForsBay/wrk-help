'use client'

// MOBILE Settings view. Grouped rows in the shared card language — toggles,
// value rows and a profile header. Demo-local state (no persistence wired); it
// exists to give the brand a complete, consistent settings surface on mobile and
// to exercise the switch/row components used elsewhere.
import { useState } from 'react'
import type { ShiftsContext } from '../shifts/useShifts'
import { Icon, type IconName } from '../../ui/Icon'

export function MobileSettings({ ctx }: { ctx: ShiftsContext }) {
  const [dark, setDark] = useState(true)
  const [notify, setNotify] = useState(true)
  const [autoSync, setAutoSync] = useState(true)

  return (
    <div className="m-stack">
      {/* profile header */}
      <div className="profile-card">
        <span className="profile-avatar"><Icon name="user" size={24} /></span>
        <div>
          <div className="profile-name">Alex Worker</div>
          <div className="profile-mail">work@gmail.com</div>
        </div>
      </div>

      <Group title="Preferences">
        <ToggleRow icon="moon" label="Dark theme" on={dark} onToggle={() => setDark(v => !v)} />
        <ToggleRow icon="bell" label="Shift reminders" on={notify} onToggle={() => setNotify(v => !v)} />
        <ToggleRow icon="sync" label="Auto-sync calendar" on={autoSync} onToggle={() => setAutoSync(v => !v)} />
      </Group>

      <Group title="Pay">
        <ValueRow icon="coin" label="Hourly rate" value={`${ctx.meta.rate} ${ctx.meta.currency}`} />
        <ValueRow icon="coin" label="Currency" value="PLN (zł)" />
        <ValueRow icon="calendar" label="Week starts on" value="Monday" />
      </Group>

      <Group title="About">
        <ValueRow icon="sparkle" label="Version" value="1.8.1" />
        <ValueRow icon="gear" label="Performance mode" value="Auto" />
      </Group>
    </div>
  )
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="m-section">
      <h2 className="m-section-title">{title}</h2>
      <div className="set-group">{children}</div>
    </section>
  )
}

function ToggleRow({ icon, label, on, onToggle }: { icon: IconName; label: string; on: boolean; onToggle: () => void }) {
  return (
    <button className="set-row" onClick={onToggle}>
      <span className="set-ic"><Icon name={icon} size={18} /></span>
      <span className="set-label">{label}</span>
      <span className={`switch${on ? ' on' : ''}`} />
    </button>
  )
}

function ValueRow({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  return (
    <div className="set-row">
      <span className="set-ic"><Icon name={icon} size={18} /></span>
      <span className="set-label">{label}</span>
      <span className="set-val">{value}</span>
      <Icon name="chevron" size={15} style={{ color: 'var(--text-3)' }} />
    </div>
  )
}
