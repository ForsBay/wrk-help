'use client'

// App settings — currency, language and hourly rate. Persisted to localStorage so
// they survive reload. Consumed by useShifts (earnings format + rate) and by the
// i18n helper (language). Currency is symbol-only (no FX conversion), exactly like
// the phone app: changing it re-labels every amount, the numeric rate is unchanged.
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useAuth } from './auth'
import { contractSyncEnabled } from './flags'
import { loadContractSettings, subscribeContractSettings, saveContractSettings } from './contractCloud'
import { DEFAULT_SETTINGS, type Settings as ContractSettings } from './contract'

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

export type Theme = 'dark' | 'light'
interface Settings {
  currency: string; lang: Lang; rate: number
  theme: Theme; reminders: boolean; autoSync: boolean; weekStart: number
}
interface SettingsApi extends Settings {
  symbol: string
  setCurrency: (c: string) => void
  setLang: (l: Lang) => void
  setRate: (r: number) => void
  setTheme: (t: Theme) => void
  toggleTheme: () => void
  setReminders: (v: boolean) => void
  setAutoSync: (v: boolean) => void
  setWeekStart: (n: number) => void
}

const DEFAULTS: Settings = {
  currency: 'PLN', lang: 'en', rate: 31.4,
  theme: 'dark', reminders: true, autoSync: true, weekStart: 1,
}
const KEY = 'shiftly_settings_v1'

const noop = () => {}
const Ctx = createContext<SettingsApi | null>(null)
export const useAppSettings = (): SettingsApi => {
  const v = useContext(Ctx)
  if (v) return v
  // Safe fallback if used outside the provider.
  return {
    ...DEFAULTS, symbol: symbolOf(DEFAULTS.currency),
    setCurrency: noop, setLang: noop, setRate: noop,
    setTheme: noop, toggleTheme: noop, setReminders: noop, setAutoSync: noop, setWeekStart: noop,
  }
}

function load(): Settings {
  if (typeof window === 'undefined') return DEFAULTS
  try {
    const raw = window.localStorage.getItem(KEY)
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) }
  } catch (_) {}
  return DEFAULTS
}

// ── Mapping between the app's flat settings and the unified contract groups ──
const toContract = (s: Settings): ContractSettings => {
  const cs = DEFAULT_SETTINGS()
  cs.pay = { rate: s.rate, currency: s.currency }
  cs.locale = { lang: s.lang, weekStart: s.weekStart }
  cs.appearance = { theme: s.theme }
  cs.integrations = { calSync: s.autoSync }
  cs.notifications = { shiftReminders: s.reminders }
  return cs
}
const fromContract = (cs: ContractSettings): Settings => ({
  currency: cs.pay?.currency ?? DEFAULTS.currency,
  lang: (cs.locale?.lang as Lang) ?? DEFAULTS.lang,
  rate: cs.pay?.rate ?? DEFAULTS.rate,
  theme: (cs.appearance?.theme as Theme) ?? DEFAULTS.theme,
  reminders: cs.notifications?.shiftReminders ?? DEFAULTS.reminders,
  autoSync: cs.integrations?.calSync ?? DEFAULTS.autoSync,
  weekStart: cs.locale?.weekStart ?? DEFAULTS.weekStart,
})

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const [s, setS] = useState<Settings>(DEFAULTS)
  // Hydrate after mount (avoids SSR/client mismatch).
  useEffect(() => { setS(load()) }, [])

  // Reflect the theme on <html> so CSS (color-scheme + any [data-theme] rules) and
  // native form controls follow the preference. Live on every change.
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.dataset.theme = s.theme
    document.documentElement.style.colorScheme = s.theme
  }, [s.theme])

  const persist = (next: Settings) => {
    setS(next)
    try { window.localStorage.setItem(KEY, JSON.stringify(next)) } catch (_) {}
  }

  // ── Contract settings sync — OFF by default (feature flag). When on + signed in,
  // hydrate/subscribe from the root doc and push local changes (both debounced &
  // loop-guarded via `lastCloud`). Off → purely local, exactly as before. ──
  const { user } = useAuth()
  const uid = user?.uid ?? null
  const [contract, setContract] = useState(false)
  useEffect(() => { setContract(contractSyncEnabled()) }, [])
  const lastCloud = useRef<string>('')

  useEffect(() => {
    if (!contract || !uid) return
    let cancelled = false
    const apply = (cs: ContractSettings) => {
      const next = fromContract(cs)
      lastCloud.current = JSON.stringify(next)
      persist(next)
    }
    loadContractSettings(uid).then(cs => { if (!cancelled && cs) apply(cs) }).catch(e => console.error('settings load', e))
    const unsub = subscribeContractSettings(uid, apply)
    return () => { cancelled = true; unsub() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract, uid])

  const pushTimer = useRef<ReturnType<typeof setTimeout>>()
  useEffect(() => {
    if (!contract || !uid) return
    const json = JSON.stringify(s)
    if (json === lastCloud.current) return          // came from cloud — don't echo back
    clearTimeout(pushTimer.current)
    pushTimer.current = setTimeout(() => {
      saveContractSettings(uid, toContract(s)).catch(e => console.error('settings save', e))
      lastCloud.current = json
    }, 600)
  }, [s, contract, uid])

  const api: SettingsApi = {
    ...s,
    symbol: symbolOf(s.currency),
    setCurrency: c => persist({ ...s, currency: c }),
    setLang: l => persist({ ...s, lang: l }),
    setRate: r => persist({ ...s, rate: r > 0 ? r : s.rate }),
    setTheme: theme => persist({ ...s, theme }),
    toggleTheme: () => persist({ ...s, theme: s.theme === 'dark' ? 'light' : 'dark' }),
    setReminders: reminders => persist({ ...s, reminders }),
    setAutoSync: autoSync => persist({ ...s, autoSync }),
    setWeekStart: weekStart => persist({ ...s, weekStart }),
  }
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}
