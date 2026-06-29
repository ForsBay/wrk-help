'use client'

// ─────────────────────────────────────────────────────────────────────────────
// Intelligent /download experience.
//
// Uses the Platform Service to auto-detect the device and surface the single most
// appropriate install method. Already inside the installed PWA → offer to open
// the app. Unknown device → show every option. No modals/popups — everything is
// inline and resolved automatically. Styled in the Shiftly language.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import { usePlatform } from '@/lib/use-platform'
import type { OS } from '@/lib/platform'

// ── Real distribution endpoints. Fill in when a build/listing exists; an empty
//    value automatically degrades that native option to an honest "Coming soon"
//    while the always-working web app stays available. ──
const DIST = {
  windowsInstaller: '',
  androidPlay: '',
  androidApk: '',
  iosTestFlight: '',
  webApp: '/app/',
}

type ActionKind = 'download' | 'store' | 'testflight' | 'soon'
interface PlatformDef {
  key: Exclude<OS, 'ipados'> // ipados folds into ios for display
  name: string
  icon: JSX.Element
  actionLabel: string
  url: string
  kind: ActionKind
  altLabel?: string
  altUrl?: string
}

// ── glyphs (match the CTA section) ──
const Win = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="#4aa3ff"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg>
const Andr = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M6 18v-6a6 6 0 0 1 12 0v6z" fill="#3ddc84"/><path d="M7.5 8 6 5.6M16.5 8 18 5.6" stroke="#3ddc84" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9.5" cy="12" r="1" fill="#0a0a0c"/><circle cx="14.5" cy="12" r="1" fill="#0a0a0c"/></svg>
const Appl = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="#e8e8ee"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.47 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
const Tux = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="#f5b94a"><path d="M12 2c-2.2 0-3.5 1.9-3.5 4.2 0 1.6.4 2.3.4 3.4 0 1.3-2.4 3.2-3 5.6-.5 2-.2 3.7.3 4.3.4.5 1 .2 1.1-.3.3-1.3.9-2 1.2-2.4.2 1.2 1.6 2.7 3.5 2.7s3.3-1.5 3.5-2.7c.3.4.9 1.1 1.2 2.4.1.5.7.8 1.1.3.5-.6.8-2.3.3-4.3-.6-2.4-3-4.3-3-5.6 0-1.1.4-1.8.4-3.4C15.5 3.9 14.2 2 12 2Z"/></svg>
const Globe = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#34c98a" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg>

const PLATFORMS: PlatformDef[] = [
  { key: 'windows', name: 'Windows', icon: <Win />,  actionLabel: 'Download for Windows', url: DIST.windowsInstaller, kind: 'download' },
  { key: 'macos',   name: 'macOS',   icon: <Appl />, actionLabel: 'Download for macOS',   url: '',                    kind: 'soon' },
  { key: 'android', name: 'Android', icon: <Andr />, actionLabel: 'Get it on Google Play', url: DIST.androidPlay, kind: 'store', altLabel: 'Download APK', altUrl: DIST.androidApk },
  { key: 'ios',     name: 'iPhone',  icon: <Appl />, actionLabel: 'Join the TestFlight',   url: DIST.iosTestFlight,    kind: 'testflight' },
  { key: 'linux',   name: 'Linux',   icon: <Tux />,  actionLabel: 'Download for Linux',    url: '',                    kind: 'soon' },
  { key: 'chromeos',name: 'ChromeOS',icon: <Globe />,actionLabel: 'Install the web app',   url: DIST.webApp,           kind: 'download' },
]

const osToKey = (os: OS): PlatformDef['key'] | null => {
  if (os === 'ipados') return 'ios'
  const found = PLATFORMS.find(p => p.key === os)
  return found ? found.key : null
}

