'use client'

// SHARED, fully platform-agnostic feature component. The desktop right-sidebar
// and the mobile summary row render the EXACT same component — it just flows in
// a row or a column depending on the `direction` prop (layout, not a fork).
import { StatTile } from '../../ui/StatTile'
import type { ShiftsState } from '../shifts/useShifts'

export function SummaryStats({ totals, direction = 'row', emphasize = false }: {
  totals: ShiftsState['totals']
  direction?: 'row' | 'column'
  emphasize?: boolean
}) {
  const size = emphasize ? 'lg' : 'md'
  return (
    <div style={{ display: 'flex', flexDirection: direction, gap: 10, width: '100%' }}>
      <StatTile value={totals.days} label="Days" size={size} />
      <StatTile value={totals.f.hours} label="Hours" size={size} />
      <StatTile value={totals.f.overtime} label="Overtime" size={size} />
      <StatTile value={totals.f.earnings} label="Earned" accent size={size} />
    </div>
  )
}
