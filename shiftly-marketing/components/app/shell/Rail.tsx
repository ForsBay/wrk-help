'use client'

// Persistent desktop rail (Linear/Notion style). Renders the SHARED RAIL_ITEMS
// model; collapses to an icon-only strip. Profile pinned to the bottom.
import { RAIL_ITEMS, RAIL_PROFILE, ViewId } from '../nav'
import { Icon } from '../ui/Icon'

export function Rail({ active, onSelect, collapsed, onToggle }: {
  active: ViewId; onSelect: (v: ViewId) => void; collapsed: boolean; onToggle: () => void
}) {
  const Item = ({ id, label, icon, hotkey }: typeof RAIL_ITEMS[number]) => {
    const on = id === active
    return (
      <button key={id} onClick={() => onSelect(id)} className={`rail-item${on ? ' on' : ''}`} title={collapsed ? label : undefined}>
        <Icon name={icon} size={19} style={{ color: on ? 'var(--accent)' : 'currentColor', flexShrink: 0 }} />
        {!collapsed && <><span className="rail-label">{label}</span>{hotkey && <kbd className="rail-kbd">{hotkey}</kbd>}</>}
      </button>
    )
  }

  return (
    <nav className={`rail${collapsed ? ' collapsed' : ''}`}>
      <div className="rail-top">
        <button className="rail-brand" onClick={onToggle} title="Toggle sidebar">
          <span className="rail-logo" />
          {!collapsed && <span className="rail-brand-name">Shiftly</span>}
        </button>
      </div>
      <div className="rail-items">
        {RAIL_ITEMS.map(Item)}
      </div>
      <div className="rail-bottom">
        {Item(RAIL_PROFILE)}
      </div>
    </nav>
  )
}
