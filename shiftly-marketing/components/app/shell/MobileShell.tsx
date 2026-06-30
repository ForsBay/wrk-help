'use client'

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE shell — one minimal sticky header, a single scrolling column showing one
// section at a time, a fixed bottom nav, large touch targets, no hover/hotkeys.
// Every section now has a real, branded surface (Shifts, Statistics, Integrations,
// Settings) — the old "— mobile view" placeholder is gone. Shift detail/edit and
// the new-shift form open in a shared BottomSheet. Imports the mobile feature
// variants directly so the desktop table never ships to phones. Native scroll only.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { BottomNav } from './BottomNav'
import { SummaryStats } from '../features/summary/SummaryStats'
import { MobileStats } from '../features/summary/MobileStats'
import { MobileIntegrations } from '../features/integrations/MobileIntegrations'
import { MobileSettings } from '../features/settings/MobileSettings'
import ShiftsMobile from '../features/shifts/ShiftsMobile'
import { ShiftSheet, type SheetMode } from '../features/shifts/ShiftSheet'
import { Icon } from '../ui/Icon'
import { NAV_ITEMS } from '../nav'
import type { ShellProps } from './types'

export default function MobileShell({ active, onSelect, shifts }: ShellProps) {
  const title = NAV_ITEMS.find(n => n.id === active)?.label ?? ''
  const [sheet, setSheet] = useState<SheetMode>(null)

  const selectedRow = shifts.state.selectedId ? shifts.state.byId[shifts.state.selectedId] ?? null : null

  const openDetail = (id: string) => { shifts.actions.select(id); setSheet('detail') }
  const openNew = () => { shifts.actions.clearSelection(); setSheet('new') }
  const closeSheet = () => setSheet(null)

  // Contextual subtitle keeps the header informative without a second toolbar.
  const subtitle =
    active === 'calendar' ? `${shifts.state.totals.days} shifts · ${shifts.state.totals.f.earnings} this month` :
    active === 'stats'    ? 'This month' :
    active === 'integrations' ? 'Keep your calendar in sync' :
    active === 'settings' ? 'Preferences & account' : ''

  return (
    <div className="m-shell">
      <header className="m-header">
        <div className="m-header-row">
          <div className="m-brand">
            <span className="m-brand-logo" />
            <div>
              <h1 className="m-title">{title}</h1>
              {subtitle && <p className="m-subtitle">{subtitle}</p>}
            </div>
          </div>
          {active === 'calendar' && (
            <button className="m-add" aria-label="New shift" onClick={openNew}><Icon name="plus" size={22} /></button>
          )}
        </div>
      </header>

      <main className="m-main">
        {active === 'calendar' && (
          <>
            <SummaryStats totals={shifts.state.totals} />
            <section className="m-section">
              <h2 className="m-section-title">Shifts</h2>
              <ShiftsMobile ctx={shifts} onOpen={openDetail} />
            </section>
          </>
        )}
        {active === 'stats'        && <MobileStats ctx={shifts} />}
        {active === 'integrations' && <MobileIntegrations />}
        {active === 'settings'     && <MobileSettings ctx={shifts} />}
      </main>

      <BottomNav active={active} onSelect={onSelect} />

      <ShiftSheet mode={sheet} row={selectedRow} ctx={shifts} onClose={closeSheet} />
    </div>
  )
}
