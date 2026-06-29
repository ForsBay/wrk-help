'use client'

// DESKTOP left navigation. Renders from the SHARED NAV_ITEMS model, shows labels
// + hotkey hints, and supports hover. (The mobile BottomNav renders the same
// model with a different layout — the nav data is never duplicated.)
import { NAV_ITEMS, ViewId } from '../nav'
import { Icon } from '../ui/Icon'

export function Sidebar({ active, onSelect }: { active: ViewId; onSelect: (v: ViewId) => void }) {
  return (
    <nav style={{
      width: 232, flexShrink: 0, padding: 16, display: 'flex', flexDirection: 'column', gap: 4,
      borderRight: '1px solid var(--border, #27272a)', background: 'var(--surface, #131316)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px 18px' }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--accent)' }} />
        <span style={{ fontWeight: 600, fontSize: 17, color: 'var(--text, #fafafa)' }}>Shiftly</span>
      </div>
      {NAV_ITEMS.map(item => {
        const on = item.id === active
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className="side-item"
            style={{
              display: 'flex', alignItems: 'center', gap: 12, width: '100%',
              padding: '10px 12px', borderRadius: 10, border: 'none', cursor: 'pointer',
              fontSize: 14, fontWeight: on ? 600 : 500, textAlign: 'left',
              color: on ? 'var(--text, #fafafa)' : 'var(--text-2, #a1a1aa)',
              background: on ? 'var(--accent-soft, rgba(52,201,138,.12))' : 'transparent',
            }}
          >
            <Icon name={item.icon} size={19} style={{ color: on ? 'var(--accent)' : 'currentColor' }} />
            <span style={{ flex: 1 }}>{item.label}</span>
            {item.hotkey && <kbd style={{
              fontSize: 11, color: 'var(--text-3, #71717a)', border: '1px solid var(--border-2)',
              borderRadius: 5, padding: '1px 6px', fontFamily: 'inherit',
            }}>{item.hotkey}</kbd>}
          </button>
        )
      })}
    </nav>
  )
}
