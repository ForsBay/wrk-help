// ─────────────────────────────────────────────────────────────────────────────
// Platform Service — one reliable, framework-agnostic source of device truth.
//
// Philosophy: NEVER trust User-Agent alone. Classify from feature signals first
// (matchMedia pointer/hover/display-mode, navigator.maxTouchPoints, UA-Client-
// Hints, screen geometry) and fall back to UA only for things that genuinely
// have no API (browser brand). Every value is computed EXACTLY ONCE and cached
// as a frozen singleton, so reads are free and never trigger re-renders.
//
// Orientation is the single inherently-dynamic signal: it is snapshotted at
// init like everything else, and a separate opt-in `subscribeOrientation()` is
// provided for the rare component that needs it live — without recomputing the
// (immutable) platform object.
//
// Designed to move verbatim into packages/core/device later.
// ─────────────────────────────────────────────────────────────────────────────

export type DeviceType = 'desktop' | 'tablet' | 'phone'
export type OS = 'android' | 'ios' | 'ipados' | 'windows' | 'macos' | 'linux' | 'chromeos' | 'unknown'
export type Browser = 'safari' | 'chrome' | 'edge' | 'firefox' | 'samsung' | 'opera' | 'unknown'
export type Runtime = 'pwa' | 'browser'
export type Pointer = 'fine' | 'coarse' | 'none'
export type Orientation = 'portrait' | 'landscape'

export interface Platform {
  // ── primary classifications ──
  device: DeviceType
  os: OS
  browser: Browser
  runtime: Runtime
  orientation: Orientation

  // ── raw capabilities the classification was derived from ──
  pointer: Pointer
  hover: boolean
  touch: boolean
  maxTouchPoints: number
  screen: { width: number; height: number; dpr: number }

  // ── convenience booleans (so consumers never re-parse) ──
  isDesktop: boolean
  isTablet: boolean
  isPhone: boolean
  isMobile: boolean // phone OR tablet (touch-first form factor)
  isAndroid: boolean
  isIOS: boolean // iOS OR iPadOS
  isWindows: boolean
  isMacOS: boolean
  isLinux: boolean
  isChromeOS: boolean
  isSafari: boolean
  isSamsungBrowser: boolean
  isStandalone: boolean // running as an installed app
  isPWA: boolean
  isTouch: boolean

  // ── combined, human-readable tags (vocabulary the product asked for) ──
  labels: string[]
}

// SSR has no device — return a neutral desktop-browser default and do NOT cache
// it, so the client recomputes the real platform on first access.
const SSR_DEFAULT: Platform = Object.freeze({
  device: 'desktop', os: 'unknown', browser: 'unknown', runtime: 'browser', orientation: 'landscape',
  pointer: 'fine', hover: true, touch: false, maxTouchPoints: 0, screen: { width: 0, height: 0, dpr: 1 },
  isDesktop: true, isTablet: false, isPhone: false, isMobile: false, isAndroid: false, isIOS: false,
  isWindows: false, isMacOS: false, isLinux: false, isChromeOS: false, isSafari: false,
  isSamsungBrowser: false, isStandalone: false, isPWA: false, isTouch: false, labels: ['Desktop', 'Browser'],
})

// ── low-level signal readers ─────────────────────────────────────────────────
const mm = (q: string): boolean =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia(q).matches

function readPointer(): Pointer {
  if (mm('(pointer: fine)')) return 'fine'
  if (mm('(pointer: coarse)')) return 'coarse'
  return 'none'
}

function readTouch(maxTouchPoints: number): boolean {
  return maxTouchPoints > 0 || mm('(pointer: coarse)') ||
    (typeof window !== 'undefined' && 'ontouchstart' in window)
}

function readStandalone(): boolean {
  return mm('(display-mode: standalone)') || mm('(display-mode: window-controls-overlay)') ||
    mm('(display-mode: fullscreen)') || mm('(display-mode: minimal-ui)') ||
    // iOS Safari exposes a non-standard flag for home-screen apps.
    (typeof navigator !== 'undefined' && (navigator as any).standalone === true)
}

// navigator.userAgentData.platform is low-entropy (sync, no permission) and is
// the most reliable OS signal where available (Chromium). Empty elsewhere.
function uaChPlatform(): string {
  const d = (typeof navigator !== 'undefined' && (navigator as any).userAgentData) || null
  return d && typeof d.platform === 'string' ? d.platform : ''
}
function uaChMobile(): boolean | null {
  const d = (typeof navigator !== 'undefined' && (navigator as any).userAgentData) || null
  return d && typeof d.mobile === 'boolean' ? d.mobile : null
}

