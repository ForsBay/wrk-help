'use client'

// SHARED, fully platform-agnostic feature component. The desktop right-sidebar
// and the mobile summary row render the EXACT same component — it just flows in
// a row or a column depending on the `direction` prop (layout, not a fork).
import { StatTile } from '../../ui/StatTile'
import type { ShiftsState } from '../shifts/useShifts'
import { useT } from '@/lib/appI18n'

export function SummaryStats({ totals, direction = 'row', emphasize = false }: {
  totals: ShiftsState['totals']
  direction?: 'row' | 'column'
  emphasize?: boolean
}) {
  const t = useT()
  const size = emphasize ? 'lg' : 'md'
  // Row → responsive grid (4-up on wide, 2×2 on phones so values never clip);
  // column → simple stack for the desktop side panel. Layout only, not a fork.
  return (
    <div className={direction === 'column' ? 'sumstats-col' : 'sumstats-row'}>
      <StatTile value={totals.days} label={t('days')} size={size} />
      <StatTile value={totals.f.hours} label={t('hours')} size={size} />
      <StatTile value={totals.f.overtime} label={t('overtime')} size={size} />
      <StatTile value={totals.f.earnings} label={t('earned')} accent size={size} />
    </div>
  )
}
