'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

/* A quick, smooth brand reveal on first load — masks the initial layout/font
   settle, then lifts away. Pointer-events off so it never blocks interaction. */
export default function PageIntro() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 850)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 3000, background: '#08080a',
            display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.png" alt="" width={32} height={32} style={{ borderRadius: '8px' }} />
            <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: '22px', color: '#fafafa', letterSpacing: '-.01em' }}>Shiftly</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
