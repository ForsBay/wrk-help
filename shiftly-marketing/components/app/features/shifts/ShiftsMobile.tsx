'use client'

// MOBILE variant of the Shifts feature — large tappable cards, one glance of
// info, a category colour rail, a sync indicator, and a press animation. Tapping
// a card opens the shared ShiftSheet (detail/edit). No hover, no context menu, no
// table. Consumes the SAME shared `ShiftsContext` as the desktop table.
import type { ShiftsContext } from './useShifts'
import { categoryOf } from './categories'
import { Icon } from '../../ui/Icon'
import { EmptyState } from '../../ui/EmptyState'

export default function ShiftsMobile({ ctx, onOpen }: { ctx: ShiftsContext; onOpen: (id: string) => void }) {
  const { rows } = ctx.state

  if (rows.length === 0) {
    return (
      <EmptyState
        icon="calendar"
        title="No shifts yet"
        body="Add your first shift and Shiftly will track your hours and pay automatically."
      />
    )
  }

  return (
    <div className="m-list">
      {rows.map((r, i) => {
        const cat = categoryOf(r.type)
        return (
          <button
            key={r.id}
            className="m-card"
            style={{ animationDelay: `${Math.min(i, 8) * 28}ms` }}
            onClick={() => onOpen(r.id)}
          >
            <span className="m-card-rail" style={{ background: cat.color }} />
            <span className="m-card-icon" style={{ background: cat.soft, color: cat.color }}>
              <Icon name="clock" size={21} />
            </span>
            <span className="m-card-main">
              <span className="m-card-title">
                {r.f.date} · {r.weekday}
                {r.planned && <span className="pill-plan">Planned</span>}
              </span>
              <span className="m-card-sub">
                {r.f.range}
                {r.workplace && <> · {r.workplace}</>}
              </span>
            </span>
            <span className="m-card-right">
              <span className="m-card-pay">{r.f.earnings}</span>
              <span className="m-card-meta">
                {r.f.hours}{r.overtime > 0 && <span className="m-ot"> · OT {r.f.overtime}</span>}
                <span className={`sync-dot${r.gcalSynced ? ' on' : ''}`} />
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
