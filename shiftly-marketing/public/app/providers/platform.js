// ─────────────────────────────────────────────────────────────────────────────
// PlatformDetector — best-effort device/OS detection.
//
// Used ONLY to *recommend* which providers to surface first. It never restricts
// functionality: the user can always connect any connectable provider manually.
// ─────────────────────────────────────────────────────────────────────────────

/** @enum {string} */
export const Platform = {
  IOS:     'ios',
  ANDROID: 'android',
  MACOS:   'macos',
  WINDOWS: 'windows',
  LINUX:   'linux',
  UNKNOWN: 'unknown',
};

/**
 * Detect the current platform from UA / UA-Client-Hints. Pure, no side effects.
 * @returns {Platform[keyof Platform]}
 */
export function detectPlatform() {
  if (typeof navigator === 'undefined') return Platform.UNKNOWN;

  const ua = navigator.userAgent || '';
  const uaData = navigator.userAgentData;
  const platformHint = (uaData && uaData.platform) || navigator.platform || '';

  // iPadOS 13+ reports as "MacIntel" but exposes touch points — disambiguate.
  const isTouchMac = platformHint === 'MacIntel' && navigator.maxTouchPoints > 1;

  if (/iPhone|iPad|iPod/.test(ua) || isTouchMac) return Platform.IOS;
  if (/Android/.test(ua)) return Platform.ANDROID;
  if (/Mac/.test(platformHint) || /Macintosh/.test(ua)) return Platform.MACOS;
  if (/Win/.test(platformHint) || /Windows/.test(ua)) return Platform.WINDOWS;
  if (/Linux/.test(platformHint) || /Linux/.test(ua)) return Platform.LINUX;
  return Platform.UNKNOWN;
}

/**
 * Is the device made by Samsung? (Recommends Samsung Calendar first on Galaxy.)
 * @returns {boolean}
 */
export function isSamsungDevice() {
  if (typeof navigator === 'undefined') return false;
  return /SamsungBrowser|SM-|Galaxy/i.test(navigator.userAgent || '');
}

/**
 * Ordered list of recommended provider types for a platform. The order is the
 * order they should be highlighted in the Integrations screen. Every provider is
 * still available regardless — this is guidance, not a gate.
 * @param {Platform[keyof Platform]} platform
 * @returns {string[]}  provider type ids, most-recommended first
 */
export function recommendedProviderOrder(platform = detectPlatform()) {
  switch (platform) {
    case Platform.IOS:
      return ['apple', 'google', 'outlook', 'ics'];
    case Platform.ANDROID:
      return isSamsungDevice()
        ? ['samsung', 'google', 'outlook', 'ics']
        : ['google', 'outlook', 'ics'];
    case Platform.MACOS:
      return ['apple', 'google', 'outlook', 'ics'];
    case Platform.WINDOWS:
      return ['outlook', 'google', 'ics'];
    default:
      return ['google', 'outlook', 'ics'];
  }
}
