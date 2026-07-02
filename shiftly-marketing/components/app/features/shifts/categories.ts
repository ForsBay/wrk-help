// ─────────────────────────────────────────────────────────────────────────────
// SHARED shift categories (type + colour).
//
// One source of truth for shift "type" and its colour, consumed identically by
// the desktop calendar chips / inspector and the mobile cards / sheets. Colours
// are tuned for the dark zinc base and never collide with the emerald accent
// reserved for money. Added ADDITIVELY — `type` is optional on Shift, so any
// shift without one falls back to `regular` and nothing downstream breaks.
// ─────────────────────────────────────────────────────────────────────────────

export type ShiftType = 'regular' | 'overtime' | 'night' | 'training' | 'leave'

export interface CategoryMeta {
  id: ShiftType
  label: string     // English fallback
  i18nKey: string   // lib/appI18n key for the translated label
  color: string   // solid swatch / bar / dot
  soft: string    // tinted fill (chips, pills)
  line: string    // tinted border
}

export const CATEGORIES: Record<ShiftType, CategoryMeta> = {
  regular:  { id: 'regular',  label: 'Regular',  i18nKey: 'catRegular',  color: '#34c98a', soft: 'rgba(52,201,138,.12)',  line: 'rgba(52,201,138,.30)'  },
  overtime: { id: 'overtime', label: 'Overtime', i18nKey: 'catOvertime', color: '#f5b14c', soft: 'rgba(245,177,76,.12)',  line: 'rgba(245,177,76,.32)'  },
  night:    { id: 'night',    label: 'Night',    i18nKey: 'catNight',    color: '#8b8bf5', soft: 'rgba(139,139,245,.14)', line: 'rgba(139,139,245,.34)' },
  training: { id: 'training', label: 'Training', i18nKey: 'catTraining', color: '#4cc3f5', soft: 'rgba(76,195,245,.12)',  line: 'rgba(76,195,245,.32)'  },
  leave:    { id: 'leave',    label: 'Time off', i18nKey: 'catLeave',    color: '#71717a', soft: 'rgba(113,113,122,.14)', line: 'rgba(113,113,122,.34)' },
}

export const CATEGORY_LIST: CategoryMeta[] = Object.values(CATEGORIES)

/** Resolve a (possibly undefined) shift type to its meta, defaulting to regular. */
export const categoryOf = (type?: ShiftType): CategoryMeta => CATEGORIES[type ?? 'regular'] ?? CATEGORIES.regular
