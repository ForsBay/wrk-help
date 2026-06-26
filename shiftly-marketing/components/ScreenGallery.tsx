'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import Dashboard from './Dashboard'
import ScreenAnalytics from './ScreenAnalytics'
import DeviceFrame from './DeviceFrame'

/* User-driven product gallery. Replaces the old scroll-locked calendar→analytics
   crossfade: the visitor lands straight on the real app and flips between screens
   with arrows / dots / swipe. No autoplay — the user stays in control. */

const screenVariants = {
  enter: (d: number) => ({ opacity: 0, x: d >= 0 ? '5%' : '-5%' }),
  center: { opacity: 1, x: '0%' },
  exit:   (d: number) => ({ opacity: 0, x: d >= 0 ? '-5%' : '5%' }),
}

function Arrow({ side, onClick, label }: { side: 'left' | 'right'; onClick: () => void; label: string }) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={label}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      style={{
        position: 'absolute', top: '50%', [side]: 'clamp(6px, 1.2vw, 16px)',
        transform: 'translateY(-50%)', zIndex: 5,
        width: '44px', height: '44px', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(18,18,22,.6)', border: '1px solid rgba(255,255,255,.14)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        color: '#fafafa', cursor: 'pointer',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.12), 0 10px 26px -12px rgba(0,0,0,.8)',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: side === 'left' ? 'rotate(180deg)' : 'none' }}>
        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  )
}

export default function ScreenGallery() {
  const { t } = useLang()
  const a = t.hero.app
  const screens = [
    { kicker: a.thisMonth, title: t.hero.showcaseTitle,  node: <Dashboard /> },
    { kicker: a.earned,    title: t.hero.showcaseTitle2, node: <ScreenAnalytics /> },
  ]
  const n = screens.length
  const [[i, dir], setState] = useState<[number, number]>([0, 0])
  const paginate = (d: number) => setState(([c]) => [(c + d + n) % n, d])
  const jump = (idx: number) => setState(([c]) => [idx, idx >= c ? 1 : -1])
  const cur = screens[i]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* Caption — switches with the active screen */}
      <div style={{ position: 'relative', height: 'clamp(54px, 8vh, 84px)', width: '100%', maxWidth: '760px', textAlign: 'center', marginBottom: 'clamp(8px, 1.6vh, 18px)' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <p style={{ color: '#34c98a', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 10px' }}>{cur.kicker}</p>
            <h2 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 'clamp(22px, 3vw, 40px)', letterSpacing: '-.02em', color: '#fafafa', margin: 0, lineHeight: 1.1 }}>{cur.title}</h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Device + arrows + swipe */}
      <div style={{ position: 'relative', width: 'min(1080px, 92vw)' }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) paginate(1)
            else if (info.offset.x > 60) paginate(-1)
          }}
          style={{ touchAction: 'pan-y' }}
        >
          <DeviceFrame style={{ width: '100%', height: 'min(600px, 62vh)' }}>
            <AnimatePresence custom={dir} initial={false}>
              <motion.div
                key={i}
                custom={dir}
                variants={screenVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', inset: 0 }}
              >
                {cur.node}
              </motion.div>
            </AnimatePresence>
          </DeviceFrame>
        </motion.div>

        <Arrow side="left"  onClick={() => paginate(-1)} label="Previous screen" />
        <Arrow side="right" onClick={() => paginate(1)}  label="Next screen" />
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: '8px', marginTop: 'clamp(14px, 2.4vh, 24px)' }}>
        {screens.map((_, idx) => (
          <button
            key={idx}
            onClick={() => jump(idx)}
            aria-label={`Go to screen ${idx + 1}`}
            aria-current={idx === i}
            style={{
              width: idx === i ? '26px' : '8px', height: '8px', borderRadius: '4px',
              border: 'none', cursor: 'pointer', padding: 0,
              background: idx === i ? 'var(--accent)' : 'rgba(255,255,255,.22)',
              transition: 'width .3s, background .3s',
            }}
          />
        ))}
      </div>
    </div>
  )
}
