'use client'

// MOBILE variant of the Shifts feature — large tappable cards, one glance of
// info, an inline expand for details + delete. No hover, no context menu, no
// table. Consumes the SAME shared `ShiftsContext` as the desktop table.
import type { ShiftsContext } from './useShifts'
import { Surface } from '../../ui/Surface'
import { Icon } from '../../ui/Icon'

export default function ShiftsMobile({ ctx }: { ctx: ShiftsContext }) {
  const { rows, selectedId } = ctx.state
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {rows.map(r => {
        const open = r.id === selectedId
        return (
          <Surface key={r.id} padding={0} style={{ overflow: 'hidden' }}>
            <button
              onClick={() => ctx.actions.select(open ? null : r.id)}
              style={{
                width: '100%', minHeight: 64, padding: '14px 16px', background: 'transparent',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-soft, rgba(52,201,138,.12))', color: 'var(--accent, #34c98a)' }}>
                <Icon name="clock" size={22} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text, #fafafa)' }}>
                  {r.f.date} · {r.weekday}
                  {r.planned && <span style={{ marginLeft: 8, fontSize: 10, color: 'var(--accent)' }}>PLAN</span>}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-3, #71717a)', marginTop: 2 }}>{r.f.hours} · {r.f.range}</div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--accent, #34c98a)' }}>{r.f.earnings}</div>
                {r.overtime > 0 && <div style={{ fontSize: 12, color: 'var(--text-2)' }}>OT {r.f.overtime}</div>}
              </div>
            </button>

            {open && (
              <div style={{ padding: '0 16px 14px', display: 'flex', gap: 10 }}>
                <button style={btn()} onClick={() => ctx.actions.select(null)}>Edit</button>
                <button style={btn(true)} onClick={() => ctx.actions.remove(r.id)}>Delete</button>
              </div>
            )}
          </Surface>
        )
      })}
    </div>
  )
}

const btn = (danger = false): React.CSSProperties => ({
  flex: 1, minHeight: 46, borderRadius: 12, cursor: 'pointer', fontSize: 15, fontWeight: 600,
  border: '1px solid ' + (danger ? 'rgba(248,113,113,.3)' : 'var(--border-2, #34343a)'),
  background: danger ? 'rgba(248,113,113,.1)' : 'rgba(255,255,255,.04)',
  color: danger ? '#f87171' : 'var(--text, #fafafa)',
})
