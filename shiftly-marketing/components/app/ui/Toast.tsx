'use client'

// ─────────────────────────────────────────────────────────────────────────────
// SHARED toast system. One provider mounted at the AppShell root, consumed by
// both shells via `useToast()`. Toasts render in a fixed, safe-area-aware stack
// that sits ABOVE the mobile bottom-nav and below modals. Pure CSS slide/fade
// (transform + opacity only) so it costs nothing on the perf-gated mobile path.
// ─────────────────────────────────────────────────────────────────────────────

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

type ToastTone = 'success' | 'info' | 'danger'
interface Toast { id: number; text: string; tone: ToastTone; icon?: IconName }

interface ToastApi {
  toast: (text: string, opts?: { tone?: ToastTone; icon?: IconName }) => void
  success: (text: string, icon?: IconName) => void
}

const Ctx = createContext<ToastApi | null>(null)

/** Safe no-op fallback so components work even if rendered outside a provider. */
const NOOP: ToastApi = { toast: () => {}, success: () => {} }
export const useToast = (): ToastApi => useContext(Ctx) ?? NOOP

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Toast[]>([])
  const seq = useRef(0)

  const remove = useCallback((id: number) => setItems(prev => prev.filter(t => t.id !== id)), [])

  const toast = useCallback<ToastApi['toast']>((text, opts) => {
    const id = ++seq.current
    setItems(prev => [...prev.slice(-2), { id, text, tone: opts?.tone ?? 'info', icon: opts?.icon }])
    setTimeout(() => remove(id), 2600)
  }, [remove])

  const success = useCallback<ToastApi['success']>((text, icon = 'check') => toast(text, { tone: 'success', icon }), [toast])

  return (
    <Ctx.Provider value={{ toast, success }}>
      {children}
      <div className="toast-stack" role="status" aria-live="polite">
        {items.map(t => (
          <div key={t.id} className={`toast toast-${t.tone}`} onClick={() => remove(t.id)}>
            <Icon name={t.icon ?? (t.tone === 'danger' ? 'trash' : 'check')} size={17} />
            <span>{t.text}</span>
          </div>
        ))}
      </div>
    </Ctx.Provider>
  )
}
