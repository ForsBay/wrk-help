'use client'

// Settings view (shared desktop + mobile). Account sign-in (cross-device sync),
// real preferences, and — now wired — Currency, Language and Hourly rate that
// actually drive the app (earnings format, UI language). Grouped rows in the
// shared card language.
import type { ShiftsContext } from '../shifts/useShifts'
import { useAppSettings, CURRENCIES, LANGS, type Lang } from '@/lib/appSettings'
import { useT } from '@/lib/appI18n'
import { AuthCard } from '../account/AuthCard'
import { Icon, type IconName } from '../../ui/Icon'

export function MobileSettings({ ctx }: { ctx: ShiftsContext }) {
  const t = useT()
  const settings = useAppSettings()

  return (
    <div className="m-stack">
      <AuthCard />

      <Group title={t('preferences')}>
        <ToggleRow icon="moon" label={t('darkTheme')} on={settings.theme === 'dark'} onToggle={settings.toggleTheme} />
        <ToggleRow icon="bell" label={t('shiftReminders')} on={settings.reminders} onToggle={() => settings.setReminders(!settings.reminders)} />
        <ToggleRow icon="sync" label={t('autoSync')} on={settings.autoSync} onToggle={() => settings.setAutoSync(!settings.autoSync)} />
        <SelectRow icon="sparkle" label={t('language')} value={settings.lang}
          options={LANGS.map(l => ({ value: l.code, label: l.label }))}
          onChange={v => settings.setLang(v as Lang)} />
      </Group>

      <Group title={t('pay')}>
        <InputRow icon="coin" label={t('hourlyRate')} value={String(settings.rate)} suffix={settings.symbol}
          onChange={v => settings.setRate(Number(v) || settings.rate)} />
        <SelectRow icon="coin" label={t('currency')} value={settings.currency}
          options={CURRENCIES.map(c => ({ value: c.code, label: `${c.name} (${c.symbol})` }))}
          onChange={settings.setCurrency} />
        <ValueRow icon="calendar" label={t('weekStartsOn')} value={t('monday')} />
      </Group>

      <Group title={t('about')}>
        <ValueRow icon="sparkle" label={t('version')} value="1.8.1" />
        <ValueRow icon="gear" label={t('performanceMode')} value={t('auto')} />
      </Group>
    </div>
  )
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="m-section">
      <h2 className="m-section-title">{title}</h2>
      <div className="set-group">{children}</div>
    </section>
  )
}

function ToggleRow({ icon, label, on, onToggle }: { icon: IconName; label: string; on: boolean; onToggle: () => void }) {
  return (
    <button className="set-row" onClick={onToggle}>
      <span className="set-ic"><Icon name={icon} size={18} /></span>
      <span className="set-label">{label}</span>
      <span className={`switch${on ? ' on' : ''}`} />
    </button>
  )
}

function ValueRow({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  return (
    <div className="set-row">
      <span className="set-ic"><Icon name={icon} size={18} /></span>
      <span className="set-label">{label}</span>
      <span className="set-val">{value}</span>
    </div>
  )
}

function SelectRow({ icon, label, value, options, onChange }: {
  icon: IconName; label: string; value: string; options: { value: string; label: string }[]; onChange: (v: string) => void
}) {
  return (
    <label className="set-row">
      <span className="set-ic"><Icon name={icon} size={18} /></span>
      <span className="set-label">{label}</span>
      <select className="set-select" value={value} onChange={e => onChange(e.target.value)}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  )
}

function InputRow({ icon, label, value, suffix, onChange }: {
  icon: IconName; label: string; value: string; suffix?: string; onChange: (v: string) => void
}) {
  return (
    <label className="set-row">
      <span className="set-ic"><Icon name={icon} size={18} /></span>
      <span className="set-label">{label}</span>
      <span className="set-input-wrap">
        <input className="set-input" inputMode="decimal" defaultValue={value}
          onBlur={e => onChange(e.target.value.replace(/[^0-9.]/g, ''))} />
        {suffix && <span className="set-input-suffix">{suffix}</span>}
      </span>
    </label>
  )
}
