// SHARED icon set — one set of glyphs used by every platform's UI.
import type { CSSProperties } from 'react'

export type IconName =
  | 'calendar' | 'chart' | 'plug' | 'gear' | 'plus' | 'clock' | 'coin' | 'chevron'
  | 'grid' | 'download' | 'user'

const PATHS: Record<IconName, string> = {
  calendar: 'M7 3v3M17 3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z',
  chart:    'M5 19V10M10 19V5M15 19v-6M20 19V8',
  plug:     'M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0V7ZM12 16v5',
  gear:     'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm8 3-1.8 1 .3 2-2 .8-1.2-1.6h-2.6L11.5 17l-2-.8.3-2L8 12l1.8-1-.3-2 2-.8 1.2 1.6h2.6L18.5 7l2 .8-.3 2L22 12Z',
  plus:     'M12 5v14M5 12h14',
  clock:    'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  coin:     'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM9.5 14.5h4M9.5 9.5h4M12 7v10',
  chevron:  'M9 6l6 6-6 6',
  grid:     'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  download: 'M12 3v11m0 0 4-4m-4 4-4-4M5 20h14',
  user:     'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 20a7 7 0 0 1 14 0',
}

export function Icon({ name, size = 20, style, className }: {
  name: IconName; size?: number; style?: CSSProperties; className?: string
}) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"
      style={style} className={className} aria-hidden
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
