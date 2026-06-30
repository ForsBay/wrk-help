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
import { CalendarToolbar, Density, CalView } from '../features/calendar/CalendarToolbar'
import ShiftsDesktop from '../features/shifts/ShiftsDesktop'
import { DashboardView } from '../features/dashboard/DashboardView'
import { StatsDesktop } from '../features/summary/StatsDesktop'
import { ExportView } from '../features/export/ExportView'
import { ProfileView } from '../features/profile/ProfileView'
import { MobileIntegrations as IntegrationsView } from '../features/integrations/MobileIntegrations'
import { MobileSettings as SettingsView } from '../features/settings/MobileSettings'
import { ContextPanel } from '../features/inspector/ContextPanel'
import { SummaryStats } from '../features/summary/SummaryStats'
import { DeskPage } from '../ui/DeskPage'
import { ShiftSheet, type SheetMode } from '../features/shifts/ShiftSheet'
import { useDesktopShortcuts } from '../hooks/useDesktopShortcuts'
import type { Command } from '../CommandPalette'

const CommandPalette = dynamic(() => import('../CommandPalette'), { ssr: false })

export default function DesktopShell({ active, onSelect, shifts }: ShellProps) {
  const cal = useCalendarMonth(shifts)
  const [collapsed, setCollapsed] = useState(false)
  const [density, setDensity] = useState<Density>('comfortable')
  const [view, setView] = useState<CalView>('month')
  const [palette, setPalette] = useState(false)
  const [editor, setEditor] = useState<SheetMode>(null)   // the shared create/edit sheet
  const [editorDate, setEditorDate] = useState<string | undefined>(undefined) // preset day for "new"

  // The 7 cells of the focused week (today's week, else first week with a shift).
  const weekCells = useMemo(() => {
    const cs = cal.cells
    let idx = cs.findIndex(c => c.isToday && c.inMonth)
    if (idx < 0) idx = cs.findIndex(c => c.inMonth && c.shift)
    if (idx < 0) idx = cs.findIndex(c => c.inMonth)
    const start = Math.max(0, Math.floor((idx < 0 ? 0 : idx) / 7) * 7)
    return cs.slice(start, start + 7)
  }, [cal.cells])

  const newShift = (date?: string) => { setEditorDate(date); setEditor('new') }
  const editShift = (id: string) => { shifts.actions.select(id); setEditor('edit') }
  const sel = shifts.state.selectedIds
  const selectedRow = shifts.state.selectedId ? shifts.state.byId[shifts.state.selectedId] ?? null : null

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
    ...(selectedRow ? [{ id: 'edit', label: 'Edit selected shift', hint: 'E', run: () => editShift(selectedRow.id) }] : []),
  ], [onSelect, cal, selectedRow])

  return (
    <div className={`dshell${collapsed ? ' rail-collapsed' : ''}`} data-density={density}>
      <Rail active={active} onSelect={onSelect} collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

      <main className="dworkspace">
        {active === 'dashboard' ? (
          <div className="dworkspace-body">
            <DashboardView ctx={shifts} cal={cal} onNew={newShift} onOpen={(id) => shifts.actions.select(id)} />
          </div>
        ) : active === 'calendar' ? (
          <>
            <CalendarToolbar cal={cal} density={density} onDensity={setDensity} onNew={newShift} onPalette={() => setPalette(true)} rows={shifts.state.rows} view={view} onView={setView} />
            <div className="dworkspace-body">
              {view === 'agenda'
                ? <ShiftsDesktop ctx={shifts} />
                : <CalendarGrid ctx={shifts} cal={cal} cells={view === 'week' ? weekCells : undefined} variant={view === 'week' ? 'week' : 'month'} onCreateDay={newShift} />}
            </div>
            <div className="dkpi">
              <SummaryStats totals={shifts.state.totals} />
            </div>
          </>
        ) : (
          <div className="dworkspace-body">
            {active === 'stats' && (
              <DeskPage title="Statistics" subtitle="This month at a glance"><StatsDesktop ctx={shifts} /></DeskPage>
            )}
            {active === 'integrations' && (
              <DeskPage title="Integrations" subtitle="Keep your calendars in sync" width="narrow"><IntegrationsView ctx={shifts} /></DeskPage>
            )}
            {active === 'export' && (
              <DeskPage title="Export" subtitle="Download your shifts" width="narrow"><ExportView ctx={shifts} /></DeskPage>
            )}
            {active === 'settings' && (
              <DeskPage title="Settings" subtitle="Preferences & account" width="narrow"><SettingsView ctx={shifts} /></DeskPage>
            )}
            {active === 'profile' && (
              <DeskPage title="Profile" subtitle="Account & lifetime totals" width="narrow"><ProfileView ctx={shifts} onNav={onSelect} /></DeskPage>
            )}
          </div>
        )}
      </main>

      <aside className="dpanel">
        <ContextPanel ctx={shifts} cal={cal} onEdit={editShift} />
      </aside>

      <CommandPalette open={palette} onClose={() => setPalette(false)} commands={commands} />
      <ShiftSheet mode={editor} row={editor === 'new' ? null : selectedRow} ctx={shifts} onClose={() => setEditor(null)} presetDate={editorDate} />
    </div>
  )
}
