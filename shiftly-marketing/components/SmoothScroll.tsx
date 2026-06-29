'use client'

import { useEffect } from 'react'
import { usePerfFlags } from '@/lib/perf-context'

/**
 * Lenis smooth-scroll — only on the `full` tier.
 *
 * Lenis hijacks native scrolling and drives a per-frame rAF loop (via the GSAP
 * ticker) that runs even while the page is idle. On weaker devices this is the
 * single biggest source of scroll jank / poor INP, so on `mid` and `lite` (and
 * with reduced-motion) we fall back to native scrolling — which is already
 * smooth and costs the main thread nothing. GSAP ScrollTrigger still works
 * against native scroll, so pinned sections keep functioning.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { isFull } = usePerfFlags()

  useEffect(() => {
    if (!isFull) return // native scroll on mid/lite/reduced-motion

    let lenis: import('@studio-freight/lenis').default | null = null
    let cleanupTicker: (() => void) | null = null
    let cancelled = false

    ;(async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('@studio-freight/lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return

      lenis = new Lenis({
        duration: 1.25,
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        lerp: 0.085,
      })

      gsap.registerPlugin(ScrollTrigger)
      const onScroll = () => ScrollTrigger.update()
      lenis.on('scroll', onScroll)

      const tick = (time: number) => lenis?.raf(time * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      cleanupTicker = () => gsap.ticker.remove(tick)
    })()

    return () => {
      cancelled = true
      cleanupTicker?.()
      lenis?.destroy()
    }
  }, [isFull])

  return <>{children}</>
}
