'use client'

// App settings — currency, language and hourly rate. Persisted to localStorage so
// they survive reload. Consumed by useShifts (earnings format + rate) and by the
// i18n helper (language). Currency is symbol-only (no FX conversion), exactly like
// the phone app: changing it re-labels every amount, the numeric rate is unchanged.
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'ru' | 'pl' | 'uk'
export const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'pl', label: 'Polski' },
  { code: 'uk', label: 'Українська' },
]

export const CURRENCIES: { code: string; symbol: string; name: string }[] = [
  { code: 'PLN', symbol: 'zł', name: 'Polish Złoty' },
  { code: 'EUR', symbol: '€',  name: 'Euro' },
  { code: 'USD', symbol: '$',  name: 'US Dollar' },
  { code: 'GBP', symbol: '£',  name: 'British Pound' },
  { code: 'UAH', symbol: '₴',  name: 'Ukrainian Hryvnia' },
  { code: 'RUB', symbol: '₽',  name: 'Russian Ruble' },
  { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna' },
  { code: 'KZT', symbol: '₸',  name: 'Kazakhstani Tenge' },
]
const symbolOf = (code: string) => CURRENCIES.find(c => c.code === code)?.symbol ?? code

interface Settings { currency: string; lang: Lang; rate: number }
interface SettingsApi extends Settings {
  symbol: string
  setCurrency: (c: string) => void
  setLang: (l: Lang) => void
  setRate: (r: number) => void
}

const DEFAULTS: Settings = { currency: 'PLN', lang: 'en', rate: 31.4 }
const KEY = 'shiftly_settings_v1'

const Ctx = createContext<SettingsApi | null>(null)
export const useAppSettings = (): SettingsApi => {
  const v = useContext(Ctx)
  if (v) return v
  // Safe fallback if used outside the provider.
  return { ...DEFAULTS, symbol: symbolOf(DEFAULTS.currency), setCurrency: () => {}, setLang: () => {}, setRate: () => {} }
}

function load(): Settings {
  if (typeof window === 'undefined') return DEFAULTS
  try {
    const raw = window.localStorage.getItem(KEY)
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) }
  } catch (_) {}
  return DEFAULTS
}

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const [s, setS] = useState<Settings>(DEFAULTS)
  // Hydrate after mount (avoids SSR/client mismatch).
  useEffect(() => { setS(load()) }, [])

  const persist = (next: Settings) => {
    setS(next)
    try { window.localStorage.setItem(KEY, JSON.stringify(next)) } catch (_) {}
  }

  const api: SettingsApi = {
    ...s,
    symbol: symbolOf(s.currency),
    setCurrency: c => persist({ ...s, currency: c }),
    setLang: l => persist({ ...s, lang: l }),
    setRate: r => persist({ ...s, rate: r > 0 ? r : s.rate }),
  }
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}
