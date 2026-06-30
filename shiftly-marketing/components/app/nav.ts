// ─────────────────────────────────────────────────────────────────────────────
// SHARED navigation model.
//
// One source of truth for the app's sections. The Desktop sidebar and the Mobile
// bottom navigation BOTH render from this list — the routes/labels/icons are
// never duplicated, only laid out differently per platform.
// ─────────────────────────────────────────────────────────────────────────────

import type { IconName } from './ui/Icon'

export type ViewId =
  | 'dashboard' | 'calendar' | 'stats' | 'integrations' | 'export' | 'settings' | 'profile'

export interface NavItem {
  id: ViewId
  label: string
  /** i18n key (lib/appI18n) for the translated label; falls back to `label`. */
  i18nKey: string
  icon: IconName
  /** Desktop-only keyboard shortcut (ignored on mobile). */
  hotkey?: string
}

// MOBILE bottom nav — the 4 core destinations only (unchanged).
export const NAV_ITEMS: NavItem[] = [
  { id: 'calendar',     label: 'Shifts',       i18nKey: 'shifts',       icon: 'calendar', hotkey: '1' },
  { id: 'stats',        label: 'Statistics',   i18nKey: 'statistics',   icon: 'chart',    hotkey: '2' },
  { id: 'integrations', label: 'Integrations', i18nKey: 'integrations', icon: 'plug',     hotkey: '3' },
  { id: 'settings',     label: 'Settings',     i18nKey: 'settings',     icon: 'gear',     hotkey: '4' },
]

// DESKTOP rail — the full set; Profile is pinned to the bottom by the Rail.
export const RAIL_ITEMS: NavItem[] = [
  { id: 'dashboard',    label: 'Dashboard',    i18nKey: 'dashboard',    icon: 'grid',     hotkey: '1' },
  { id: 'calendar',     label: 'Calendar',     i18nKey: 'calendar',     icon: 'calendar', hotkey: '2' },
  { id: 'stats',        label: 'Statistics',   i18nKey: 'statistics',   icon: 'chart',    hotkey: '3' },
  { id: 'integrations', label: 'Integrations', i18nKey: 'integrations', icon: 'plug',     hotkey: '4' },
  { id: 'export',       label: 'Export',       i18nKey: 'export',       icon: 'download', hotkey: '5' },
  { id: 'settings',     label: 'Settings',     i18nKey: 'settings',     icon: 'gear',     hotkey: '6' },
]
export const RAIL_PROFILE: NavItem = { id: 'profile', label: 'Profile', i18nKey: 'profile', icon: 'user' }
