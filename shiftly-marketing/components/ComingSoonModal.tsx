'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/lib/i18n'

/* Shared "Coming soon" dialog for platforms that aren't downloadable yet.
   Matches the site language: zinc surface, emerald accent, Manrope, glass edge. */
export default function ComingSoonModal({
  open,
  platform,
  onClose,
}: {
  open: boolean
  platform: string | null
  onClose: () => void
}) {
  const { t } = useLang()
  const m = t.modal
  const c = t.cta
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  // Reset state each time a new platform opens; lock body scroll while open.
  useEffect(() => {
    if (open) {
      setEmail('')
      setSent(false)
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [open, platform])

  // Close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const submit = (e: React.FormEvent) => { e.preventDefault(); if (email) setSent(true) }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          role="dialog" aria-modal="true" aria-label={m.title}
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
            background: 'rgba(6,6,8,.72)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative', width: '100%', maxWidth: '420px',
              background: 'linear-gradient(180deg, #16161b 0%, #111114 100%)',
              border: '1px solid #26262b', borderRadius: '22px',
              padding: '30px 28px',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,.06), 0 30px 70px -20px rgba(0,0,0,.85)',
            }}
          >
            {/* soft accent bloom */}
            <div className="orb" style={{ top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '90%', height: '60%', background: 'radial-gradient(ellipse, rgba(52,201,138,.16) 0%, transparent 70%)' }} />

            {/* close icon */}
            <button
              onClick={onClose}
              aria-label={m.close}
              style={{
                position: 'absolute', top: '16px', right: '16px', width: '32px', height: '32px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)',
                borderRadius: '10px', color: '#a1a1aa',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </button>

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: '999px', padding: '6px 14px', marginBottom: '18px', fontSize: '12px', color: '#bff0db', fontWeight: 600, letterSpacing: '.02em' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f5b94a', boxShadow: '0 0 8px rgba(245,185,74,.9)' }} />
                {platform}
              </div>

              <h3 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: '26px', color: '#fafafa', margin: '0 0 12px', letterSpacing: '-.01em' }}>
                {m.title}
              </h3>
              <p style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '14.5px', lineHeight: 1.6, margin: '0 0 24px' }}>
                {m.desc}
              </p>

              {sent ? (
                <motion.p
                  initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ color: '#34c98a', fontWeight: 500, fontSize: '15px', margin: '6px 0 4px' }}
                >
                  ✓ {c.success}
                </motion.p>
              ) : (
                <form onSubmit={submit}>
                  <input
                    type="email" required placeholder={c.placeholder} value={email}
                    onChange={(e) => setEmail(e.target.value)} aria-label={c.placeholder}
                    style={{ width: '100%', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(63,63,70,.5)', borderRadius: '12px', padding: '12px 16px', color: '#fafafa', fontSize: '14px', outline: 'none', fontFamily: 'var(--font-manrope)', marginBottom: '14px' }}
                  />
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="button" onClick={onClose} className="cta-ghost" style={{ flex: 1, padding: '12px 0', fontSize: '14px', justifyContent: 'center' }}>
                      {m.close}
                    </button>
                    <button type="submit" className="cta-primary" style={{ flex: 1, padding: '12px 0', fontSize: '14px' }}>
                      {c.notify}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
