// ─────────────────────────────────────────────────────────────────────────────
// SHARED navigation model.
//
// One source of truth for the app's sections. The Desktop sidebar and the Mobile
// bottom navigation BOTH render from this list — the routes/labels/icons are
// never duplicated, only laid out differently per platform.
// ─────────────────────────────────────────────────────────────────────────────

import type { IconName } from './ui/Icon'

export type ViewId = 'calendar' | 'stats' | 'integrations' | 'settings'

export interface NavItem {
  id: ViewId
  label: string
  icon: IconName
  /** Desktop-only keyboard shortcut (ignored on mobile). */
  hotkey?: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'calendar',     label: 'Shifts',       icon: 'calendar', hotkey: '1' },
  { id: 'stats',        label: 'Statistics',   icon: 'chart',    hotkey: '2' },
  { id: 'integrations', label: 'Integrations', icon: 'plug',     hotkey: '3' },
  { id: 'settings',     label: 'Settings',     icon: 'gear',     hotkey: '4' },
]
