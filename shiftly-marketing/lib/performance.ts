// ─────────────────────────────────────────────────────────────────────────────
// Performance tiering — decides how much visual richness a device can afford.
//
// Three tiers:
//   • 'full' — strong device: every effect (Lenis smooth-scroll, GSAP pin/scrub,
//              mouse parallax, animated blur/glow).
//   • 'mid'  — average device: keep reveals and light parallax, drop the most
//              expensive continuous GPU work (big animated blur, scroll hijack).
//   • 'lite' — weak device / data-saver / reduced-motion: native scroll, static
//              gradients instead of animated blur, only cheap fade/slide reveals.
//
// Detection is two-phase:
//   1. STATIC (synchronous, runs in an inline <head> script before first paint via
//      `PERF_INLINE_SCRIPT`) using hardware/network/intent signals → sets
//      <html data-perf>. No flash of the wrong tier.
//   2. RUNTIME (after hydration, idle) a short FPS probe can DOWNGRADE the tier if
//      the device actually janks, regardless of its specs.
// ─────────────────────────────────────────────────────────────────────────────

import { getPlatform } from './platform'

export type PerfTier = 'full' | 'mid' | 'lite'

export interface PerfState {
  tier: PerfTier
  reducedMotion: boolean
  /** Touch device (phone/tablet). Forces the native, effect-free experience
      regardless of how powerful the device is — a flagship phone still gets the
      instant, scroll-driven-effect-free Hero. */
  mobile: boolean
}

/** Touch/mobile detection — delegates to the canonical Platform Service so the
    whole app has a single source of device truth (phones & tablets are mobile). */
export function detectMobile(): boolean {
  return getPlatform().isMobile
}

/**
 * Score a device from static signals. Higher = more capable.
 * Kept deliberately simple and mirrored by PERF_INLINE_SCRIPT below.
 */
export function scoreDevice(): { tier: PerfTier; reducedMotion: boolean; mobile: boolean; forced: boolean } {
  if (typeof window === 'undefined') {
    return { tier: 'full', reducedMotion: false, mobile: false, forced: false }
  }
  const mobile = detectMobile()

  const nav = navigator as Navigator & {
    deviceMemory?: number
    connection?: { saveData?: boolean; effectiveType?: string }
  }

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  const conn = nav.connection
  const saveData = conn?.saveData === true
  const slowNet = conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g'

  // Hard overrides → lite immediately.
  if (saveData || slowNet) return { tier: 'lite', reducedMotion, mobile, forced: true }

  let score = 0
  const cores = nav.hardwareConcurrency || 0
  if (cores >= 8) score += 2
  else if (cores >= 4) score += 1
  else if (cores > 0 && cores < 4) score -= 1

  const mem = nav.deviceMemory || 0
  if (mem >= 8) score += 2
  else if (mem >= 4) score += 1
  else if (mem > 0 && mem < 4) score -= 2 // low RAM is the strongest weakness signal

  // Coarse pointers (phones/tablets) lean lighter by default; desktop pointers heavier.
  if (window.matchMedia?.('(pointer: coarse)').matches) score -= 1
  if (window.matchMedia?.('(min-width: 1024px) and (pointer: fine)').matches) score += 1

  const tier: PerfTier = score >= 3 ? 'full' : score >= 0 ? 'mid' : 'lite'
  return { tier, reducedMotion, mobile, forced: false }
}

/**
 * Probe real frame rate for ~`durationMs` and report average FPS. Used after
 * hydration to catch devices that score well but still jank.
 */
export function measureFps(durationMs = 600): Promise<number> {
  return new Promise(resolve => {
    if (typeof requestAnimationFrame === 'undefined') return resolve(60)
    let frames = 0
    const start = performance.now()
    const tick = (now: number) => {
      frames++
      if (now - start >= durationMs) resolve((frames * 1000) / (now - start))
      else requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
}

/** Apply a tier to the document so CSS gates (`[data-perf=…]`) take effect. */
export function applyTier(tier: PerfTier, reducedMotion: boolean): void {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.dataset.perf = tier
  if (reducedMotion) root.dataset.reducedMotion = 'true'
  else delete root.dataset.reducedMotion
}

/** Downgrade helper: full → mid → lite (never upgrades). */
export function downgrade(tier: PerfTier): PerfTier {
  return tier === 'full' ? 'mid' : 'lite'
}

/**
 * Inline script string injected into <head> to set the tier BEFORE first paint.
 * Self-contained (no imports). Mirrors scoreDevice()'s logic in compact form.
 */
export const PERF_INLINE_SCRIPT = `(function(){try{
var d=document.documentElement,n=navigator,m=window.matchMedia;
var rm=m&&m('(prefers-reduced-motion: reduce)').matches;
var mob=m&&m('(hover: none) and (pointer: coarse)').matches;
if(mob)d.setAttribute('data-mobile','true');
if(rm)d.setAttribute('data-reduced-motion','true');
var c=(n.connection||{});
if(c.saveData===true||c.effectiveType==='slow-2g'||c.effectiveType==='2g'){d.setAttribute('data-perf','lite');return;}
var s=0,cores=n.hardwareConcurrency||0,mem=n.deviceMemory||0;
if(cores>=8)s+=2;else if(cores>=4)s+=1;else if(cores>0&&cores<4)s-=1;
if(mem>=8)s+=2;else if(mem>=4)s+=1;else if(mem>0&&mem<4)s-=2;
if(m&&m('(pointer: coarse)').matches)s-=1;
if(m&&m('(min-width: 1024px) and (pointer: fine)').matches)s+=1;
d.setAttribute('data-perf',s>=3?'full':s>=0?'mid':'lite');
}catch(e){document.documentElement.setAttribute('data-perf','mid');}})();`
