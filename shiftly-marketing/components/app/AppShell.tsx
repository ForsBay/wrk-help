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

function Skeleton() {
  return <div style={{ minHeight: '100dvh', background: 'var(--bg, #0a0a0b)' }} />
}

const DesktopShell = dynamic(() => import('./shell/DesktopShell'), { ssr: false, loading: Skeleton })
const MobileShell  = dynamic(() => import('./shell/MobileShell'),  { ssr: false, loading: Skeleton })

export default function AppShell() {
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
