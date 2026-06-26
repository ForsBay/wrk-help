'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'

const ICONS = [
  (<svg key="0" width="20" height="20" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9" stroke="#34c98a" strokeWidth="1.5" />
    <path d="M11 6.5v4.8l3 3" stroke="#34c98a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>),
  (<svg key="1" width="20" height="20" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="4" width="18" height="14" rx="2" stroke="#34c98a" strokeWidth="1.5" />
    <path d="M7 12l2.5 2.5L15 9" stroke="#34c98a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>),
  (<svg key="2" width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M4 17l4-4 3 3 7-8" stroke="#34c98a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="6" r="2.5" fill="rgba(52,201,138,.2)" stroke="#34c98a" strokeWidth="1.3" />
  </svg>),
  (<svg key="3" width="20" height="20" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="4" width="18" height="15" rx="2" stroke="#34c98a" strokeWidth="1.5" />
    <path d="M7 2v4M15 2v4M2 9h18" stroke="#34c98a" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7" cy="13" r="1.2" fill="#34c98a" /><circle cx="11" cy="13" r="1.2" fill="#34c98a" /><circle cx="15" cy="13" r="1.2" fill="#34c98a" />
  </svg>),
  (<svg key="4" width="20" height="20" viewBox="0 0 22 22" fill="none">
    <ellipse cx="11" cy="11" rx="9" ry="5.5" stroke="#34c98a" strokeWidth="1.5" />
    <path d="M2 11c0 3 4 5.5 9 5.5s9-2.5 9-5.5" stroke="#34c98a" strokeWidth="1.5" />
    <path d="M11 5.5v11" stroke="#34c98a" strokeWidth="1.5" strokeLinecap="round" />
  </svg>),
  (<svg key="5" width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M4 17l14 0M4 12h14M4 7h14" stroke="#34c98a" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="11" cy="7" r="2.5" fill="rgba(52,201,138,.15)" stroke="#34c98a" strokeWidth="1.3" />
  </svg>),
]

function Cell({ i, label, headline, body, icon }: { i: number; label: string; headline: string; body: string; icon: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [.16,1,.3,1] }}
      className="feature-cell"
    >
      {/* meta row: index · icon · label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, fontSize: '13px', color: '#34c98a', letterSpacing: '.04em' }}>
          {String(i + 1).padStart(2, '0')}
        </span>
        <span style={{ opacity: .9, display: 'inline-flex' }}>{icon}</span>
        <span style={{ color: '#71717a', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase' }}>{label}</span>
      </div>

      <h3 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 'clamp(19px, 1.7vw, 23px)', color: '#fafafa', margin: 0, lineHeight: 1.2, letterSpacing: '-.01em' }}>
        {headline}
      </h3>

      <p style={{ color: '#a1a1aa', fontSize: '14.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
        {body}
      </p>
    </motion.div>
  )
}

export default function Features() {
  const { t } = useLang()
  const items = t.features.items.map((it, i) => ({ ...it, icon: ICONS[i] }))

  return (
    <section id="features" style={{ background: 'transparent', position: 'relative', padding: '64px 40px' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header — asymmetric, left aligned */}
        <div className="section-reveal" style={{ marginBottom: '24px', maxWidth: '640px' }}>
          <p style={{ color: '#71717a', fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '18px' }}>
            {t.features.kicker}
          </p>
          <h2 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 'clamp(30px, 3.6vw, 46px)', lineHeight: 1.12, letterSpacing: '-.015em', color: '#fafafa', margin: 0 }}>
            {t.features.titleA}{' '}
            <span style={{ color: '#52525b' }}>{t.features.titleB}</span>
          </h2>
        </div>

        {/* Dense 2-column grid — hairline dividers (same language as Stats) */}
        <div className="feature-grid">
          {items.map((f, i) => (
            <Cell key={f.label} i={i} label={f.label} headline={f.headline} body={f.body} icon={f.icon} />
          ))}
        </div>
      </div>

      <style>{`
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
        }
        .feature-cell {
          background: #121214;
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: background .25s;
        }
        .feature-cell:hover { background: linear-gradient(120deg, rgba(52,201,138,.05), #121214 60%); }
        @media (max-width: 760px) {
          .feature-grid { grid-template-columns: 1fr; }
          .feature-cell { padding: 24px 22px; }
        }
      `}</style>
    </section>
  )
}