function readOS(ua: string, navPlatform: string, maxTouchPoints: number): OS {
  const ch = uaChPlatform().toLowerCase()
  if (ch.includes('android')) return 'android'
  if (ch.includes('chrome os') || ch.includes('chromium os')) return 'chromeos'
  if (ch === 'ios') return 'ios'
  if (ch.includes('windows')) return 'windows'
  if (ch.includes('macos')) {
    // An iPad on iPadOS reports "macOS"/"MacIntel" but is multi-touch.
    return maxTouchPoints > 1 ? 'ipados' : 'macos'
  }
  if (ch.includes('linux')) return 'linux'

  // No UA-CH (Safari/Firefox) → combine UA + navigator.platform + touch.
  if (/android/i.test(ua)) return 'android'
  if (/cros/i.test(ua)) return 'chromeos'
  if (/iphone|ipod/i.test(ua)) return 'ios'
  if (/ipad/i.test(ua)) return 'ipados'
  // iPadOS 13+ Safari masquerades as desktop Mac — disambiguate by touch.
  if (/mac/i.test(navPlatform) || /macintosh/i.test(ua)) {
    return maxTouchPoints > 1 ? 'ipados' : 'macos'
  }
  if (/win/i.test(navPlatform) || /windows/i.test(ua)) return 'windows'
  if (/linux/i.test(navPlatform) || /linux/i.test(ua)) return 'linux'
  return 'unknown'
}

