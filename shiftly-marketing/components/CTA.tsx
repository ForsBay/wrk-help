'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import SpotlightCard from '@/components/SpotlightCard'

/* ── Platform glyphs ─────────────────────────────────────────────── */
const WindowsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="#4aa3ff">
    <rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" />
  </svg>
)
const AndroidIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M6 18v-6a6 6 0 0 1 12 0v6z" fill="#3ddc84" />
    <path d="M7.5 8 6 5.6M16.5 8 18 5.6" stroke="#3ddc84" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9.5" cy="12" r="1" fill="#0c0c0e" /><circle cx="14.5" cy="12" r="1" fill="#0c0c0e" />
  </svg>
)
const AppleIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="#e8e8ee">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.47 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)
const WebIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#34c98a" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" />
  </svg>
)

export default function CTA() {
  const { t } = useLang()
  const c = t.cta
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (email) setSent(true) }

  const PLATFORMS = [
    { name: 'Windows', meta: 'Windows 10 / 11 · 24 MB',  icon: <WindowsIcon />, status: c.available, dot: '#34c98a', cta: c.get,     primary: true },
    { name: 'Android', meta: 'Google Play · 5.0+',        icon: <AndroidIcon />, status: c.beta,      dot: '#f5b94a', cta: c.get,     primary: true },
    { name: 'iPhone',  meta: 'App Store · iOS 16+',        icon: <AppleIcon />,   status: c.available, dot: '#34c98a', cta: c.get,     primary: true },
    { name: 'Web',     meta: 'PWA · any browser',          icon: <WebIcon />,     status: c.instant,   dot: '#34c98a', cta: c.openApp, primary: false },
  ]

  return (
    <section id="cta" style={{ background: 'transparent', position: 'relative', padding: '72px 40px', overflow: 'hidden' }}>
      {/* soft section bloom */}
      <div className="orb" style={{ top: '-6%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '36vw', background: 'radial-gradient(ellipse, rgba(52,201,138,.10) 0%, transparent 65%)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{ color: '#34c98a', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 14px' }}>{c.kicker}</p>
          <h2 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-.02em', color: '#fafafa', margin: '0 0 16px' }}>
            {c.dlTitle}
          </h2>
          <p style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '16px', lineHeight: 1.6, margin: 0 }}>{c.dlSub}</p>
        </div>

        {/* Platform cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', perspective: '1400px' }}>
          {PLATFORMS.map((p, i) => (
            <SpotlightCard
              key={p.name}
              index={i}
              style={{
                background: 'linear-gradient(180deg, #15151a 0%, #111114 100%)',
                border: '1px solid #26262b', borderRadius: '20px', padding: '26px',
                display: 'flex', flexDirection: 'column', gap: '18px', minHeight: '240px',
              }}
            >
              {/* status */}
              <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#a1a1aa', fontWeight: 500, letterSpacing: '.04em' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.dot, boxShadow: `0 0 8px ${p.dot}` }} />
                {p.status}
              </div>

              {/* icon */}
              <div style={{ width: '54px', height: '54px', borderRadius: '15px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.08)' }}>
                {p.icon}
              </div>

              {/* name + meta */}
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: '21px', color: '#fafafa', letterSpacing: '-.01em' }}>{p.name}</div>
                <div style={{ color: '#71717a', fontSize: '13px', marginTop: '5px', fontWeight: 400 }}>{p.meta}</div>
              </div>

              {/* download button */}
              <button className="dl-btn">
                {p.cta}
                {p.primary ? (
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 2.5v8m0 0 3-3m-3 3-3-3M3 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 8h8m0 0-3-3m3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                )}
              </button>
            </SpotlightCard>
          ))}
        </div>

        {/* Notify row */}
        <div style={{ marginTop: '44px', textAlign: 'center' }}>
          <p style={{ color: '#71717a', fontSize: '13px', marginBottom: '16px', fontWeight: 300 }}>{c.otherNote}</p>
          {sent ? (
            <motion.p initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ color: '#34c98a', fontWeight: 500, fontSize: '15px' }}>
              ✓ {c.success}
            </motion.p>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', maxWidth: '400px', margin: '0 auto', gap: 0 }}>
              <input
                type="email" placeholder={c.placeholder} value={email} onChange={(e) => setEmail(e.target.value)}
                style={{ flex: 1, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(63,63,70,.4)', borderRight: 'none', borderRadius: '12px 0 0 12px', padding: '12px 18px', color: '#fafafa', fontSize: '14px', outline: 'none', fontFamily: 'var(--font-manrope)' }}
              />
              <button type="submit" className="cta-primary" style={{ borderRadius: '0 12px 12px 0', padding: '12px 22px', fontSize: '14px', whiteSpace: 'nowrap' }}>
                {c.notify}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
