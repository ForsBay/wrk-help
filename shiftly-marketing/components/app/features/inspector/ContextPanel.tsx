'use client'

// Adaptive right panel — never a dead zone:
//   • multi-select → bulk actions
//   • one selected → ShiftInspector
//   • nothing      → Upcoming shifts + Earnings summary (dashboard density)
import type { ShiftsContext } from '../shifts/useShifts'
import type { CalendarMonth } from '../calendar/useCalendarMonth'
import { ShiftInspector } from './ShiftInspector'
import { SummaryStats } from '../summary/SummaryStats'
import { Surface } from '../../ui/Surface'

export function ContextPanel({ ctx, cal }: { ctx: ShiftsContext; cal: CalendarMonth }) {
  const { selectedIds, selectedId, byId } = ctx.state

  if (selectedIds.length > 1) {
    return (
      <div className="ctxpanel">
        <PanelTitle>{selectedIds.length} shifts selected</PanelTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button className="ghost-btn" onClick={() => selectedIds.forEach(id => ctx.actions.duplicate(id))}>Duplicate all</button>
          <button className="ghost-btn danger" onClick={() => ctx.actions.removeMany(selectedIds)}>Delete {selectedIds.length}</button>
          <button className="ghost-btn" onClick={ctx.actions.clearSelection}>Clear selection</button>
        </div>
      </div>
    )
  }

  if (selectedId && byId[selectedId]) {
    return <div className="ctxpanel"><ShiftInspector row={byId[selectedId]} actions={ctx.actions} /></div>
  }

  // Default — keep the space useful.
  return (
    <div className="ctxpanel">
      <PanelTitle>This month</PanelTitle>
      <SummaryStats totals={ctx.state.totals} direction="column" />

      <PanelTitle style={{ marginTop: 22 }}>Upcoming</PanelTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {cal.upcoming.length === 0 && <p style={{ color: 'var(--text-3)', fontSize: 13 }}>No upcoming shifts.</p>}
        {cal.upcoming.map(r => (
          <Surface key={r.id} padding={12} onClick={() => ctx.actions.select(r.id)} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{r.f.date} · {r.weekday}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{r.f.range}</div>
              </div>
              <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14 }}>{r.f.earnings}</div>
            </div>
          </Surface>
        ))}
      </div>
    </div>
  )
}

function PanelTitle({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-3, #71717a)', marginBottom: 12, ...style }}>{children}</div>
}
