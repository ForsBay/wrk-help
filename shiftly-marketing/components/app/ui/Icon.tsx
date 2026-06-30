// SHARED icon set — one set of glyphs used by every platform's UI.
import type { CSSProperties } from 'react'

export type IconName =
  | 'calendar' | 'chart' | 'plug' | 'gear' | 'plus' | 'clock' | 'coin' | 'chevron'
  | 'grid' | 'download' | 'user'
  | 'check' | 'trash' | 'sync' | 'close' | 'pencil' | 'copy' | 'pin' | 'bell'
  | 'moon' | 'sun' | 'briefcase' | 'sparkle' | 'arrow-right'

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
  check:    'M5 13l4 4L19 7',
  trash:    'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
  sync:     'M20 11a8 8 0 0 0-14-4.5L4 8m0 0V4m0 4h4M4 13a8 8 0 0 0 14 4.5L20 16m0 0v4m0-4h-4',
  close:    'M6 6l12 12M18 6L6 18',
  pencil:   'M4 20h4L19 9a2 2 0 0 0-3-3L5 17v3ZM14 6l3 3',
  copy:     'M9 9h10v10H9zM5 15V5h10',
  pin:      'M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  bell:     'M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6ZM10 20a2 2 0 0 0 4 0',
  moon:     'M21 12.5A8.5 8.5 0 1 1 11.5 3a6.5 6.5 0 0 0 9.5 9.5Z',
  sun:      'M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  briefcase:'M3 9h18v10H3zM8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3M3 13h18',
  sparkle:  'M12 3l1.8 4.8L18.5 9l-4.7 1.2L12 15l-1.8-4.8L5.5 9l4.7-1.2L12 3ZM18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z',
  'arrow-right': 'M5 12h14m0 0-6-6m6 6-6 6',
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
