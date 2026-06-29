'use client'

// MOBILE shell — maximally simple: one minimal top header, a single scrolling
// column showing one thing at a time, large touch targets, a fixed bottom nav,
// no sidebars, no hover, no hotkeys. Imports the mobile feature variants directly
// so the desktop table never ships to phones. Native scroll only.
import { BottomNav } from './BottomNav'
import { SummaryStats } from '../features/summary/SummaryStats'
import ShiftsMobile from '../features/shifts/ShiftsMobile'
import { Surface } from '../ui/Surface'
import { NAV_ITEMS } from '../nav'
import type { ShellProps } from './types'

export default function MobileShell({ active, onSelect, shifts }: ShellProps) {
  const title = NAV_ITEMS.find(n => n.id === active)?.label ?? ''

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--bg, #0a0a0b)', color: 'var(--text, #fafafa)' }}>
      {/* Minimal header, clear of the status bar / Dynamic Island */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 30, background: 'var(--bg, #0a0a0b)',
        paddingTop: 'calc(env(safe-area-inset-top, 0px) + 14px)', padding: '14px 16px',
        borderBottom: '1px solid var(--border, #27272a)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <h1 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>{title}</h1>
        <button className="cta-primary" style={{ width: 40, height: 40, borderRadius: 12, fontSize: 20, padding: 0 }}>+</button>
      </header>

      {/* One scrolling column; bottom padding clears the fixed nav + safe-area */}
      <main style={{ padding: 16, paddingBottom: 'calc(72px + env(safe-area-inset-bottom, 0px))', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {active === 'calendar' ? (
          <>
            <SummaryStats totals={shifts.state.totals} />
            <ShiftsMobile ctx={shifts} />
          </>
        ) : (
          <Surface padding={40} style={{ textAlign: 'center', color: 'var(--text-3, #71717a)' }}>{title} — mobile view</Surface>
        )}
      </main>

      <BottomNav active={active} onSelect={onSelect} />
    </div>
  )
}
