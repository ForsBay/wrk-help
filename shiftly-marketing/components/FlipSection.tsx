'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/* Reveals a block by flipping it down from its top edge — like turning a
   calendar page. Subtle 3D rotateX with perspective. */
export default function FlipSection({ children }: { children: ReactNode }) {
  return (
    <div style={{ perspective: '1600px' }}>
      <motion.div
        initial={{ rotateX: 34, opacity: 0, y: 40 }}
        whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
