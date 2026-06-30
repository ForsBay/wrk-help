'use client'

// Sticky toolbar above the calendar. Subtle glass here is justified (it floats
// over scrolling content); it is disabled on lite/mobile by existing CSS gates.
import type { CalendarMonth } from './useCalendarMonth'
import { SyncStatus } from './SyncStatus'

export type Density = 'comfortable' | 'compact'

export function CalendarToolbar({ cal, density, onDensity, onNew, onPalette }: {
  cal: CalendarMonth
  density: Density
  onDensity: (d: Density) => void
  onNew: () => void
  onPalette: () => void
}) {
  return (
    <div className="cal-toolbar">
      <div className="cal-tb-left">
        <button className="icon-btn" aria-label="Previous month" onClick={cal.prev}>‹</button>
        <h2 className="cal-month">{cal.label}</h2>
        <button className="icon-btn" aria-label="Next month" onClick={cal.next}>›</button>
        <button className="ghost-btn" onClick={cal.goToday}>Today</button>
      </div>

      <div className="cal-tb-right">
        <SyncStatus />
        <span className="tb-sep" />
        <div className="seg">
          <button className="seg-on">Month</button>
          <button className="seg-off" disabled>Week</button>
          <button className="seg-off" disabled>Agenda</button>
        </div>
        <div className="seg" role="group" aria-label="Density">
          <button className={density === 'comfortable' ? 'seg-on' : 'seg-off'} onClick={() => onDensity('comfortable')} title="Comfortable">≡</button>
          <button className={density === 'compact' ? 'seg-on' : 'seg-off'} onClick={() => onDensity('compact')} title="Compact">≣</button>
        </div>
        <button className="ghost-btn" onClick={onPalette} title="Command palette (⌘K)"><span style={{ opacity: .6 }}>⌘</span>K</button>
        <button className="cta-primary" style={{ padding: '8px 14px', fontSize: 14 }} onClick={onNew}>+ New shift</button>
      </div>
    </div>
  )
}
