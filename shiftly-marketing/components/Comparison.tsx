'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="7.5" fill="rgba(52,201,138,.12)" stroke="rgba(52,201,138,.4)" />
    <path d="M5 8l2 2 4-4" stroke="#34c98a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Cross = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="7.5" fill="rgba(63,63,70,.08)" stroke="rgba(63,63,70,.2)" />
    <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#71717a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

export default function Comparison() {
  const { t } = useLang()
  const ROWS = t.comparison.rows
  return (
    <section id="comparison" style={{ background: 'transparent', position: 'relative', padding: '60px 40px' }}>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="section-reveal" style={{ marginBottom: '64px' }}>
          <p style={{ color: '#71717a', fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 400, marginBottom: '16px' }}>{t.comparison.kicker}</p>
          <h2 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, fontSize: 'clamp(30px, 3.8vw, 50px)', lineHeight: 1.15, letterSpacing: '.01em', color: '#fafafa', maxWidth: '560px', margin: 0 }}>
            {t.comparison.titleA}<br />
            <span style={{ color: '#71717a' }}>{t.comparison.titleB}</span>
          </h2>
        </div>

        {/* Table */}
        <div className="section-reveal" style={{ overflow: 'hidden', border: '1px solid rgba(63,63,70,.2)' }}>
          {/* Column headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 3fr', background: '#0d0d0f', borderBottom: '1px solid rgba(63,63,70,.2)' }}>
            <div style={{ padding: '16px 24px', color: '#71717a', fontSize: '11px', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase' }}>{t.comparison.colFeature}</div>
            <div style={{ padding: '16px 24px', color: '#71717a', fontSize: '11px', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', borderLeft: '1px solid rgba(63,63,70,.2)' }}>{t.comparison.colBefore}</div>
            <div style={{ padding: '16px 24px', color: '#34c98a', fontSize: '11px', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', borderLeft: '1px solid rgba(63,63,70,.2)', background: 'rgba(52,201,138,.04)' }}>{t.comparison.colAfter}</div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [.16,1,.3,1] }}
              style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 3fr', borderBottom: i < ROWS.length - 1 ? '1px solid rgba(63,63,70,.14)' : 'none' }}
            >
              <div style={{ padding: '18px 24px', color: '#fafafa', fontSize: '14px', fontWeight: 400, display: 'flex', alignItems: 'center' }}>
                {row.label}
              </div>
              <div style={{ padding: '18px 24px', borderLeft: '1px solid rgba(63,63,70,.14)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Cross />
                <span style={{ color: '#71717a', fontSize: '13px', fontWeight: 300, lineHeight: 1.45 }}>{row.before}</span>
              </div>
              <div style={{ padding: '18px 24px', borderLeft: '1px solid rgba(63,63,70,.14)', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(52,201,138,.03)' }}>
                <Check />
                <span style={{ color: '#a1a1aa', fontSize: '13px', fontWeight: 300, lineHeight: 1.45 }}>{row.after}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
