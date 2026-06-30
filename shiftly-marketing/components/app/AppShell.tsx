'use client'

// ─────────────────────────────────────────────────────────────────────────────
// AppShell — the platform resolution boundary.
//
// • Owns the SHARED state (active view + the headless shifts context) and injects
//   it into whichever shell renders (state-lift-state).
// • Picks DesktopShell vs MobileShell from the Platform Service.
// • Code-splits the shells with next/dynamic, so a phone never downloads the
//   desktop table/sidebars and a desktop never downloads the mobile bottom-nav
//   (bundle-dynamic-imports). ssr:false + a mount gate keep it hydration-safe.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePlatform } from '@/lib/use-platform'
import { useShifts } from './features/shifts/useShifts'
import { ViewId } from './nav'
import { ToastProvider } from './ui/Toast'
import { MobileSkeleton } from './ui/Skeleton'
import { AuthProvider } from '@/lib/auth'
import { AppSettingsProvider } from '@/lib/appSettings'

function Skeleton() {
  return <div style={{ minHeight: '100dvh', background: 'var(--bg, #0a0a0b)' }} />
}

// The mobile chunk shows a branded skeleton while it streams in (no blank flash);
// desktop keeps the neutral fill since its grid paints instantly once mounted.
const DesktopShell = dynamic(() => import('./shell/DesktopShell'), { ssr: false, loading: Skeleton })
const MobileShell  = dynamic(() => import('./shell/MobileShell'),  { ssr: false, loading: () => <MobileSkeleton /> })

// Providers wrap the inner component so useShifts (and the shells) can consume
// auth + settings. Order: Auth → Settings → Toast → app.
export default function AppShell() {
  return (
    <AuthProvider>
      <AppSettingsProvider>
        <ToastProvider>
          <AppInner />
        </ToastProvider>
      </AppSettingsProvider>
    </AuthProvider>
  )
}

function AppInner() {
  const platform = usePlatform()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // SHARED state — lifted here, passed to whichever shell renders.
  const [active, setActive] = useState<ViewId>('calendar')
  const shifts = useShifts()

  if (!mounted) return <Skeleton /> // wait until the platform is known (no SSR flash)

  const Shell = platform.isDesktop ? DesktopShell : MobileShell
  return <Shell active={active} onSelect={setActive} shifts={shifts} />
}
