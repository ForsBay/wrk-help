'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

/* A section rendered as a bound calendar leaf. As you scroll it into view the
   page swings down on its top binding (rotateX → 0), like turning a desk-calendar
   page; scrolling back up flips it part-way open again (scroll-linked). */
export default function CalendarSheet({ children, tab }: { children: ReactNode; tab?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const rotateX = useTransform(scrollYProgress, [0, 1], [58, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1])
  const shadow  = useTransform(scrollYProgress, [0, 1], [0.6, 0])

  const RINGS = Array.from({ length: 26 })

  return (
    <div ref={ref} style={{ perspective: '2200px', padding: '56px 16px 8px' }}>
      <motion.div
        style={{
          rotateX, opacity,
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          maxWidth: '1180px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Spiral binding */}
        <div style={{
          position: 'absolute', top: '-22px', left: 0, right: 0,
          display: 'flex', justifyContent: 'center', gap: '22px',
          zIndex: 3, pointerEvents: 'none',
        }}>
          {RINGS.map((_, i) => (
            <span key={i} style={{
              width: '10px', height: '30px', borderRadius: '5px',
              background: 'linear-gradient(180deg,#d4d4d8 0%,#9a9aa0 40%,#52525b 100%)',
              boxShadow: '0 2px 3px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.4)',
            }} />
          ))}
        </div>

        {/* Punch-hole strip behind the rings */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '14px',
          display: 'flex', justifyContent: 'center', gap: '22px', zIndex: 1, pointerEvents: 'none',
        }}>
          {RINGS.map((_, i) => (
            <span key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#050506', boxShadow: 'inset 0 1px 2px rgba(0,0,0,.9)' }} />
          ))}
        </div>

        {/* The page */}
        <motion.div style={{
          position: 'relative',
          background: '#121214',
          border: '1px solid #26262b',
          borderRadius: '20px',
          overflow: 'hidden',
          paddingTop: '12px',
          boxShadow: useTransform(shadow, (s) => `0 ${30 * (s as number) + 18}px ${60 * (s as number) + 40}px -30px rgba(0,0,0,${0.4 + 0.4 * (s as number)})`),
        }}>
          {tab && (
            <span style={{
              position: 'absolute', top: '18px', right: '24px', zIndex: 2,
              fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase',
              color: '#34c98a', fontWeight: 600,
            }}>{tab}</span>
          )}
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}