export default function DownloadClient() {
  const platform = usePlatform()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const detectedKey = mounted ? osToKey(platform.os) : null
  const [selected, setSelected] = useState<PlatformDef['key'] | null>(null)
  // Default the selection to the detected platform once known.
  useEffect(() => { if (detectedKey) setSelected(detectedKey) }, [detectedKey])

  const isPWA = mounted && platform.isPWA

  return (
    <main style={{ minHeight: '100dvh', background: 'var(--bg, #0a0a0b)', color: 'var(--text, #fafafa)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 'max(48px, env(safe-area-inset-top)) 20px 64px' }}>
      {/* Brand + heading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon.png" alt="" width={30} height={30} style={{ borderRadius: 8 }} />
        <span style={{ fontWeight: 600, fontSize: 18 }}>Shiftly</span>
      </div>
      <h1 style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, fontSize: 'clamp(28px, 6vw, 44px)', letterSpacing: '-.02em', textAlign: 'center', margin: 0 }}>
        Get Shiftly
      </h1>
      <p style={{ color: 'var(--text-3, #71717a)', fontSize: 15, textAlign: 'center', margin: '12px 0 32px', maxWidth: 420, lineHeight: 1.55 }}>
        {!mounted ? 'Detecting your device…'
          : isPWA ? "You're using the installed app."
          : detectedKey ? "We picked the best option for your device."
          : 'Choose your platform.'}
      </p>

      {/* ── Already inside the installed PWA → open the app instead of installing ── */}
      {mounted && isPWA ? (
        <OpenAppCard />
      ) : !mounted ? (
        <div style={{ width: 'min(440px, 100%)', height: 220, borderRadius: 20, background: 'var(--surface, #131316)', border: '1px solid var(--border, #27272a)' }} />
      ) : detectedKey ? (
        <>
          <PrimaryCard def={PLATFORMS.find(p => p.key === selected)!} />
          {/* inline platform switcher (no popups) */}
          <OtherPlatforms selected={selected} onSelect={setSelected} />
        </>
      ) : (
        /* Unknown device → show everything */
        <AllPlatformsGrid />
      )}
    </main>
  )
}

// ── primary install card for one platform ──
function PrimaryCard({ def }: { def: PlatformDef }) {
  const ready = !!def.url && def.kind !== 'soon'
  return (
    <section style={card(440)}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
        <div style={iconWrap}>{def.icon}</div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 600 }}>{def.name}</div>
          <StatusPill ready={ready} kind={def.kind} />
        </div>
      </div>

      {ready ? (
        <a href={def.url} className="cta-primary" style={primaryBtn} {...external(def.url)}>{def.actionLabel}</a>
      ) : (
        <div className="dl-btn dl-btn--soon" style={{ ...primaryBtn, cursor: 'default' }}>
          {def.kind === 'testflight' ? 'TestFlight — coming soon' : `${def.name} app — coming soon`}
        </div>
      )}

      {def.altUrl ? (
        <a href={def.altUrl} className="dl-btn" style={{ marginTop: 10 }} {...external(def.altUrl)}>{def.altLabel}</a>
      ) : null}

      {/* The web app always works — quiet, honest fallback (not a popup). */}
      <a href={DIST.webApp} style={webLink}>Or use the web app instantly →</a>
    </section>
  )
}

function OpenAppCard() {
  return (
    <section style={{ ...card(440), textAlign: 'center' }}>
      <div style={{ ...iconWrap, margin: '0 auto 16px' }}><Globe /></div>
      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>Shiftly is installed</div>
      <p style={{ color: 'var(--text-3, #71717a)', fontSize: 14, margin: '0 0 18px' }}>You already have the app — jump right back in.</p>
      <a href={DIST.webApp} className="cta-primary" style={primaryBtn}>Open Shiftly</a>
    </section>
  )
}

function OtherPlatforms({ selected, onSelect }: { selected: PlatformDef['key'] | null; onSelect: (k: PlatformDef['key']) => void }) {
  return (
    <div style={{ marginTop: 26, width: 'min(440px, 100%)' }}>
      <div style={{ fontSize: 12, color: 'var(--text-3, #71717a)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 10, textAlign: 'center' }}>Other platforms</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {PLATFORMS.filter(p => p.key !== selected).map(p => (
          <button key={p.key} onClick={() => onSelect(p.key)} style={chip}>{p.name}</button>
        ))}
      </div>
    </div>
  )
}

function AllPlatformsGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, width: 'min(720px, 100%)' }}>
      {PLATFORMS.map(p => <PrimaryCard key={p.key} def={p} />)}
    </div>
  )
}

function StatusPill({ ready, kind }: { ready: boolean; kind: ActionKind }) {
  const label = ready ? (kind === 'store' ? 'Available' : kind === 'testflight' ? 'Beta' : 'Available') : (kind === 'testflight' ? 'Beta soon' : 'Coming soon')
  const color = ready ? '#34c98a' : '#f5b94a'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, fontSize: 12, color }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />{label}
    </div>
  )
}

// ── styles ──
const card = (max: number): React.CSSProperties => ({
  width: `min(${max}px, 100%)`, background: 'linear-gradient(180deg, #15151a 0%, #111114 100%)',
  border: '1px solid var(--border, #26262b)', borderRadius: 20, padding: 24,
})
const iconWrap: React.CSSProperties = { width: 56, height: 56, borderRadius: 15, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)' }
const primaryBtn: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '14px', fontSize: 15, textDecoration: 'none', borderRadius: 12 }
const webLink: React.CSSProperties = { display: 'block', textAlign: 'center', marginTop: 14, fontSize: 13, color: 'var(--text-3, #71717a)', textDecoration: 'none' }
const chip: React.CSSProperties = { minHeight: 40, padding: '8px 16px', borderRadius: 10, cursor: 'pointer', fontSize: 14, fontWeight: 500, background: 'rgba(255,255,255,.04)', border: '1px solid var(--border-2, #34343a)', color: 'var(--text-2, #a1a1aa)' }

const external = (url: string) => (url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})
