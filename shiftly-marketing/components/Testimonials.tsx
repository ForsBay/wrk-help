'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'

/* Honest early-access voices. Marquee design preserved; content + styling
   aligned with the current zinc/emerald system (no fake ratings or counts). */

function initials(name: string) {
  return name.trim().split(/\s+/).map((p) => p[0]).join('').slice(0, 2).toUpperCase()
}

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div
      style={{
        flexShrink: 0, width: '340px', margin: '0 12px',
        background: 'linear-gradient(180deg, #15151a 0%, #111114 100%)',
        border: '1px solid #26262b', borderRadius: '18px', padding: '26px',
      }}
    >
      {/* quote mark */}
      <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-manrope)', fontSize: '34px', lineHeight: 0.6, marginBottom: '14px', fontWeight: 500 }}>“</div>

      <p style={{ color: '#d4d4d8', fontSize: '14.5px', lineHeight: 1.65, fontWeight: 300, margin: '0 0 22px' }}>
        {quote}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
          background: 'var(--accent-soft)', border: '1px solid var(--accent-line)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#bff0db', fontSize: '13px', fontWeight: 600,
        }}>
          {initials(name)}
        </div>
        <div>
          <div style={{ color: '#fafafa', fontWeight: 500, fontSize: '14px' }}>{name}</div>
          <div style={{ color: '#71717a', fontSize: '12.5px' }}>{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLang()
  const ts = t.testimonials
  const duplicated = [...ts.items, ...ts.items]

  return (
    <section style={{ background: 'transparent', position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px', marginBottom: '52px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: '999px', padding: '6px 14px', marginBottom: '20px', fontSize: '12px', color: '#bff0db', fontWeight: 600, letterSpacing: '.02em' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34c98a', boxShadow: '0 0 8px rgba(52,201,138,.9)' }} />
            {ts.badge}
          </div>
          <h2 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, fontSize: 'clamp(28px, 3.6vw, 46px)', lineHeight: 1.12, letterSpacing: '-.015em', color: '#fafafa', margin: '0 0 16px' }}>
            {ts.title}
          </h2>
          <p style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
            {ts.sub}
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(90deg, var(--bg), transparent)' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(270deg, var(--bg), transparent)' }} />

        <div className="scroll-track">
          {duplicated.map((it, i) => (
            <TestimonialCard key={`${it.name}-${i}`} quote={it.quote} name={it.name} role={it.role} />
          ))}
        </div>
      </div>

      <p style={{ textAlign: 'center', color: '#71717a', fontSize: '13px', fontWeight: 300, marginTop: '44px' }}>
        {ts.note}
      </p>
    </section>
  )
}
