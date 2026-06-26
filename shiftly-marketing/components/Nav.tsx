'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang, LANGS } from '@/lib/i18n'
import Magnetic from '@/components/Magnetic'

function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', background: 'rgba(255,255,255,.04)', border: '1px solid var(--border-2)', borderRadius: '40px', padding: '3px' }}>
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          style={{
            border: 'none', cursor: 'pointer',
            background: lang === code ? 'var(--accent)' : 'transparent',
            color: lang === code ? 'var(--on-accent)' : '#a1a1aa',
            fontFamily: 'var(--font-manrope)', fontSize: '12px', fontWeight: 600,
            letterSpacing: '.02em', padding: '5px 10px', borderRadius: '40px',
            transition: 'background .18s, color .18s',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default function Nav() {
  const { t } = useLang()
  const NAV_LINKS = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.compare,  href: '#comparison' },
    { label: t.nav.download, href: '#cta' },
  ]
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: 'background .3s, border-color .3s, backdrop-filter .3s',
        background: scrolled ? 'rgba(12,12,14,.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(63,63,70,.18)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          whileHover={{ scale: 1.02 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" alt="Shiftly" width={28} height={28} style={{ borderRadius: '8px' }} />
          <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: '17px', color: '#fafafa', letterSpacing: '-.01em' }}>
            Shiftly
          </span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); go(link.href) }}
              style={{
                fontFamily: 'var(--font-manrope)',
                fontWeight: 400,
                fontSize: '14px',
                color: '#fafafa',
                textDecoration: 'none',
                transition: 'color .15s',
                opacity: .8,
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = '1' }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = '.8' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + language */}
        <div className="hidden md:flex items-center gap-3">
          <LangSwitch />
          <Magnetic onClick={() => go('#cta')} className="cta-ghost" style={{ padding: '9px 20px', fontSize: '14px' }} strength={0.25}>
            {t.nav.getApp}
          </Magnetic>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                i === 0 ? { rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 10 : 0 } :
                i === 1 ? { opacity: mobileOpen ? 0 : 1 } :
                { rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -10 : 0 }
              }
              style={{ display: 'block', width: '20px', height: '1.5px', background: '#fafafa', borderRadius: '2px', transformOrigin: 'center' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', background: 'rgba(12,12,14,.95)', backdropFilter: 'blur(24px)', borderTop: '1px solid rgba(63,63,70,.18)' }}
          >
            <div style={{ padding: '20px 24px 28px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); go(link.href) }}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    display: 'block',
                    padding: '14px 0',
                    fontFamily: 'var(--font-manrope)',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#a1a1aa',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(63,63,70,.15)',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'center' }}>
                <LangSwitch />
              </div>
              <motion.button
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                onClick={() => go('#cta')}
                className="btn-primary"
                style={{ width: '100%', marginTop: '14px', justifyContent: 'center' }}
              >
                {t.nav.downloadFree}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
