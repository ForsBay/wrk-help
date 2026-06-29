'use client'

import { useState, useEffect } from 'react'
import { Platform, Orientation, getPlatform, subscribeOrientation } from './platform'

/**
 * Returns the platform singleton. The value is computed once and is referentially
 * stable, so this hook NEVER causes a re-render after mount. Consumers that branch
 * UI on platform should pair it with a mount gate to stay hydration-safe (SSR has
 * no device), exactly like the existing perf/mobile gating.
 */
export function usePlatform(): Platform {
  // useState initializer runs once: server → SSR default, client → real platform.
  const [platform] = useState<Platform>(() => getPlatform())
  return platform
}

/**
 * Opt-in live orientation. Use ONLY where a component must react to rotation; it
 * subscribes independently and does not touch the (immutable) platform object.
 */
export function useOrientation(): Orientation {
  const [orientation, setOrientation] = useState<Orientation>(() => getPlatform().orientation)
  useEffect(() => subscribeOrientation(setOrientation), [])
  return orientation
}
