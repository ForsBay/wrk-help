'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import SpotlightCard from '@/components/SpotlightCard'

const STAT_NUMS = [
  { value: 6,   suffix: '',   prefix: '' },
  { value: 3,   suffix: '×',  prefix: '' },
  { value: 0,   suffix: '',   prefix: '€' },
  { value: 30,  suffix: 's',  prefix: '' },
]

function CountUp({ to, decimal, prefix = '', suffix = '' }: { to: number; decimal?: boolean; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref           = useRef<HTMLSpanElement>(null)
  const inView        = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const dur   = 1400
    const raf   = () => {
      const t = Math.min((Date.now() - start) / dur, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setVal(ease * to)
      if (t < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [inView, to])

  const display = decimal ? val.toFixed(1) : Math.round(val).toLocaleString()

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}

export default function Stats() {
  const { t } = useLang()
  const stats = STAT_NUMS.map((n, i) => ({ ...n, ...t.stats.items[i] }))
  return (
    <section style={{ background: 'radial-gradient(120% 90% at 50% 0%, #20203012 0%, transparent 55%), #1a1a1e', position: 'relative', padding: '112px 24px' }}>
      {/* Orbs */}
      <div className="orb" style={{ left: '-10%', top: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(ellipse, rgba(52,201,138,.10) 0%, transparent 65%)' }} />
      <div className="orb" style={{ right: '-8%', bottom: '-5%', width: '34vw', height: '34vw', background: 'radial-gradient(ellipse, rgba(52,201,138,.07) 0%, transparent 65%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="section-reveal" style={{ marginBottom: '72px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <p style={{ color: '#71717a', fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 400 }}>{t.stats.kicker}</p>
          <h2 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, fontSize: 'clamp(28px, 3.6vw, 48px)', color: '#fafafa', margin: 0, lineHeight: 1.15, letterSpacing: '.01em' }}>
            {t.stats.title}
          </h2>
        </div>

        <div className="section-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(63,63,70,.18)', perspective: '1400px' }}>
          {stats.map((s, i) => (
            <SpotlightCard
              key={s.label}
              index={i}
              style={{ background: '#1a1a1e', padding: '40px 36px' }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: '36px', right: '36px', height: '2px', background: 'rgba(52,201,138,.35)', borderRadius: '0 0 2px 2px' }} />

              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, fontSize: 'clamp(44px, 5vw, 64px)', color: '#fafafa', lineHeight: 1, letterSpacing: '-.01em', marginBottom: '10px' }}>
                <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div style={{ color: '#fafafa', fontWeight: 500, fontSize: '15px', marginBottom: '6px' }}>{s.label}</div>
              <div style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '13px', lineHeight: 1.5 }}>{s.description}</div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
