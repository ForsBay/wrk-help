'use client'

import { useLang } from '@/lib/i18n'

const MONO = "ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, monospace"
const RATE = 18

type Day = { d: number; h?: number; we?: boolean; today?: boolean }
const DAYS: Day[] = [
  { d: 1, h: 9 }, { d: 2, h: 8.5 }, { d: 3, h: 8.5 }, { d: 4, h: 8 }, { d: 5, h: 8.5 }, { d: 6, we: true }, { d: 7, we: true },
  { d: 8, h: 9 }, { d: 9, h: 8.5 }, { d: 10, h: 8 }, { d: 11 }, { d: 12, h: 8.5 }, { d: 13, we: true }, { d: 14, we: true },
  { d: 15, h: 9 }, { d: 16, h: 8.5 }, { d: 17, h: 8.5, today: true }, { d: 18, h: 9 }, { d: 19, h: 8 }, { d: 20, we: true }, { d: 21, we: true },
  { d: 22, h: 9 }, { d: 23, h: 8.5 }, { d: 24, h: 8.5 }, { d: 25, h: 8 }, { d: 26 }, { d: 27, we: true }, { d: 28, we: true },
  { d: 29 }, { d: 30 },
]

function Cell({ day }: { day: Day }) {
  const worked = day.h != null
  const earn = worked ? Math.round(day.h! * RATE) : 0
  return (
    <div style={{
      borderRadius: '1.1cqw',
      background: worked ? 'rgba(52,201,138,.10)' : 'rgba(255,255,255,.025)',
      border: day.today ? '0.28cqw solid #34c98a' : '0.12cqw solid rgba(255,255,255,.06)',
      padding: '0.9cqw 0 0.7cqw',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
      minHeight: '5.8cqw', gap: '0.25cqw',
    }}>
      <span style={{ fontSize: '1.85cqw', fontWeight: 600, fontFamily: MONO, color: day.we ? '#9a5b5b' : worked ? '#fafafa' : '#52525b' }}>{day.d}</span>
      {worked ? (
        <>
          <span style={{ fontSize: '1.5cqw', fontWeight: 700, color: '#34c98a', lineHeight: 1 }}>{day.h}h</span>
          <span style={{ fontSize: '1.25cqw', fontFamily: MONO, color: '#6b6b73', lineHeight: 1 }}>€{earn}</span>
        </>
      ) : (
        <span style={{ fontSize: '1.7cqw', color: '#3f3f46', lineHeight: 1 }}>{day.we ? '·' : '+'}</span>
      )}
    </div>
  )
}

export default function Dashboard({ chrome = false }: { chrome?: boolean }) {
  const { t } = useLang()
  const a = t.hero.app

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
      background: '#0e0e11', color: '#fafafa', fontFamily: 'var(--font-manrope)', overflow: 'hidden',
    }}>
      {chrome && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7cqw', padding: '1.4cqw 1.8cqw', background: '#0a0a0b' }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => <i key={c} style={{ width: '1.2cqw', height: '1.2cqw', borderRadius: '50%', background: c }} />)}
        </div>
      )}

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '2.2cqw 3cqw' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.6cqw' }}>
          <div>
            <div style={{ fontSize: '1.4cqw', letterSpacing: '.18em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginBottom: '0.5cqw' }}>{a.tracking}</div>
            <div style={{ fontSize: '3.4cqw', fontWeight: 500, letterSpacing: '-.01em', color: '#fafafa', lineHeight: 1 }}>{a.title}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2cqw' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.4cqw' }}>
              <button style={{ background: 'rgba(255,255,255,.05)', border: 'none', borderRadius: '50%', width: '3cqw', height: '3cqw', color: '#a1a1aa', fontSize: '1.6cqw', cursor: 'default' }}>‹</button>
              <span style={{ fontSize: '2cqw', fontWeight: 500, minWidth: '14cqw', textAlign: 'center' }}>{a.month}</span>
              <button style={{ background: 'rgba(255,255,255,.05)', border: 'none', borderRadius: '50%', width: '3cqw', height: '3cqw', color: '#a1a1aa', fontSize: '1.6cqw', cursor: 'default' }}>›</button>
            </div>
            <span style={{ width: '2.8cqw', height: '2.8cqw', borderRadius: '50%', background: 'linear-gradient(145deg,#34c98a,#1f8f63)' }} />
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" style={{ width: '2.6cqw', height: '2.6cqw' }}>
              <circle cx="11" cy="11" r="3" stroke="#71717a" strokeWidth="1.5" />
              <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.5 4.5l2 2M15.5 15.5l2 2M17.5 4.5l-2 2M6.5 15.5l-2 2" stroke="#71717a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Weekday labels */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '1cqw', marginBottom: '1cqw' }}>
          {['MON','TUE','WED','THU','FRI','SAT','SUN'].map((d, i) => (
            <div key={d} style={{ textAlign: 'center', fontSize: '1.35cqw', letterSpacing: '.08em', fontWeight: 600, color: i > 4 ? '#9a5b5b' : '#52525b' }}>{d}</div>
          ))}
        </div>

        {/* Calendar grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '1cqw', flex: 1, alignContent: 'start' }}>
          {DAYS.map((day) => <Cell key={day.d} day={day} />)}
        </div>

        {/* Stats bar */}
        <div style={{ display: 'flex', gap: '1.4cqw', marginTop: '1.7cqw' }}>
          <Stat value="18"      label={a.days} />
          <Stat value="154"     label={a.hours} />
          <Stat value="€2,840"  label={a.earned} accent />
        </div>
        <div style={{ marginTop: '1cqw', background: 'rgba(255,255,255,.04)', borderRadius: '1cqw', padding: '1cqw 0', textAlign: 'center', fontSize: '1.45cqw', color: '#a1a1aa', fontFamily: MONO }}>
          €18.0 / {a.hours.toLowerCase()}
        </div>
      </div>
    </div>
  )
}

function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div style={{ flex: 1, background: 'rgba(255,255,255,.035)', borderRadius: '1.4cqw', padding: '1.5cqw 0', textAlign: 'center' }}>
      <div style={{ fontSize: '3cqw', fontWeight: 700, fontFamily: MONO, color: accent ? '#34c98a' : '#fafafa', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '1.25cqw', letterSpacing: '.14em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginTop: '0.7cqw' }}>{label}</div>
    </div>
  )
}
