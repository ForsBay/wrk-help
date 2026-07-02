'use client'

// ─────────────────────────────────────────────────────────────────────────────
// SHARED mobile bottom sheet. The native-feeling modal surface for shift detail,
// the new-shift form and confirmations. Slides up over a dimmed backdrop, snaps
// to content height, respects the bottom safe-area, traps focus lightly (Esc /
// backdrop / grabber to dismiss) and locks body scroll while open.
//
// Animation is transform/opacity only (cheap on the perf-gated mobile path). The
// component fully unmounts when closed so it costs nothing while idle.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from './Icon'

export function BottomSheet({ open, onClose, title, children }: {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}) {
  // Keep the node mounted through the close animation, then remove it.
  const [render, setRender] = useState(open)
  const [shown, setShown] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (open) {
      clearTimeout(closeTimer.current)
      setRender(true)
      // next frame → trigger the enter transition
      const id = requestAnimationFrame(() => setShown(true))
      return () => cancelAnimationFrame(id)
    }
    setShown(false)
    closeTimer.current = setTimeout(() => setRender(false), 240)
  }, [open])

  // Esc to close + lock background scroll while open.
  useEffect(() => {
    if (!render) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [render, onClose])

  if (!render) return null

  return (
    <div className={`sheet-overlay${shown ? ' on' : ''}`} onClick={onClose}>
      <div
        className={`sheet${shown ? ' on' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="sheet-grabber" aria-label="Close" onClick={onClose} />
        {title && (
          <div className="sheet-head">
            <h3 className="sheet-title">{title}</h3>
            <button className="icon-btn sheet-x" aria-label="Close" onClick={onClose}><Icon name="close" size={16} /></button>
          </div>
        )}
        {/* data-lenis-prevent: stop the page's Lenis smooth-scroll from swallowing
            the wheel so this inner panel scrolls natively when content overflows. */}
        <div className="sheet-body" data-lenis-prevent>{children}</div>
      </div>
    </div>
  )
}
