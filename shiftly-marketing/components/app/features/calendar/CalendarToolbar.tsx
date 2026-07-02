'use client'

// Sticky toolbar above the calendar. Subtle glass here is justified (it floats
// over scrolling content); it is disabled on lite/mobile by existing CSS gates.
import type { CalendarMonth } from './useCalendarMonth'
import { SyncStatus } from './SyncStatus'
import type { ShiftRow } from '../shifts/useShifts'
import { useT } from '@/lib/appI18n'

export type Density = 'comfortable' | 'compact'
export type CalView = 'month' | 'week' | 'agenda'

export function CalendarToolbar({ cal, density, onDensity, onNew, onPalette, rows, view, onView }: {
  cal: CalendarMonth
  density: Density
  onDensity: (d: Density) => void
  onNew: () => void
  onPalette: () => void
  rows: ShiftRow[]
  view: CalView
  onView: (v: CalView) => void
}) {
  const t = useT()
  return (
    <div className="cal-toolbar">
      <div className="cal-tb-left">
        <button className="icon-btn" aria-label={t('prevMonth')} onClick={cal.prev}>‹</button>
        <h2 className="cal-month">{cal.label}</h2>
        <button className="icon-btn" aria-label={t('nextMonth')} onClick={cal.next}>›</button>
        <button className="ghost-btn" onClick={cal.goToday}>{t('today')}</button>
      </div>

      <div className="cal-tb-right">
        <SyncStatus rows={rows} />
        <span className="tb-sep" />
        <div className="seg" role="group" aria-label={t('calendar')}>
          <button className={view === 'month' ? 'seg-on' : 'seg-off'} onClick={() => onView('month')}>{t('month')}</button>
          <button className={view === 'week' ? 'seg-on' : 'seg-off'} onClick={() => onView('week')}>{t('week')}</button>
          <button className={view === 'agenda' ? 'seg-on' : 'seg-off'} onClick={() => onView('agenda')}>{t('agenda')}</button>
        </div>
        <div className="seg" role="group" aria-label="Density">
          <button className={density === 'comfortable' ? 'seg-on' : 'seg-off'} onClick={() => onDensity('comfortable')} title="Comfortable">≡</button>
          <button className={density === 'compact' ? 'seg-on' : 'seg-off'} onClick={() => onDensity('compact')} title="Compact">≣</button>
        </div>
        <button className="ghost-btn" onClick={onPalette} title="Command palette (⌘K)"><span style={{ opacity: .6 }}>⌘</span>K</button>
        <button className="cta-primary" style={{ padding: '8px 14px', fontSize: 14 }} onClick={() => onNew()}>+ {t('newShift')}</button>
      </div>
    </div>
  )
}
