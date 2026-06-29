'use client'

// DESKTOP shell — maximally functional: left nav sidebar, dense main area, a
// right context sidebar with KPIs + selected-shift detail, hover affordances and
// keyboard shortcuts. Imports the desktop feature variants directly, so this
// chunk (and its big table) is only ever downloaded on desktop.
import { Sidebar } from './Sidebar'
import { useHotkeys } from '../hooks/useHotkeys'
import { SummaryStats } from '../features/summary/SummaryStats'
import ShiftsDesktop from '../features/shifts/ShiftsDesktop'
import { Surface } from '../ui/Surface'
import { NAV_ITEMS } from '../nav'
import type { ShellProps } from './types'

export default function DesktopShell({ active, onSelect, shifts }: ShellProps) {
  useHotkeys(onSelect)
  const title = NAV_ITEMS.find(n => n.id === active)?.label ?? ''
  const selected = shifts.state.rows.find(r => r.id === shifts.state.selectedId) ?? null

  return (
    <div style={{ display: 'flex', height: '100dvh', background: 'var(--bg, #0a0a0b)', color: 'var(--text, #fafafa)' }}>
      <Sidebar active={active} onSelect={onSelect} />

      {/* Main column */}
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px', borderBottom: '1px solid var(--border, #27272a)' }}>
          <h1 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>{title}</h1>
          <button className="cta-primary" style={{ padding: '9px 16px', fontSize: 14 }}>+ New shift</button>
        </header>
        <div style={{ padding: 28, overflow: 'auto', flex: 1 }}>
          {active === 'calendar'
            ? <ShiftsDesktop ctx={shifts} />
            : <Placeholder title={title} />}
        </div>
      </main>

      {/* Right context sidebar — extra information density (desktop only) */}
      <aside style={{ width: 300, flexShrink: 0, borderLeft: '1px solid var(--border, #27272a)', background: 'var(--surface, #131316)', padding: 20, overflow: 'auto' }}>
        <SectionLabel>This month</SectionLabel>
        <SummaryStats totals={shifts.state.totals} direction="column" />
        <SectionLabel style={{ marginTop: 24 }}>Selected shift</SectionLabel>
        {selected ? (
          <Surface>
            <Row k="Date" v={`${selected.f.date} · ${selected.weekday}`} />
            <Row k="Hours" v={selected.f.hours} />
            <Row k="Range" v={selected.f.range} />
            <Row k="Overtime" v={selected.f.overtime} />
            <Row k="Earnings" v={selected.f.earnings} accent />
          </Surface>
        ) : (
          <p style={{ color: 'var(--text-3, #71717a)', fontSize: 13 }}>Click a row to inspect it. Right-click for actions. Press 1–4 to switch sections.</p>
        )}
      </aside>
    </div>
  )
}

function SectionLabel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-3, #71717a)', marginBottom: 10, ...style }}>{children}</div>
}
function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 14 }}>
      <span style={{ color: 'var(--text-3, #71717a)' }}>{k}</span>
      <span style={{ color: accent ? 'var(--accent)' : 'var(--text, #fafafa)', fontWeight: accent ? 600 : 500 }}>{v}</span>
    </div>
  )
}
function Placeholder({ title }: { title: string }) {
  return <Surface padding={40} style={{ textAlign: 'center', color: 'var(--text-3, #71717a)' }}>{title} — desktop view</Surface>
}
