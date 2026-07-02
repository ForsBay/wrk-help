'use client'

// SHARED form primitives — one visual language for every input across the app.
// Labelled field wrapper, text/time input, and a colour category picker. Styled
// via the `.fld-*` classes in globals.css so they inherit the design tokens and
// the touch-target / safe-area rules already defined there.
import type { CSSProperties, ReactNode } from 'react'
import { CATEGORY_LIST, type ShiftType } from '../features/shifts/categories'
import { useT } from '@/lib/appI18n'

export function Field({ label, hint, children, style }: {
  label: string; hint?: string; children: ReactNode; style?: CSSProperties
}) {
  return (
    <label className="fld" style={style}>
      <span className="fld-label">{label}{hint && <span className="fld-hint">{hint}</span>}</span>
      {children}
    </label>
  )
}

export function TextInput({ value, onChange, type = 'text', placeholder, inputMode }: {
  value: string
  onChange: (v: string) => void
  type?: string
  placeholder?: string
  inputMode?: 'text' | 'numeric' | 'decimal'
}) {
  return (
    <input
      className="fld-input"
      type={type}
      value={value}
      placeholder={placeholder}
      inputMode={inputMode}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export function CategoryPicker({ value, onChange }: { value: ShiftType; onChange: (t: ShiftType) => void }) {
  const t = useT()
  return (
    <div className="cat-picker">
      {CATEGORY_LIST.map(c => {
        const on = c.id === value
        return (
          <button
            key={c.id}
            type="button"
            className={`cat-chip${on ? ' on' : ''}`}
            onClick={() => onChange(c.id)}
            style={on ? { background: c.soft, borderColor: c.line, color: '#fafafa' } : undefined}
          >
            <span className="cat-dot" style={{ background: c.color }} />
            {t(c.i18nKey as any)}
          </button>
        )
      })}
    </div>
  )
}
