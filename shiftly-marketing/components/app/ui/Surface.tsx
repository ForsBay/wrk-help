// SHARED surface/card primitive. Same visual language on every platform; the
// shells just place it differently. Padding/elevation are props, never platform
// forks (no `<Surface mobile />` — see composition-patterns avoid-boolean-props).
import type { CSSProperties, ReactNode } from 'react'

export function Surface({ children, padding = 16, style, className, onClick }: {
  children: ReactNode
  padding?: number
  style?: CSSProperties
  className?: string
  onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: 'var(--surface, #131316)',
        border: '1px solid var(--border, #27272a)',
        borderRadius: 'var(--radius, 14px)',
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
