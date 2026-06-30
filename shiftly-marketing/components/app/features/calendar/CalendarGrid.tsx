'use client'

// The centerpiece. Fills all available space (CSS grid, 6 rows × 7 cols). Owns
// the context-menu + selection interaction, delegating every data mutation to the
// shared `useShifts` actions — no business logic here.
import { useCallback, useMemo, useState, MouseEvent } from 'react'
import type { ShiftsContext } from '../shifts/useShifts'
import type { CalendarMonth } from './useCalendarMonth'
import { DayCell, DayCellHandlers } from './DayCell'

export function CalendarGrid({ ctx, cal, cells, variant = 'month', onCreateDay }: {
  ctx: ShiftsContext
  cal: CalendarMonth
  cells?: import('./useCalendarMonth').DayCellData[]   // override (Week view)
  variant?: 'month' | 'week'
  onCreateDay?: (date: string) => void                 // empty day → open editor
}) {
  const { selectedIds } = ctx.state
  const [menu, setMenu] = useState<{ x: number; y: number; id: string } | null>(null)
  const view = cells ?? cal.cells

  // ordered shift ids as they appear in the grid — for shift-click range select
  const order = useMemo(() => view.filter(c => c.shift).map(c => c.shift!.id), [view])

  const handlers: DayCellHandlers = {
    onSelect: useCallback((id: string, e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey) { ctx.actions.toggleSelect(id); return }
      if (e.shiftKey && selectedIds.length) {
        const a = order.indexOf(selectedIds[selectedIds.length - 1]); const b = order.indexOf(id)
        if (a !== -1 && b !== -1) { const [lo, hi] = a < b ? [a, b] : [b, a]; ctx.actions.selectMany(order.slice(lo, hi + 1)); return }
      }
      ctx.actions.select(id)
    }, [ctx.actions, selectedIds, order]),
    onContext: useCallback((id: string, x: number, y: number) => { ctx.actions.select(id); setMenu({ x, y, id }) }, [ctx.actions]),
    onDropShift: useCallback((id: string, date: string) => ctx.actions.move(id, date), [ctx.actions]),
    onEmptyClick: useCallback(() => ctx.actions.clearSelection(), [ctx.actions]),
    onCreateDay: useCallback((date: string) => onCreateDay?.(date), [onCreateDay]),
  }

  const sel = new Set(selectedIds)

  return (
    <div className="cal-wrap" onClick={() => menu && setMenu(null)}>
      <div className="cal-head">
        {cal.weekdays.map(w => <div key={w} className="cal-head-cell">{w}</div>)}
      </div>
      <div className={`cal-grid${variant === 'week' ? ' cal-grid-week' : ''}`}>
        {view.map(c => (
          <DayCell key={c.date} cell={c} selected={!!c.shift && sel.has(c.shift.id)} h={handlers} />
        ))}
      </div>

      {menu && (
        <>
          <div onClick={() => setMenu(null)} onContextMenu={(e) => { e.preventDefault(); setMenu(null) }} style={{ position: 'fixed', inset: 0, zIndex: 60 }} />
          <div className="ctx-menu" style={{ top: menu.y, left: menu.x }}>
            <button className="ctx-item" onClick={() => { ctx.actions.select(menu.id); setMenu(null) }}>Edit</button>
            <button className="ctx-item" onClick={() => { ctx.actions.duplicate(menu.id); setMenu(null) }}>Duplicate</button>
            <button className="ctx-item ctx-danger" onClick={() => { ctx.actions.remove(menu.id); setMenu(null) }}>Delete</button>
          </div>
        </>
      )}
    </div>
  )
}
