'use client'

import { useLang } from '@/lib/i18n'

const MONO = "ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, monospace"
const BARS = [8, 8.5, 9, 6, 8.5, 0, 0, 8, 8.5, 8, 7, 8.5, 0, 0, 9, 8.5, 8.5, 9, 8]

function Sparkline() {
  const pts = [12, 17, 15, 23, 21, 29, 27, 36, 33, 42]
  const w = 100, h = 26, max = Math.max(...pts), min = Math.min(...pts)
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${(i / (pts.length - 1)) * w} ${h - ((p - min) / (max - min)) * h}`).join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: '100%', height: '3.4cqw', display: 'block' }}>
      <path d={`${d} L${w} ${h} L0 ${h} Z`} fill="rgba(52,201,138,.13)" />
      <path d={d} fill="none" stroke="#34c98a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

function Donut() {
  const r = 16, c = 2 * Math.PI * r, ot = 0.077
  return (
    <svg viewBox="0 0 44 44" style={{ width: '13cqw', height: '13cqw' }}>
      <circle cx="22" cy="22" r={r} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="5" />
      <circle cx="22" cy="22" r={r} fill="none" stroke="#34c98a" strokeWidth="5" strokeLinecap="round" strokeDasharray={`${c * (1 - ot)} ${c}`} transform="rotate(-90 22 22)" />
      <circle cx="22" cy="22" r={r} fill="none" stroke="#f5b94a" strokeWidth="5" strokeLinecap="round" strokeDasharray={`${c * ot} ${c}`} strokeDashoffset={`${-c * (1 - ot)}`} transform="rotate(-90 22 22)" />
    </svg>
  )
}

export default function ScreenAnalytics() {
  const { t } = useLang()
  const a = t.hero.app
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#0e0e11', color: '#fafafa', fontFamily: 'var(--font-manrope)', overflow: 'hidden' }}>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.15fr 1fr', minHeight: 0 }}>
        {/* Left — earnings + bars */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '3cqw 3.2cqw', borderRight: '0.12cqw solid #1d1d21', gap: '2.6cqw' }}>
          <div>
            <div style={{ fontSize: '1.5cqw', color: '#71717a', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}>{a.earned}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.4cqw', marginTop: '0.6cqw' }}>
              <span style={{ fontSize: '7cqw', fontWeight: 700, fontFamily: MONO, letterSpacing: '-.02em', lineHeight: 1 }}>€2,840</span>
              <span style={{ fontSize: '2cqw', color: '#34c98a', fontWeight: 700, fontFamily: MONO }}>+18%</span>
            </div>
            <div style={{ marginTop: '1.4cqw' }}><Sparkline /></div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
            <div style={{ fontSize: '1.5cqw', color: '#71717a', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: '1.6cqw' }}>{a.hours}</div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '1.2cqw', minHeight: '14cqw' }}>
              {BARS.map((v, i) => (
                <div key={i} style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ width: '100%', height: `${Math.max((v / 10) * 100, 4)}%`, borderRadius: '0.7cqw 0.7cqw 0 0', background: v ? 'linear-gradient(180deg,#3ddd99,#2a9e6c)' : 'rgba(255,255,255,.05)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right — donut + breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '3cqw 3.2cqw', gap: '2.6cqw', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.6cqw' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Donut />
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '3.4cqw', fontWeight: 700, fontFamily: MONO, lineHeight: 1 }}>156</div>
                <div style={{ fontSize: '1.4cqw', color: '#71717a' }}>{a.hours.toLowerCase()}</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8cqw', flex: 1 }}>
              <Legend c="#34c98a" k={a.hours} v="144h" />
              <Legend c="#f5b94a" k={a.overtime} v="12h" />
              <Legend c="#52525b" k={a.rate} v="€18/h" mono />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.6cqw' }}>
            {[[a.days, '18'], [a.hours, '156h']].map(([k, v]) => (
              <div key={k} style={{ flex: 1, background: 'rgba(255,255,255,.04)', borderRadius: '1.4cqw', padding: '2cqw 0', textAlign: 'center' }}>
                <div style={{ fontSize: '3cqw', fontWeight: 700, fontFamily: MONO }}>{v}</div>
                <div style={{ fontSize: '1.25cqw', letterSpacing: '.12em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginTop: '0.6cqw' }}>{k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Legend({ c, k, v, mono }: { c: string; k: string; v: string; mono?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2cqw' }}>
      <span style={{ width: '1.4cqw', height: '1.4cqw', borderRadius: '0.4cqw', background: c, flexShrink: 0 }} />
      <span style={{ fontSize: '1.7cqw', color: '#a1a1aa' }}>{k}</span>
      <span style={{ marginLeft: 'auto', fontSize: '1.8cqw', fontWeight: 700, fontFamily: mono ? MONO : 'inherit', color: '#fafafa' }}>{v}</span>
    </div>
  )
}
