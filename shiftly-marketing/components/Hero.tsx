'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import { usePerfFlags } from '@/lib/perf-context'
import ScreenGallery from './ScreenGallery'

/* Laptop screen geometry — fractions of the desk-pro.png box (1536×1024). */
const SCREEN = { left: 30.5, top: 27.5, width: 37.0, height: 39.0 }
const SCREEN_CX = SCREEN.left + SCREEN.width / 2
const SCREEN_CY = SCREEN.top + SCREEN.height / 2

/* Deterministic particle field (no Math.random → no hydration mismatch). */
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left:     (i * 4.37 + 3) % 96,
  top:      32 + (i * 7.3) % 54,
  size:     2 + (i % 4),
  dur:      13 + (i % 7) * 2,
  delay:    (i * 1.7) % 13,
  opacity:  0.22 + (i % 5) * 0.06,
}))

/* Magnetic, performant button (motion values — no re-renders). */
function MagneticButton({ children, className, style, onClick }: { children: React.ReactNode; className: string; style?: React.CSSProperties; onClick?: () => void }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16 })
  const sy = useSpring(y, { stiffness: 220, damping: 16 })
  const ref = useRef<HTMLButtonElement>(null)
  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      style={{ x: sx, y: sy, ...style }}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3)
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.button>
  )
}

