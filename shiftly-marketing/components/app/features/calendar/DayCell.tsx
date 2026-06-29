'use client'

// One calendar day. Module-level + React.memo (rerender-no-inline-components,
// rerender-memo) so a 42-cell grid stays cheap. All affordances are desktop-only:
// hover (CSS), right-click context menu, drag-out + drop-target for moving shifts,
// and modifier-click multi-select. Transient drag-over state is local.
import { memo, useState, DragEvent, MouseEvent } from 'react'
import type { DayCellData } from './useCalendarMonth'

export interface DayCellHandlers {
  onSelect: (id: string, e: MouseEvent) => void
  onContext: (id: string, x: number, y: number) => void
  onDropShift: (shiftId: string, date: string) => void
  onEmptyClick: (date: string) => void
}

function DayCellBase({ cell, selected, h }: { cell: DayCellData; selected: boolean; h: DayCellHandlers }) {
  const [over, setOver] = useState(false)
  const s = cell.shift

  return (
    <div
      className={`cal-cell${cell.inMonth ? '' : ' cal-out'}${cell.isToday ? ' cal-today' : ''}${over ? ' cal-over' : ''}`}
      onDragOver={(e: DragEvent) => { e.preventDefault(); if (!over) setOver(true) }}
      onDragLeave={() => setOver(false)}
      onDrop={(e: DragEvent) => { setOver(false); const id = e.dataTransfer.getData('text/shift'); if (id) h.onDropShift(id, cell.date) }}
      onClick={() => { if (!s) h.onEmptyClick(cell.date) }}
    >
      <div className="cal-daynum" style={{ color: cell.isWeekend ? 'rgba(248,113,113,.7)' : undefined }}>
        {cell.day}
        {cell.isToday && <span className="cal-today-dot" />}
      </div>

      {s && (
        <button
          className={`cal-chip${selected ? ' on' : ''}${s.planned ? ' plan' : ''}`}
          draggable
          onDragStart={(e) => e.dataTransfer.setData('text/shift', s.id)}
          onClick={(e) => { e.stopPropagation(); h.onSelect(s.id, e) }}
          onContextMenu={(e) => { e.preventDefault(); e.stopPropagation(); h.onContext(s.id, e.clientX, e.clientY) }}
          title={`${s.f.range} · ${s.f.earnings}`}
        >
          <span className="cal-chip-h">{s.f.hours}{s.overtime ? ` +${s.f.overtime.replace('+', '')}` : ''}</span>
          <span className="cal-chip-e">{s.f.earnings}</span>
        </button>
      )}
    </div>
  )
}

export const DayCell = memo(DayCellBase)
