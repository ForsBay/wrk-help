'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/* Slim scroll-progress bar pinned to the very top. Spring-smoothed so it
   eases rather than snapping with the scrollbar. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '2px',
        transformOrigin: '0% 50%', scaleX, zIndex: 2000,
        background: 'linear-gradient(90deg, #34c98a, #7fe0b3)',
        boxShadow: '0 0 12px rgba(52,201,138,.6)',
      }}
    />
  )
}
