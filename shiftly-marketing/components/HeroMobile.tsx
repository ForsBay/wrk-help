'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import ScreenGallery from './ScreenGallery'

/* ─────────────────────────────────────────────────────────────────────────────
   Mobile-first Hero. NOT the desktop cinematic shrunk down.

   • Opens instantly — no GSAP, no ScrollTrigger, no pin, no scrub, no Lenis.
   • Plain document flow + native scroll.
   • Only light fade/rise reveals (which Framer Motion renders as opacity-only on
     touch devices via the app-wide MotionConfig, so no transform cost).
   • The swipeable ScreenGallery is the product showcase — finger-native.
   This is rendered by <Hero> after mount when the device is detected as touch,
   so SSR/hydration use the desktop markup and there is no mismatch (the swap is
   hidden behind the brand splash). ───────────────────────────────────────────── */

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function HeroMobile() {
  const { t } = useLang()

  const go = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      style={{
        position: 'relative',
        background: 'radial-gradient(120% 70% at 50% 0%, #14171a 0%, #0a0a0c 60%)',
        paddingTop: 'calc(env(safe-area-inset-top, 0px) + 92px)',
        paddingBottom: '40px',
        paddingLeft: 'max(20px, env(safe-area-inset-left))',
        paddingRight: 'max(20px, env(safe-area-inset-right))',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* badge — solid tint, no backdrop-filter (cheap on mobile) */}
      <motion.div
        custom={0} variants={fade} initial="hidden" animate="show"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(52,201,138,.1)', border: '1px solid rgba(52,201,138,.28)',
          borderRadius: '999px', padding: '7px 14px', marginBottom: '20px',
          fontSize: '12.5px', color: '#bff0db', fontWeight: 500, maxWidth: '100%',
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34c98a', flexShrink: 0 }} />
        <span style={{ lineHeight: 1.3 }}>{t.hero.badge}</span>
      </motion.div>

      {/* headline */}
      <motion.h1
        custom={1} variants={fade} initial="hidden" animate="show"
        style={{
          fontFamily: 'var(--font-manrope)', fontWeight: 300,
          fontSize: 'clamp(30px, 8.5vw, 44px)', lineHeight: 1.06,
          letterSpacing: '-.02em', color: '#fff', margin: 0,
        }}
      >
        {t.hero.titleA}<br />
        <span style={{ color: '#bff0db', fontWeight: 400 }}>{t.hero.titleB}</span>
      </motion.h1>

      {/* sub */}
      <motion.p
        custom={2} variants={fade} initial="hidden" animate="show"
        style={{
          color: '#c4c4cc', fontWeight: 300, fontSize: 'clamp(14.5px, 4vw, 17px)',
          lineHeight: 1.55, margin: '16px 0 0', maxWidth: '36ch',
        }}
      >
        {t.hero.sub}
      </motion.p>

      {/* CTAs — full-width, thumb-friendly */}
      <motion.div
        custom={3} variants={fade} initial="hidden" animate="show"
        style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '340px', margin: '26px 0 0' }}
      >
        <button className="cta-primary" style={{ width: '100%', padding: '16px', fontSize: '16px' }} onClick={() => go('#cta')}>
          {t.hero.cta}
        </button>
        <button className="cta-ghost" style={{ width: '100%', padding: '15px', fontSize: '15px' }} onClick={() => go('#features')}>
          {t.hero.secondary} ↓
        </button>
      </motion.div>

      {/* product showcase — swipeable, finger-native */}
      <motion.div
        custom={4} variants={fade} initial="hidden" animate="show"
        style={{ width: '100%', marginTop: '40px' }}
      >
        <ScreenGallery />
      </motion.div>
    </section>
  )
}
