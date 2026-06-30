// SHARED skeleton primitives. A single shimmer keyframe (gradient sweep) drives
// every placeholder; honours `prefers-reduced-motion` via the global stop in
// globals.css. Used by the AppShell mount gate and the mobile first-paint state
// so the app never flashes a blank screen.
import type { CSSProperties } from 'react'

export function Skeleton({ w = '100%', h = 14, r = 8, style }: {
  w?: number | string; h?: number | string; r?: number; style?: CSSProperties
}) {
  return <div className="sk" style={{ width: w, height: h, borderRadius: r, ...style }} />
}

/** A card-shaped shimmer mirroring the mobile shift card layout. */
export function SkeletonCard() {
  return (
    <div className="sk-card">
      <Skeleton w={44} h={44} r={12} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton w="55%" h={14} />
        <Skeleton w="35%" h={11} />
      </div>
      <Skeleton w={52} h={16} />
    </div>
  )
}

/** Full mobile-screen first-paint placeholder (summary row + a few cards). */
export function MobileSkeleton() {
  return (
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 10 }}>
        {[0, 1, 2, 3].map(i => <Skeleton key={i} h={62} r={14} />)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[0, 1, 2, 3, 4].map(i => <SkeletonCard key={i} />)}
      </div>
    </div>
  )
}
