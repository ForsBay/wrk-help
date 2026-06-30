'use client'

// Desktop Statistics — uses the extra width for honest, useful breakdowns derived
// from the SAME shared shifts (no mock, no vanity charts): month totals, a few
// secondary KPIs, and bar breakdowns by category, workplace and weekday.
import type { ShiftsContext } from '../shifts/useShifts'
import { CATEGORY_LIST, categoryOf } from '../shifts/categories'
import { SummaryStats } from './SummaryStats'
import { StatTile } from '../../ui/StatTile'
import { EmptyState } from '../../ui/EmptyState'

const fmtH = (h: number) => (h % 1 === 0 ? `${h}h` : `${h.toFixed(1)}h`)
const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function Bars({ items }: { items: { label: string; color: string; hours: number }[] }) {
  const max = Math.max(1, ...items.map(i => i.hours))
  return (
    <div className="catbars">
      {items.map((i, k) => (
        <div key={k} className="catbar">
          <span className="catbar-dot" style={{ background: i.color }} />
          <span className="catbar-label">{i.label}</span>
          <span className="catbar-track"><span className="catbar-fill" style={{ width: `${(i.hours / max) * 100}%`, background: i.color }} /></span>
          <span className="catbar-val">{fmtH(i.hours)}</span>
        </div>
      ))}
    </div>
  )
}

export function StatsDesktop({ ctx }: { ctx: ShiftsContext }) {
  const { rows, totals } = ctx.state

  if (rows.length === 0) {
    return <EmptyState icon="chart" title="No data yet" body="Add a few shifts and your stats will appear here." />
  }

  const byCat = CATEGORY_LIST
    .map(c => ({ label: c.label, color: c.color, hours: rows.filter(r => categoryOf(r.type).id === c.id).reduce((a, r) => a + r.hours, 0) }))
    .filter(x => x.hours > 0)

  const wpMap = new Map<string, number>()
  rows.forEach(r => { const k = r.workplace || '—'; wpMap.set(k, (wpMap.get(k) || 0) + r.hours) })
  const byWorkplace = [...wpMap.entries()].map(([label, hours]) => ({ label, color: 'var(--accent)', hours })).sort((a, b) => b.hours - a.hours)

  const byWeekday = WEEK.map(w => ({ label: w, color: 'var(--accent)', hours: rows.filter(r => r.weekday === w).reduce((a, r) => a + r.hours, 0) }))

  const avgLen = totals.days ? totals.hours / totals.days : 0
  const avgPay = totals.days ? totals.earnings / totals.days : 0
  const totalBreak = rows.reduce((a, r) => a + (r.breakMin || 0), 0)

  return (
    <>
      <SummaryStats totals={totals} emphasize />

      <div className="kpi-row">
        <StatTile value={fmtH(Math.round(avgLen * 10) / 10)} label="Avg / shift" />
        <StatTile value={`${Math.round(avgPay)} ${ctx.meta.currency}`} label="Avg pay / shift" accent />
        <StatTile value={`${Math.round(totalBreak / 60 * 10) / 10}h`} label="Total breaks" />
        <StatTile value={wpMap.size} label="Workplaces" />
      </div>

      <div className="stats-cols">
        <section className="stats-card">
          <h2 className="m-section-title">Hours by category</h2>
          <Bars items={byCat} />
        </section>
        <section className="stats-card">
          <h2 className="m-section-title">Hours by workplace</h2>
          <Bars items={byWorkplace} />
        </section>
      </div>

      <section className="stats-card">
        <h2 className="m-section-title">Hours by weekday</h2>
        <Bars items={byWeekday} />
      </section>
    </>
  )
}
