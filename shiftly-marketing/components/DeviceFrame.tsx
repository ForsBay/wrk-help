'use client'

import { ReactNode } from 'react'

/* Premium "real device" frame: machined bezel, glass screen sheen, top camera,
   large soft diffusion shadow and a soft floor reflection glow.
   Parent sets width/height; the screen fills it. */
export default function DeviceFrame({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ position: 'relative', ...style }}>
      {/* Ambient bloom behind the device */}
      <div className="df-bloom" style={{
        position: 'absolute', inset: '-10% -8% -18% -8%',
        background: 'radial-gradient(58% 56% at 50% 42%, rgba(52,201,138,.16), transparent 72%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />

      {/* Device body */}
      <div style={{
        position: 'relative', height: '100%', borderRadius: '22px', padding: '0.85%',
        background: 'linear-gradient(155deg, #313137 0%, #18181b 38%, #0c0c0e 100%)',
        boxShadow: [
          'inset 0 1px 0 rgba(255,255,255,.14)',
          'inset 0 0 0 1px rgba(0,0,0,.6)',
          '0 2px 6px rgba(0,0,0,.5)',
          '0 60px 130px -45px rgba(0,0,0,.95)',
          '0 28px 70px -35px rgba(0,0,0,.85)',
        ].join(','),
      }}>
        {/* Screen */}
        <div style={{
          position: 'relative', height: '100%', borderRadius: '14px', overflow: 'hidden',
          containerType: 'inline-size', background: '#0e0e11',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.04), inset 0 0 40px rgba(0,0,0,.4)',
        }}>
          {children}
          {/* Glass sheen */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(122deg, rgba(255,255,255,.11) 0%, rgba(255,255,255,.02) 20%, transparent 42%, transparent 72%, rgba(255,255,255,.05) 100%)' }} />
          {/* Top edge highlight */}
          <div style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent)', pointerEvents: 'none' }} />
        </div>

        {/* Camera */}
        <div style={{ position: 'absolute', top: '1.4%', left: '50%', transform: 'translateX(-50%)', width: '5px', height: '5px', borderRadius: '50%', background: '#050507', boxShadow: 'inset 0 0 0 1px rgba(120,160,140,.25)' }} />
      </div>

      {/* Soft floor reflection / glow */}
      <div style={{
        position: 'absolute', top: '101%', left: '8%', right: '8%', height: '26%',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(52,201,138,.16) 0%, rgba(120,140,160,.06) 30%, transparent 72%)',
        filter: 'blur(14px)', opacity: 0.7, pointerEvents: 'none',
        WebkitMaskImage: 'linear-gradient(to bottom, #000, transparent)',
        maskImage: 'linear-gradient(to bottom, #000, transparent)',
      }} />
    </div>
  )
}
