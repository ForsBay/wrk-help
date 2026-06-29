'use client'

// DESKTOP-ONLY keyboard shortcuts — a single deduplicated global listener
// (client-event-listeners). Mounted only by DesktopShell, so mobile never ships
// or runs this. Ignores typing in inputs/textareas.
import { useEffect } from 'react'
import { RAIL_ITEMS, ViewId } from '../nav'

export interface ShortcutHandlers {
  openPalette: () => void
  prevMonth: () => void
  nextMonth: () => void
  goToday: () => void
  newShift: () => void
  onNav: (v: ViewId) => void
  duplicateSelected: () => void
  deleteSelected: () => void
  clearSelection: () => void
  hasSelection: () => boolean
}

export function useDesktopShortcuts(h: ShortcutHandlers) {
  useEffect(() => {
    const navByKey = new Map(RAIL_ITEMS.filter(i => i.hotkey).map(i => [i.hotkey!, i.id]))
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement as HTMLElement | null
      const typing = el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)

      // ⌘K / Ctrl+K works even while typing.
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); h.openPalette(); return }
      if (typing) return
      if (e.metaKey || e.ctrlKey || e.altKey) return

      switch (e.key) {
        case 'ArrowLeft':  e.preventDefault(); h.prevMonth(); break
        case 'ArrowRight': e.preventDefault(); h.nextMonth(); break
        case 't': case 'T': h.goToday(); break
        case 'n': case 'N': e.preventDefault(); h.newShift(); break
        case 'd': case 'D': if (h.hasSelection()) { e.preventDefault(); h.duplicateSelected() } break
        case 'Backspace': case 'Delete': if (h.hasSelection()) { e.preventDefault(); h.deleteSelected() } break
        case 'Escape': h.clearSelection(); break
        default: {
          const view = navByKey.get(e.key)
          if (view) { e.preventDefault(); h.onNav(view) }
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [h])
}
