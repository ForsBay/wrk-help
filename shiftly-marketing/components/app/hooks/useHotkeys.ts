'use client'

// DESKTOP-ONLY keyboard shortcuts. Mounted only by DesktopShell, so mobile never
// ships or runs this. Single deduplicated global listener (client-event-listeners),
// passive where possible; ignores typing in inputs.
import { useEffect } from 'react'
import { NAV_ITEMS, ViewId } from '../nav'

export function useHotkeys(onSelect: (v: ViewId) => void) {
  useEffect(() => {
    const map = new Map<string, ViewId>(NAV_ITEMS.filter(i => i.hotkey).map(i => [i.hotkey!, i.id]))
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || (el as HTMLElement).isContentEditable)) return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const view = map.get(e.key)
      if (view) { e.preventDefault(); onSelect(view) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onSelect])
}
