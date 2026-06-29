'use client'

// ─────────────────────────────────────────────────────────────────────────────
// PerfProvider — exposes the active performance tier to the component tree.
//
// Source of truth on first render is the `data-perf` attribute already set by the
// inline <head> script (PERF_INLINE_SCRIPT), so there is no flash and SSR/CSR
// agree. After hydration we run one idle FPS probe; if the device janks we
// downgrade a tier and re-apply. The tier only ever goes down, never up.
// ─────────────────────────────────────────────────────────────────────────────

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import {
  PerfTier, PerfState, scoreDevice, measureFps, applyTier, downgrade, detectMobile,
} from './performance'

const PerfCtx = createContext<PerfState>({ tier: 'full', reducedMotion: false, mobile: false })

function readInitialTier(): PerfState {
  if (typeof document !== 'undefined') {
    const ds = document.documentElement.dataset
    const attr = ds.perf as PerfTier | undefined
    if (attr === 'full' || attr === 'mid' || attr === 'lite') {
      return { tier: attr, reducedMotion: ds.reducedMotion === 'true', mobile: ds.mobile === 'true' }
    }
  }
  // Fallback if the inline script didn't run (e.g. SSR string render).
  const s = scoreDevice()
  return { tier: s.tier, reducedMotion: s.reducedMotion, mobile: s.mobile }
}

export function PerfProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PerfState>(() => readInitialTier())

  useEffect(() => {
    // React to live changes in the reduced-motion preference.
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setState(s => {
      const next = { ...s, reducedMotion: mq.matches }
      applyTier(next.tier, next.reducedMotion)
      return next
    })
    mq.addEventListener?.('change', onChange)

    // Idle FPS probe — downgrade a tier if the device can't hold a smooth frame.
    let cancelled = false
    const run = () =>
      measureFps(600).then(fps => {
        if (cancelled) return
        // Below ~45fps during an idle probe means continuous effects will stutter.
        if (fps < 45) {
          setState(s => {
            if (s.tier === 'lite') return s
            const tier = downgrade(s.tier)
            const next = { ...s, tier }
            applyTier(tier, next.reducedMotion)
            return next
          })
        }
      })

    const ric = (window as any).requestIdleCallback as
      | ((cb: () => void, opts?: { timeout: number }) => number)
      | undefined
    const handle = ric ? ric(run, { timeout: 2000 }) : window.setTimeout(run, 1200)

    return () => {
      cancelled = true
      mq.removeEventListener?.('change', onChange)
      if (ric && (window as any).cancelIdleCallback) (window as any).cancelIdleCallback(handle)
      else clearTimeout(handle as number)
    }
  }, [])

  // On `lite` AND on every mobile/touch device, tell Framer Motion to drop
  // transform/layout animations app-wide (it keeps opacity) → every reveal /
  // parallax becomes a cheap fade. On desktop non-lite, honor the OS setting.
  const reducedMotionMode =
    state.tier === 'lite' || state.mobile || state.reducedMotion ? 'always' : 'user'

  return (
    <PerfCtx.Provider value={state}>
      <MotionConfig reducedMotion={reducedMotionMode}>{children}</MotionConfig>
    </PerfCtx.Provider>
  )
}

export const usePerf = () => useContext(PerfCtx)

/** Convenience flags for components. */
export function usePerfFlags() {
  const { tier, reducedMotion, mobile } = usePerf()
  // Mobile/touch is always treated as "lite" for heavy-effect gating, and never
  // as "full" — even a powerful phone gets the native, effect-free experience.
  const isLite = tier === 'lite' || reducedMotion || mobile
  return {
    tier,
    reducedMotion,
    isMobile: mobile,
    isLite,
    isMidOrBelow: tier !== 'full' || reducedMotion || mobile,
    isFull: tier === 'full' && !reducedMotion && !mobile,
  }
}
