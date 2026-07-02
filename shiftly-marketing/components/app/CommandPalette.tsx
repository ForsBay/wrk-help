'use client'

// ⌘K command palette (Raycast/Linear). Lazy-loaded by DesktopShell so it never
// weighs down first paint. No business logic — just runs injected commands.
import { useEffect, useMemo, useRef, useState } from 'react'
import { useT } from '@/lib/appI18n'

export interface Command { id: string; label: string; hint?: string; run: () => void }

export default function CommandPalette({ open, onClose, commands }: {
  open: boolean; onClose: () => void; commands: Command[]
}) {
  const t = useT()
  const [q, setQ] = useState('')
  const [i, setI] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    return s ? commands.filter(c => c.label.toLowerCase().includes(s)) : commands
  }, [q, commands])

  useEffect(() => { if (open) { setQ(''); setI(0); requestAnimationFrame(() => inputRef.current?.focus()) } }, [open])
  useEffect(() => { setI(0) }, [q])

  if (!open) return null

  const run = (c?: Command) => { if (c) { c.run(); onClose() } }

  return (
    <div className="cmdk-overlay" onClick={onClose}>
      <div className="cmdk" onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Escape') onClose()
          else if (e.key === 'ArrowDown') { e.preventDefault(); setI(v => Math.min(v + 1, filtered.length - 1)) }
          else if (e.key === 'ArrowUp')   { e.preventDefault(); setI(v => Math.max(v - 1, 0)) }
          else if (e.key === 'Enter')     { e.preventDefault(); run(filtered[i]) }
        }}>
        <input ref={inputRef} className="cmdk-input" placeholder={t('typeCommand')} value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="cmdk-list" data-lenis-prevent>
          {filtered.map((c, idx) => (
            <button key={c.id} className={`cmdk-item${idx === i ? ' on' : ''}`} onMouseEnter={() => setI(idx)} onClick={() => run(c)}>
              <span>{c.label}</span>{c.hint && <kbd className="cmdk-hint">{c.hint}</kbd>}
            </button>
          ))}
          {filtered.length === 0 && <div className="cmdk-empty">{t('noCommands')}</div>}
        </div>
      </div>
    </div>
  )
}
