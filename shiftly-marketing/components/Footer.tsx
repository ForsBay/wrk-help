'use client'

import { useLang } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLang()
  const L = t.footer.links
  const LINKS = {
    [t.footer.groups.Product]: [
      { label: L.features, href: '#features' },
      { label: L.compare,  href: '#comparison' },
      { label: L.download, href: '#cta' },
      { label: L.webApp,   href: '#' },
    ],
    [t.footer.groups.Company]: [
      { label: L.about,    href: '#' },
      { label: L.blog,     href: '#' },
      { label: L.contact,  href: '#' },
    ],
    [t.footer.groups.Legal]: [
      { label: L.privacy,  href: '#' },
      { label: L.terms,    href: '#' },
    ],
  }

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#08080a', borderTop: '1px solid rgba(63,63,70,.16)', padding: '72px 24px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', marginBottom: '56px', alignItems: 'start', flexWrap: 'wrap' }}>

          {/* Brand */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.png" alt="Shiftly" width={28} height={28} style={{ borderRadius: '7px' }} />
              <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: '16px', color: '#fafafa', letterSpacing: '-.01em' }}>Shiftly</span>
            </div>
            <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.65, fontWeight: 300, margin: 0 }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap' }}>
            {Object.entries(LINKS).map(([group, links]) => (
              <div key={group}>
                <p style={{ color: '#fafafa', fontSize: '12px', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '16px' }}>{group}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => go(e, link.href)}
                        style={{ color: '#71717a', fontSize: '14px', fontWeight: 300, textDecoration: 'none', transition: 'color .15s' }}
                        onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#a1a1aa' }}
                        onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#71717a' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="mercury-divider" />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '28px' }}>
          <p style={{ color: '#71717a', fontSize: '13px', fontWeight: 300, margin: 0 }}>
            © {new Date().getFullYear()} Shiftly. {t.footer.rights}
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[L.privacy, L.terms].map((l) => (
              <a key={l} href="#" style={{ color: '#71717a', fontSize: '13px', fontWeight: 300, textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#a1a1aa' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#71717a' }}>
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
