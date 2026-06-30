'use client'

// MOBILE Statistics view. Emphasised totals + an honest, useful breakdown of
// hours by shift category (one bar per category, brand colours). No vanity
// charts — just the numbers a shift worker actually checks. Shared SummaryStats
// drives the top row so the values match every other surface.
import type { ShiftsContext } from '../shifts/useShifts'
import { CATEGORY_LIST, categoryOf } from '../shifts/categories'
import { SummaryStats } from './SummaryStats'
import { StatTile } from '../../ui/StatTile'

export function MobileStats({ ctx }: { ctx: ShiftsContext }) {
  const { rows, totals } = ctx.state

  // hours per category (skip empty categories)
  const byCat = CATEGORY_LIST.map(c => ({
    c, hours: rows.filter(r => categoryOf(r.type).id === c.id).reduce((a, r) => a + r.hours, 0),
  })).filter(x => x.hours > 0)
  const maxH = Math.max(1, ...byCat.map(x => x.hours))

  const avgPerDay = totals.days ? totals.earnings / totals.days : 0
  const avgShiftLen = totals.days ? totals.hours / totals.days : 0

  return (
    <div className="m-stack">
      <SummaryStats totals={totals} emphasize />

      <div style={{ display: 'flex', gap: 10 }}>
        <StatTile value={`${avgShiftLen.toFixed(1)}h`} label="Avg / shift" />
        <StatTile value={`${Math.round(avgPerDay)} zł`} label="Avg / shift pay" accent />
      </div>

      <section className="m-section">
        <h2 className="m-section-title">Hours by category</h2>
        <div className="catbars">
          {byCat.map(({ c, hours }) => (
            <div key={c.id} className="catbar">
              <span className="catbar-dot" style={{ background: c.color }} />
              <span className="catbar-label">{c.label}</span>
              <span className="catbar-track">
                <span className="catbar-fill" style={{ width: `${(hours / maxH) * 100}%`, background: c.color }} />
              </span>
              <span className="catbar-val">{hours % 1 === 0 ? hours : hours.toFixed(1)}h</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
