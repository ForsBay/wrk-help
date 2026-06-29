// SHARED metric tile (value + label). Reused by the desktop right-sidebar, the
// mobile summary row, and anywhere a KPI is shown. `size` adapts emphasis without
// being a platform flag.
import { Surface } from './Surface'

export function StatTile({ value, label, accent = false, size = 'md' }: {
  value: string | number
  label: string
  accent?: boolean
  size?: 'md' | 'lg'
}) {
  const valueSize = size === 'lg' ? 26 : 20
  return (
    <Surface padding={size === 'lg' ? 16 : 12} style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontFamily: 'var(--font-manrope)', fontWeight: 600, lineHeight: 1.1,
        fontSize: valueSize, color: accent ? 'var(--accent, #34c98a)' : 'var(--text, #fafafa)',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>
        {value}
      </div>
      <div style={{ marginTop: 4, fontSize: 11, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-3, #71717a)' }}>
        {label}
      </div>
    </Surface>
  )
}
