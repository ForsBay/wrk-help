'use client'

// MOBILE bottom navigation. Same SHARED NAV_ITEMS model as the desktop Sidebar,
// laid out as a fixed bar with large (≥56px) touch targets, icon-over-label, an
// animated active indicator, no hover, no hotkeys. Respects the bottom safe-area.
import { NAV_ITEMS, ViewId } from '../nav'
import { Icon } from '../ui/Icon'
import { useT } from '@/lib/appI18n'

export function BottomNav({ active, onSelect }: { active: ViewId; onSelect: (v: ViewId) => void }) {
  const t = useT()
  return (
    <nav className="m-nav">
      {NAV_ITEMS.map(item => {
        const on = item.id === active
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            aria-current={on}
            className={`m-nav-item${on ? ' on' : ''}`}
          >
            <span className="m-nav-ic"><Icon name={item.icon} size={22} /></span>
            <span className="m-nav-label">{t(item.i18nKey as any)}</span>
          </button>
        )
      })}
    </nav>
  )
}
