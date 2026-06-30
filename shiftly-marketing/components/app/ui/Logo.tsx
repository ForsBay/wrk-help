// SHARED Shiftly brand mark — the emerald rounded square with an "S" monogram.
// One component for the desktop rail and the mobile header so the logo never
// drifts between surfaces.
export function Logo({ size = 26, radius = 8 }: { size?: number; radius?: number }) {
  const g = Math.round(size * 0.64)
  return (
    <span className="brand-mark" style={{ width: size, height: size, borderRadius: radius }} aria-hidden>
      <svg width={g} height={g} viewBox="0 0 24 24" fill="none" stroke="#07120c" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
        {/* stylised S */}
        <path d="M16.5 7c-1-1.1-2.6-1.7-4.4-1.7-2.3 0-4.1 1-4.1 2.8 0 3.9 8.6 2.3 8.6 6.2 0 1.9-2 3-4.3 3-1.9 0-3.6-.6-4.6-1.8" />
      </svg>
    </span>
  )
}
