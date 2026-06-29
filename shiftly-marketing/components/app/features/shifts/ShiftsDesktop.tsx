'use client'

// DESKTOP variant of the Shifts feature — dense table, more columns, hover
// affordances and a right-click context menu. Mouse-first. Consumes the SHARED
// headless `ShiftsContext` (no data/formatting logic lives here).
import { useState } from 'react'
import type { ShiftsContext } from './useShifts'
import { Surface } from '../../ui/Surface'

const COLS = ['Date', 'Day', 'Hours', 'Range', 'Overtime', 'Earnings']

export default function ShiftsDesktop({ ctx }: { ctx: ShiftsContext }) {
  const { rows, selectedId } = ctx.state
  const [menu, setMenu] = useState<{ x: number; y: number; id: string } | null>(null)

  return (
    <Surface padding={0} style={{ overflow: 'hidden' }} >
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ background: 'var(--surface-2, #1a1a1e)' }}>
            {COLS.map((c, i) => (
              <th key={c} style={{
                textAlign: i >= 2 ? 'right' : 'left', padding: '12px 18px',
                color: 'var(--text-3, #71717a)', fontSize: 11, fontWeight: 600,
                letterSpacing: '.08em', textTransform: 'uppercase',
                borderBottom: '1px solid var(--border, #27272a)',
              }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr
              key={r.id}
              onClick={() => ctx.actions.select(r.id === selectedId ? null : r.id)}
              onContextMenu={(e) => { e.preventDefault(); setMenu({ x: e.clientX, y: e.clientY, id: r.id }) }}
              className="shift-row"
              style={{
                cursor: 'pointer',
                background: r.id === selectedId ? 'var(--accent-soft, rgba(52,201,138,.12))' : 'transparent',
                borderBottom: '1px solid var(--border, #27272a)',
              }}
            >
              <td style={{ padding: '13px 18px', color: 'var(--text, #fafafa)', fontWeight: 500 }}>
                {r.f.date}{r.planned && <span style={{ marginLeft: 8, fontSize: 10, color: 'var(--accent)', border: '1px solid var(--accent-line)', borderRadius: 6, padding: '1px 6px' }}>PLAN</span>}
              </td>
              <td style={{ padding: '13px 18px', color: 'var(--text-2, #a1a1aa)' }}>{r.weekday}</td>
              <td style={{ padding: '13px 18px', textAlign: 'right', color: 'var(--text, #fafafa)' }}>{r.f.hours}</td>
              <td style={{ padding: '13px 18px', textAlign: 'right', color: 'var(--text-3, #71717a)' }}>{r.f.range}</td>
              <td style={{ padding: '13px 18px', textAlign: 'right', color: r.overtime ? 'var(--accent)' : 'var(--text-3, #71717a)' }}>{r.f.overtime}</td>
              <td style={{ padding: '13px 18px', textAlign: 'right', color: 'var(--accent, #34c98a)', fontWeight: 600 }}>{r.f.earnings}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Right-click context menu (desktop-only affordance) */}
      {menu && (
        <>
          <div onClick={() => setMenu(null)} onContextMenu={(e) => { e.preventDefault(); setMenu(null) }}
               style={{ position: 'fixed', inset: 0, zIndex: 50 }} />
          <div style={{
            position: 'fixed', top: menu.y, left: menu.x, zIndex: 51,
            background: 'var(--surface-2, #1a1a1e)', border: '1px solid var(--border-2, #34343a)',
            borderRadius: 10, padding: 6, minWidth: 160,
            boxShadow: '0 18px 50px -12px rgba(0,0,0,.7)',
          }}>
            <MenuItem label="Edit shift" onClick={() => { ctx.actions.select(menu.id); setMenu(null) }} />
            <MenuItem label="Delete" danger onClick={() => { ctx.actions.remove(menu.id); setMenu(null) }} />
          </div>
        </>
      )}
    </Surface>
  )
}

function MenuItem({ label, onClick, danger }: { label: string; onClick: () => void; danger?: boolean }) {
  return (
    <button onClick={onClick} className="ctx-item" style={{
      display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px',
      background: 'transparent', border: 'none', borderRadius: 7, cursor: 'pointer',
      fontSize: 13, color: danger ? '#f87171' : 'var(--text, #fafafa)',
    }}>{label}</button>
  )
}