function readBrowser(ua: string): Browser {
  // Order matters: more specific Chromium forks before generic Chrome.
  if (/SamsungBrowser/i.test(ua)) return 'samsung'
  if (/Edg(?:e|A|iOS)?\//i.test(ua)) return 'edge'
  if (/OPR\/|Opera|OPiOS/i.test(ua)) return 'opera'
  if (/Firefox\/|FxiOS/i.test(ua)) return 'firefox'
  // On iOS every browser is WebKit; only real Safari lacks Cr/Fx/Edg/OPiOS tokens.
  if (/CriOS\//i.test(ua)) return 'chrome'
  if (/Chrome\/|Chromium\//i.test(ua)) return 'chrome'
  if (/Safari\//i.test(ua) && /Version\//i.test(ua)) return 'safari'
  if (/Safari\//i.test(ua)) return 'safari'
  return 'unknown'
}

function readOrientation(): Orientation {
  if (typeof window === 'undefined') return 'landscape'
  if (typeof window.matchMedia === 'function') return mm('(orientation: portrait)') ? 'portrait' : 'landscape'
  return window.innerHeight >= window.innerWidth ? 'portrait' : 'landscape'
}

// ── device-type classification (multi-signal, never UA-only) ─────────────────
function classifyDevice(
  os: OS, pointer: Pointer, hover: boolean, touch: boolean, minDim: number, uaMobile: boolean | null,
): DeviceType {
  if (os === 'ipados') return 'tablet'
  if (os === 'ios') return minDim >= 600 ? 'tablet' : 'phone'

  // A real pointing device + hover ⇒ desktop, even on touch-screen laptops.
  const hasMouse = pointer === 'fine' && hover
  if (hasMouse && !(uaMobile === true)) return 'desktop'

  const touchFirst = (pointer === 'coarse' && !hover) || uaMobile === true || touch
  if (touchFirst) {
    if (uaMobile === true) return minDim >= 600 ? 'tablet' : 'phone'
    return minDim >= 600 ? 'tablet' : 'phone'
  }
  return 'desktop'
}

/** Pure, side-effect-free detection. Reads every signal exactly once. */
export function detectPlatform(): Platform {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return SSR_DEFAULT

  const ua = navigator.userAgent || ''
  const navPlatform = navigator.platform || ''
  const maxTouchPoints = navigator.maxTouchPoints || 0

  const pointer = readPointer()
  const hover = mm('(hover: hover)')
  const touch = readTouch(maxTouchPoints)
  const os = readOS(ua, navPlatform, maxTouchPoints)
  const browser = readBrowser(ua)
  const standalone = readStandalone()
  const orientation = readOrientation()
  const dpr = window.devicePixelRatio || 1
  const sw = window.screen ? window.screen.width : window.innerWidth
  const sh = window.screen ? window.screen.height : window.innerHeight
  const minDim = Math.min(sw, sh)

  const device = classifyDevice(os, pointer, hover, touch, minDim, uaChMobile())
  const runtime: Runtime = standalone ? 'pwa' : 'browser'

  const isPhone = device === 'phone'
  const isTablet = device === 'tablet'
  const isDesktop = device === 'desktop'
  const isIOS = os === 'ios' || os === 'ipados'

  // Build the human-readable tag list in the product's vocabulary.
  const deviceLabel = isDesktop ? 'Desktop' : isTablet ? 'Tablet' : 'Phone'
  const osLabel = ({ android: 'Android', ios: 'iOS', ipados: 'iOS', windows: 'Windows',
    macos: 'macOS', linux: 'Linux', chromeos: 'ChromeOS', unknown: '' } as const)[os]
  const browserLabel = browser === 'samsung' ? 'Samsung Browser'
    : browser === 'safari' ? 'Safari'
    : browser === 'chrome' ? 'Chrome' : browser === 'edge' ? 'Edge'
    : browser === 'firefox' ? 'Firefox' : browser === 'opera' ? 'Opera' : ''
  const runtimeLabel = standalone ? 'PWA' : 'Browser'
  const labels = [deviceLabel, osLabel, browserLabel, runtimeLabel].filter(Boolean) as string[]

  return Object.freeze({
    device, os, browser, runtime, orientation,
    pointer, hover, touch, maxTouchPoints,
    screen: { width: sw, height: sh, dpr },
    isDesktop, isTablet, isPhone, isMobile: isPhone || isTablet,
    isAndroid: os === 'android', isIOS,
    isWindows: os === 'windows', isMacOS: os === 'macos', isLinux: os === 'linux',
    isChromeOS: os === 'chromeos',
    isSafari: browser === 'safari', isSamsungBrowser: browser === 'samsung',
    isStandalone: standalone, isPWA: standalone, isTouch: touch,
    labels,
  })
}

// ── memoized singleton (compute once, read forever) ──────────────────────────
let cached: Platform | null = null

/** The platform, computed once and frozen. Safe to call anywhere, costs nothing
    after the first call, and returns a stable reference (no re-renders). */
export function getPlatform(): Platform {
  if (typeof window === 'undefined') return SSR_DEFAULT // never cache the SSR stub
  if (cached) return cached
  cached = detectPlatform()
  return cached
}

/** Reflect the platform onto <html data-*> before paint (CSS hooks, no flash). */
export function applyPlatformAttributes(p: Platform = getPlatform()): void {
  if (typeof document === 'undefined') return
  const d = document.documentElement
  d.setAttribute('data-device', p.device)
  d.setAttribute('data-os', p.os)
  d.setAttribute('data-browser', p.browser)
  d.setAttribute('data-runtime', p.runtime)
  d.setAttribute('data-orientation', p.orientation)
}

/** Opt-in live orientation (the one dynamic signal). Does NOT recompute or
    invalidate the frozen platform; just reports the current value on change. */
export function subscribeOrientation(cb: (o: Orientation) => void): () => void {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return () => {}
  const q = window.matchMedia('(orientation: portrait)')
  const handler = () => {
    const o: Orientation = q.matches ? 'portrait' : 'landscape'
    if (typeof document !== 'undefined') document.documentElement.setAttribute('data-orientation', o)
    cb(o)
  }
  q.addEventListener('change', handler)
  return () => q.removeEventListener('change', handler)
}

// Pre-paint inline script: sets data-* attributes synchronously in <head>/<body>
// before React renders, so layout/CSS never flash the wrong platform. Mirrors
// the detection above in compact form (UA-CH + matchMedia + maxTouchPoints).
export const PLATFORM_INLINE_SCRIPT = `(function(){try{
var d=document.documentElement,n=navigator,m=function(q){return window.matchMedia&&window.matchMedia(q).matches};
var ua=n.userAgent||'',mt=n.maxTouchPoints||0,ch=(n.userAgentData&&n.userAgentData.platform||'').toLowerCase();
var os='unknown';
if(ch.indexOf('android')>=0||/android/i.test(ua))os='android';
else if(ch.indexOf('chrome os')>=0||/cros/i.test(ua))os='chromeos';
else if(ch==='ios'||/iphone|ipod/i.test(ua))os='ios';
else if(/ipad/i.test(ua))os='ipados';
else if(ch.indexOf('macos')>=0||/mac/i.test(n.platform||'')||/macintosh/i.test(ua))os=mt>1?'ipados':'macos';
else if(ch.indexOf('windows')>=0||/win/i.test(n.platform||''))os='windows';
else if(ch.indexOf('linux')>=0||/linux/i.test(ua))os='linux';
var pointer=m('(pointer: fine)')?'fine':m('(pointer: coarse)')?'coarse':'none';
var hover=m('(hover: hover)'),touch=mt>0||pointer==='coarse'||'ontouchstart'in window;
var min=Math.min(screen.width,screen.height),mob=(n.userAgentData&&n.userAgentData.mobile)===true;
var device;
if(os==='ipados')device='tablet';
else if(os==='ios')device=min>=600?'tablet':'phone';
else if(pointer==='fine'&&hover&&!mob)device='desktop';
else if((pointer==='coarse'&&!hover)||mob||touch)device=min>=600?'tablet':'phone';
else device='desktop';
var standalone=m('(display-mode: standalone)')||m('(display-mode: window-controls-overlay)')||m('(display-mode: fullscreen)')||n.standalone===true;
d.setAttribute('data-device',device);d.setAttribute('data-os',os);
d.setAttribute('data-runtime',standalone?'pwa':'browser');
d.setAttribute('data-orientation',m('(orientation: portrait)')?'portrait':'landscape');
}catch(e){document.documentElement.setAttribute('data-device','desktop');}})();`
