'use client'

// ─────────────────────────────────────────────────────────────────────────────
// Desktop Dashboard — the "home / at a glance" view, DISTINCT from Calendar.
//
// Calendar = the full month grid for scanning/editing any day.
// Dashboard = a focused glance: this-month totals, today's shift (or a quick add),
// and this week's schedule. It reuses the SAME shared data + components (no mock,
// no graphs) — it is a layout over real shifts, not a second source of truth.
// ─────────────────────────────────────────────────────────────────────────────

import type { ShiftsContext } from '../shifts/useShifts'
import type { CalendarMonth } from '../calendar/useCalendarMonth'
import { categoryOf } from '../shifts/categories'
import { SummaryStats } from '../summary/SummaryStats'
import { EmptyState } from '../../ui/EmptyState'
import { Icon } from '../../ui/Icon'

const todayISO = () => new Date().toISOString().slice(0, 10)

export function DashboardView({ ctx, cal, onNew, onOpen }: {
  ctx: ShiftsContext
  cal: CalendarMonth
  onNew: (date?: string) => void
  onOpen: (id: string) => void
}) {
  const t = todayISO()
  const today = ctx.state.rows.find(r => r.date === t) || null

  // This week = the 7 cells (Mon–Sun) of the month grid that contain today,
  // else the first week with a shift. Reuses the already-built month cells.
  const cells = cal.cells
  let idx = cells.findIndex(c => c.isToday)
  if (idx < 0) idx = cells.findIndex(c => c.inMonth && c.shift)
  if (idx < 0) idx = cells.findIndex(c => c.inMonth)
  const start = Math.max(0, Math.floor((idx < 0 ? 0 : idx) / 7) * 7)
  const weekShifts = cells.slice(start, start + 7).filter(c => c.shift).map(c => c.shift!)

  const niceDate = new Date(t + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <div className="dash">
      <header className="dash-head">
        <div>
          <h1 className="dash-title">Dashboard</h1>
          <p className="dash-sub">{niceDate}</p>
        </div>
        <button className="cta-primary" style={{ padding: '10px 16px', fontSize: 14 }} onClick={() => onNew(t)}>+ New shift</button>
      </header>

      <div className="dash-body">
        <SummaryStats totals={ctx.state.totals} emphasize />

        <section className="m-section">
          <h2 className="m-section-title">Today</h2>
          {today ? (
            <button className="dash-today" onClick={() => onOpen(today.id)} style={{ ['--cat' as any]: categoryOf(today.type).color }}>
              <span className="dash-today-rail" style={{ background: categoryOf(today.type).color }} />
              <span className="dash-today-icon" style={{ background: categoryOf(today.type).soft, color: categoryOf(today.type).color }}>
                <Icon name="clock" size={22} />
              </span>
              <span className="dash-today-main">
                <span className="dash-today-h">{categoryOf(today.type).label}{today.workplace ? ` · ${today.workplace}` : ''}</span>
                <span className="dash-today-sub">{today.f.range} · {today.f.hours}</span>
              </span>
              <span className="dash-today-pay">{today.f.earnings}</span>
            </button>
          ) : (
            <EmptyState compact icon="calendar" title="No shift today" body="Enjoy the day off — or log one." actionLabel="Add shift" onAction={() => onNew(t)} />
          )}
        </section>

        <section className="m-section">
          <h2 className="m-section-title">This week</h2>
          {weekShifts.length === 0 ? (
            <EmptyState compact icon="calendar" title="Nothing scheduled this week" />
          ) : (
            <div className="dash-week">
              {weekShifts.map(r => {
                const cat = categoryOf(r.type)
                return (
                  <button key={r.id} className="dash-row" onClick={() => onOpen(r.id)}>
                    <span className="cat-dot" style={{ background: cat.color }} />
                    <span className="dash-row-day">{r.f.date} · {r.weekday}</span>
                    <span className="dash-row-time">{r.f.range}</span>
                    <span className="dash-row-wp">{r.workplace || cat.label}</span>
                    <span className="dash-row-pay">{r.f.earnings}</span>
                  </button>
                )
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
