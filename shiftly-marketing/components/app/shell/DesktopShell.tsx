'use client'

// ─────────────────────────────────────────────────────────────────────────────
// DesktopShell — "Calendar Workspace" (Concept A).
//
// Rail │ Workspace (toolbar + big calendar + KPI strip) │ adaptive ContextPanel.
// Fills 100dvh; only inner panels scroll (no whole-page scroll, no dead space).
// All data/actions come from the SHARED useShifts context injected by AppShell —
// this file is presentation + interaction wiring only. Mobile is untouched.
// ─────────────────────────────────────────────────────────────────────────────

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import type { ShellProps } from './types'
import { RAIL_ITEMS } from '../nav'
import { Rail } from './Rail'
import { useCalendarMonth } from '../features/calendar/useCalendarMonth'
import { CalendarGrid } from '../features/calendar/CalendarGrid'
import { CalendarToolbar, Density } from '../features/calendar/CalendarToolbar'
import { ContextPanel } from '../features/inspector/ContextPanel'
import { SummaryStats } from '../features/summary/SummaryStats'
import { Surface } from '../ui/Surface'
import { useDesktopShortcuts } from '../hooks/useDesktopShortcuts'
import type { Command } from '../CommandPalette'

const CommandPalette = dynamic(() => import('../CommandPalette'), { ssr: false })

export default function DesktopShell({ active, onSelect, shifts }: ShellProps) {
  const cal = useCalendarMonth(shifts)
  const [collapsed, setCollapsed] = useState(false)
  const [density, setDensity] = useState<Density>('comfortable')
  const [palette, setPalette] = useState(false)

  const newShift = () => { /* opens the editor in the real app; demo no-op */ }
  const sel = shifts.state.selectedIds

  useDesktopShortcuts({
    openPalette: () => setPalette(true),
    prevMonth: cal.prev, nextMonth: cal.next, goToday: cal.goToday,
    newShift, onNav: onSelect,
    duplicateSelected: () => sel.forEach(id => shifts.actions.duplicate(id)),
    deleteSelected: () => shifts.actions.removeMany(sel),
    clearSelection: shifts.actions.clearSelection,
    hasSelection: () => shifts.state.selectedIds.length > 0,
  })

  const commands: Command[] = useMemo(() => [
    ...RAIL_ITEMS.map(i => ({ id: `nav-${i.id}`, label: `Go to ${i.label}`, hint: i.hotkey, run: () => onSelect(i.id) })),
    { id: 'today', label: 'Go to today', hint: 'T', run: cal.goToday },
    { id: 'prev', label: 'Previous month', hint: '←', run: cal.prev },
    { id: 'next', label: 'Next month', hint: '→', run: cal.next },
    { id: 'new', label: 'New shift', hint: 'N', run: newShift },
  ], [onSelect, cal])

  const isCalendar = active === 'calendar' || active === 'dashboard'

  return (
    <div className={`dshell${collapsed ? ' rail-collapsed' : ''}`} data-density={density}>
      <Rail active={active} onSelect={onSelect} collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

      <main className="dworkspace">
        {isCalendar ? (
          <>
            <CalendarToolbar cal={cal} density={density} onDensity={setDensity} onNew={newShift} onPalette={() => setPalette(true)} />
            <div className="dworkspace-body">
              <CalendarGrid ctx={shifts} cal={cal} />
            </div>
            <div className="dkpi">
              <SummaryStats totals={shifts.state.totals} />
            </div>
          </>
        ) : (
          <div className="dplaceholder">
            <Surface padding={48} style={{ textAlign: 'center', color: 'var(--text-3)' }}>
              {RAIL_ITEMS.find(i => i.id === active)?.label ?? 'Section'} — desktop view
            </Surface>
          </div>
        )}
      </main>

      <aside className="dpanel">
        <ContextPanel ctx={shifts} cal={cal} />
      </aside>

      <CommandPalette open={palette} onClose={() => setPalette(false)} commands={commands} />
    </div>
  )
}
