'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'

/* Magnetic button — pulls gently toward the cursor and springs back.
   Uses motion values only (no re-renders). Pair with .cta-primary/.cta-ghost
   (or any class) for the hover-glow visuals. */
export default function Magnetic({
  children, className, style, onClick, strength = 0.3,
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  strength?: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 })
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
        x.set((e.clientX - (r.left + r.width / 2)) * strength)
        y.set((e.clientY - (r.top + r.height / 2)) * strength)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.button>
  )
}