export default function Hero() {
  const { t } = useLang()
  const { isFull, isLite } = usePerfFlags()
  const sectionRef  = useRef<HTMLDivElement>(null)
  const sceneRef    = useRef<HTMLDivElement>(null)
  const textRef     = useRef<HTMLDivElement>(null)
  const overlayRef  = useRef<HTMLDivElement>(null)
  const glowRef     = useRef<HTMLDivElement>(null)
  const showcaseRef = useRef<HTMLDivElement>(null)

  /* Mouse parallax — single source, many derived layers (GPU transforms only). */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.4 })

  const tiltY  = useTransform(sx, [-0.5, 0.5], [5, -5])    // laptop 3D tilt
  const tiltX  = useTransform(sy, [-0.5, 0.5], [-4, 4])
  const glowX  = useTransform(sx, [-0.5, 0.5], [50, -50])  // glows drift most (far layer)
  const glowY  = useTransform(sy, [-0.5, 0.5], [38, -38])
  const partX  = useTransform(sx, [-0.5, 0.5], [26, -26])  // particles medium
  const partY  = useTransform(sy, [-0.5, 0.5], [18, -18])
  const headX  = useTransform(sx, [-0.5, 0.5], [-14, 14])  // headline subtle counter-move
  const headY  = useTransform(sy, [-0.5, 0.5], [-8, 8])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // LITE / reduced-motion: no GSAP pin/scrub. Show the "landed" product showcase
    // statically and fade the intro text away — keeps the gallery, drops the
    // single heaviest scroll-driven effect.
    if (isLite) {
      const sc = showcaseRef.current, tx = textRef.current
      if (sc) { sc.style.opacity = '1'; sc.style.visibility = 'visible' }
      if (tx) { tx.style.opacity = '0'; tx.style.pointerEvents = 'none' }
      return
    }

    let ctx: any
    let cancelled = false

    const init = async () => {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      if (cancelled) return

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current, start: 'top top', end: '+=155%',
            scrub: 1.1, pin: true, pinSpacing: true, pinType: 'transform',
            anticipatePin: 1, invalidateOnRefresh: true,
          },
        })
        // ── Act 1 — fly into the laptop (tightened ~25% so the page feels alive sooner) ──
        tl.to(textRef.current, { opacity: 0, y: -70, ease: 'power2.in', duration: 0.2 }, 0)
        tl.to(glowRef.current, { opacity: 1, ease: 'power1.in', duration: 0.38 }, 0)
        tl.to(sceneRef.current, { scale: 2.35, ease: 'power2.inOut', duration: 0.55 }, 0)
        tl.to(overlayRef.current, { opacity: 1, ease: 'power1.in', duration: 0.16 }, 0.5)
        // ── Act 2 — land straight on the real app; the gallery handles screen switching ──
        tl.fromTo(showcaseRef.current,
          { autoAlpha: 0, scale: 1.08, y: 30 },
          { autoAlpha: 1, scale: 1, y: 0, ease: 'power2.out', duration: 0.32 }, 0.56)
      }, sectionRef)

      requestAnimationFrame(() => ScrollTrigger.refresh())
    }
    init()
    return () => { cancelled = true; ctx?.revert() }
  }, [isLite])

  const onMove = (e: React.MouseEvent) => {
    if (!isFull) return // mouse parallax is full-tier only
    mx.set(e.clientX / window.innerWidth - 0.5)
    my.set(e.clientY / window.innerHeight - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  /* Smooth-scroll to a section (Install → Download, How it works → Features). */
  const go = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#08080a' }}
    >
      {/* ── Cinematic scene (photo) — bigger mockup, 3D tilt ── */}
      <div
        ref={sceneRef}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -49%)',
          width: 'max(116vw, 182vh)', aspectRatio: '1536 / 1024',
          transformOrigin: `${SCREEN_CX}% ${SCREEN_CY}%`,
          perspective: '1800px', willChange: 'transform',
        }}
      >
        <motion.div style={{ position: 'absolute', inset: 0, rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d', willChange: 'transform' }}>
          {/* LCP image. Modern formats via <picture> (AVIF 88KB / WebP 116KB vs
              1.9MB PNG) — host-agnostic, no image optimizer required. fetchPriority
              high so the browser starts it immediately. */}
          <picture>
            <source srcSet="/hero/desk-pro.avif" type="image/avif" />
            <source srcSet="/hero/desk-pro.webp" type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero/desk-pro.png"
              alt=""
              // @ts-expect-error fetchpriority is valid HTML, not yet in React types
              fetchpriority="high"
              decoding="async"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </picture>
          {/* Bloom from the lit screen as we approach */}
          <div ref={glowRef} style={{
            position: 'absolute', left: `${SCREEN.left - 4}%`, top: `${SCREEN.top - 4}%`,
            width: `${SCREEN.width + 8}%`, height: `${SCREEN.height + 8}%`,
            background: 'radial-gradient(ellipse at center, rgba(52,201,138,.20) 0%, transparent 70%)',
            filter: 'blur(40px)', opacity: 0, pointerEvents: 'none', mixBlendMode: 'screen',
          }} />
        </motion.div>
      </div>

      {/* ── Living atmosphere: drifting glows (parallax + blend) ── */}
      <motion.div className="hero-glow-layer" style={{ position: 'absolute', inset: 0, x: glowX, y: glowY, zIndex: 2, pointerEvents: 'none', mixBlendMode: 'screen' }}>
        <div style={{
          position: 'absolute', left: '50%', top: '34%', width: '46vw', height: '46vw',
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle, rgba(52,201,138,.16) 0%, transparent 62%)',
          filter: 'blur(50px)', animation: 'hero-glow-drift 11s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', left: '32%', top: '60%', width: '34vw', height: '34vw',
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle, rgba(80,200,255,.08) 0%, transparent 60%)',
          filter: 'blur(60px)', animation: 'hero-glow-drift-2 14s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', right: '8%', top: '24%', width: '26vw', height: '26vw',
          background: 'radial-gradient(circle, rgba(52,201,138,.10) 0%, transparent 65%)',
          filter: 'blur(55px)', animation: 'hero-glow-drift 16s ease-in-out infinite 2s',
        }} />
      </motion.div>

      {/* ── Slow light sweep across the scene ── */}
      <div className="hero-sweep-layer" style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-20%', left: 0, width: '22%', height: '140%',
          background: 'linear-gradient(90deg, transparent, rgba(190,255,228,.06), transparent)',
          filter: 'blur(10px)', animation: 'hero-sweep 9s ease-in-out infinite 1.5s', mixBlendMode: 'screen',
        }} />
      </div>

      {/* ── Soft particles ── */}
      <motion.div style={{ position: 'absolute', inset: 0, x: partX, y: partY, zIndex: 3, pointerEvents: 'none' }}>
        {PARTICLES.map((p, i) => (
          <span key={i} className="hero-particle" style={{
            left: `${p.left}%`, top: `${p.top}%`, width: `${p.size}px`, height: `${p.size}px`,
            // @ts-expect-error custom prop
            '--p-op': p.opacity, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`,
          }} />
        ))}
      </motion.div>

      {/* ── Cinematic scrims for text legibility (top + bottom) ── */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '34%', zIndex: 4, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(8,8,10,.82) 0%, rgba(8,8,10,.35) 45%, transparent 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', zIndex: 4, pointerEvents: 'none', background: 'linear-gradient(0deg, rgba(8,8,10,.96) 0%, rgba(8,8,10,.6) 40%, transparent 100%)' }} />

      {/* ── Text layer ── */}
      <div ref={textRef} style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-start', textAlign: 'center',
        zIndex: 5, pointerEvents: 'none',
      }}>
        {/* Top: badge + headline (subtle parallax) */}
        <motion.div style={{ x: headX, y: headY, pointerEvents: 'auto', maxWidth: '960px', padding: '0 24px', paddingTop: 'clamp(26px, 4.5vh, 70px)' }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '9px',
              background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
              borderRadius: '999px', padding: '8px 18px', marginBottom: '26px',
              fontSize: '13px', color: '#bff0db', fontWeight: 500, letterSpacing: '.01em',
              backdropFilter: 'blur(12px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.1)',
            }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34c98a', boxShadow: '0 0 8px rgba(52,201,138,.9)' }} />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-manrope)', fontWeight: 200,
              fontSize: 'clamp(34px, 4.6vw, 62px)', lineHeight: 1.02,
              letterSpacing: '-.025em', color: '#fff', margin: 0,
              textShadow: '0 2px 80px rgba(0,0,0,.9)',
            }}>
            {t.hero.titleA}<br />
            <span style={{ color: '#bff0db', fontWeight: 300 }}>{t.hero.titleB}</span>
          </motion.h1>
        </motion.div>

        {/* Bottom: sub + premium CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute', bottom: 'clamp(40px, 8vh, 100px)', left: '50%', transform: 'translateX(-50%)',
            width: '100%', maxWidth: '640px', padding: '0 24px', pointerEvents: 'auto',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '26px',
          }}>
          <p style={{
            color: '#e4e4e7', fontWeight: 300, fontSize: 'clamp(15px, 1.15vw, 18px)',
            lineHeight: 1.6, margin: 0, textAlign: 'center', letterSpacing: '.005em',
            textShadow: '0 1px 30px rgba(0,0,0,.9)',
          }}>
            {t.hero.sub}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagneticButton className="cta-primary" style={{ padding: '16px 34px', fontSize: '16px' }} onClick={() => go('#cta')}>
              {t.hero.cta}
            </MagneticButton>
            <MagneticButton className="cta-ghost" style={{ padding: '15px 28px', fontSize: '15px' }} onClick={() => go('#features')}>
              {t.hero.secondary} ↓
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* ── Solid backdrop hides the pixelated zoom frame ── */}
      <div ref={overlayRef} style={{ position: 'absolute', inset: 0, background: '#0b0b0d', opacity: 0, pointerEvents: 'none', zIndex: 8 }} />

      {/* ── Device showcase we land on — interactive gallery (no scroll-locked states) ── */}
      <div ref={showcaseRef} style={{
        position: 'absolute', inset: 0, zIndex: 9, opacity: 0, visibility: 'hidden',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(16px, 3vh, 44px) 24px', pointerEvents: 'auto',
        background: 'radial-gradient(125% 80% at 50% 8%, #14171a 0%, #0a0a0c 58%)',
      }}>
        <ScreenGallery />
      </div>
    </div>
  )
}
