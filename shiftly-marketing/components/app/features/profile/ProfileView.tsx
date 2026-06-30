'use client'

// Desktop Profile — account identity + lifetime totals (from the same shared
// shifts) and quick jumps to the related settings. Honest about the demo: there is
// no auth yet, so "Sign out" is disabled with a note rather than a fake control.
import type { ShiftsContext } from '../shifts/useShifts'
import type { ViewId } from '../../nav'
import { StatTile } from '../../ui/StatTile'
import { Icon } from '../../ui/Icon'

export function ProfileView({ ctx, onNav }: { ctx: ShiftsContext; onNav: (v: ViewId) => void }) {
  const { totals } = ctx.state
  return (
    <>
      <div className="profile-card" style={{ padding: 22 }}>
        <span className="profile-avatar" style={{ width: 64, height: 64 }}><Icon name="user" size={30} /></span>
        <div style={{ flex: 1 }}>
          <div className="profile-name" style={{ fontSize: 20 }}>Alex Worker</div>
          <div className="profile-mail">work@gmail.com</div>
          <span className="pill-soon" style={{ marginTop: 8, display: 'inline-block' }}>Free plan</span>
        </div>
      </div>

      <section>
        <h2 className="m-section-title">Lifetime</h2>
        <div className="kpi-row">
          <StatTile value={totals.days} label="Shifts logged" size="lg" />
          <StatTile value={totals.f.hours} label="Hours worked" size="lg" />
          <StatTile value={totals.f.earnings} label="Total earned" accent size="lg" />
        </div>
      </section>

      <section className="m-section">
        <h2 className="m-section-title">Account</h2>
        <div className="set-group">
          <button className="set-row" onClick={() => onNav('integrations')}>
            <span className="set-ic"><Icon name="plug" size={18} /></span>
            <span className="set-label">Connected calendars</span>
            <span className="set-val">Manage</span>
            <Icon name="chevron" size={15} style={{ color: 'var(--text-3)' }} />
          </button>
          <button className="set-row" onClick={() => onNav('settings')}>
            <span className="set-ic"><Icon name="gear" size={18} /></span>
            <span className="set-label">Preferences</span>
            <span className="set-val">Open settings</span>
            <Icon name="chevron" size={15} style={{ color: 'var(--text-3)' }} />
          </button>
          <div className="set-row" style={{ cursor: 'default' }}>
            <span className="set-ic"><Icon name="user" size={18} /></span>
            <span className="set-label">Sign out</span>
            <span className="set-val">Available with cloud sync</span>
          </div>
        </div>
      </section>
    </>
  )
}
