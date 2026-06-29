'use client'

// MOBILE bottom navigation. Same SHARED NAV_ITEMS model as the desktop Sidebar,
// laid out as a fixed bar with large (≥44px) touch targets, icon-over-label, no
// hover, no hotkeys, respects the bottom safe-area.
import { NAV_ITEMS, ViewId } from '../nav'
import { Icon } from '../ui/Icon'

export function BottomNav({ active, onSelect }: { active: ViewId; onSelect: (v: ViewId) => void }) {
  return (
    <nav style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 40,
      display: 'flex', justifyContent: 'space-around', alignItems: 'stretch',
      background: 'var(--surface, #131316)', borderTop: '1px solid var(--border, #27272a)',
      paddingBottom: 'env(safe-area-inset-bottom, 0px)',
    }}>
      {NAV_ITEMS.map(item => {
        const on = item.id === active
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            aria-current={on}
            style={{
              flex: 1, minHeight: 56, padding: '8px 0', border: 'none', cursor: 'pointer',
              background: 'transparent', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 4,
              color: on ? 'var(--accent, #34c98a)' : 'var(--text-3, #71717a)',
            }}
          >
            <Icon name={item.icon} size={23} />
            <span style={{ fontSize: 11, fontWeight: on ? 600 : 500 }}>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
