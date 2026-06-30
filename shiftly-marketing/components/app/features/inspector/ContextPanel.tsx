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
import { EmptyState } from '../../ui/EmptyState'
import { categoryOf } from '../shifts/categories'

export function ContextPanel({ ctx, cal, onEdit }: { ctx: ShiftsContext; cal: CalendarMonth; onEdit?: (id: string) => void }) {
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
    return <div className="ctxpanel"><ShiftInspector row={byId[selectedId]} actions={ctx.actions} onEdit={onEdit} /></div>
  }

  // Default — keep the space useful.
  return (
    <div className="ctxpanel">
      <PanelTitle>This month</PanelTitle>
      <SummaryStats totals={ctx.state.totals} direction="column" />

      <PanelTitle style={{ marginTop: 22 }}>Upcoming</PanelTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {cal.upcoming.length === 0 ? (
          <EmptyState compact icon="sparkle" title="All caught up" body="No upcoming shifts scheduled." />
        ) : cal.upcoming.map(r => {
          const cat = categoryOf(r.type)
          return (
            <Surface key={r.id} padding={12} onClick={() => ctx.actions.select(r.id)} className="up-card" style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <span className="cat-dot" style={{ background: cat.color, flexShrink: 0 }} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{r.f.date} · {r.weekday}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.f.range}{r.workplace ? ` · ${r.workplace}` : ''}</div>
                  </div>
                </div>
                <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14, flexShrink: 0 }}>{r.f.earnings}</div>
              </div>
            </Surface>
          )
        })}
      </div>
    </div>
  )
}

function PanelTitle({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-3, #71717a)', marginBottom: 12, ...style }}>{children}</div>
}
