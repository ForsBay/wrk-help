'use client'

import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'
import { useRef, ReactNode } from 'react'

/* Card with: scroll reveal (staggered), gentle 3D tilt toward the cursor, and a
   soft emerald spotlight that tracks the mouse. All spring-smoothed. */
export default function SpotlightCard({
  children, style, index = 0,
}: {
  children: ReactNode
  style?: React.CSSProperties
  index?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(50)
  const py = useMotionValue(50)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const op = useMotionValue(0)

  const srx = useSpring(rx, { stiffness: 150, damping: 18, mass: 0.4 })
  const sry = useSpring(ry, { stiffness: 150, damping: 18, mass: 0.4 })
  const sop = useSpring(op, { stiffness: 120, damping: 20 })
  const glow = useMotionTemplate`radial-gradient(circle at ${px}% ${py}%, rgba(52,201,138,.16), transparent 55%)`

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    px.set(x * 100); py.set(y * 100)
    ry.set((x - 0.5) * 7); rx.set((0.5 - y) * 7)
    op.set(1)
  }
  const onLeave = () => { rx.set(0); ry.set(0); op.set(0) }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      // overflow:hidden clips the spotlight glow to the card's rounded corners so
      // the emerald gradient never bleeds past the border (fixes the edge artifact
      // visible on e.g. the "Web" card). The card's own box-shadow is unaffected.
      style={{ position: 'relative', overflow: 'hidden', rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d', willChange: 'transform', ...style }}
    >
      {children}
      <motion.div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: glow, opacity: sop, pointerEvents: 'none' }} />
    </motion.div>
  )
}
