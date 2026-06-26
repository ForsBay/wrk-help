'use client'

import { useEffect, useRef } from 'react'

// Color zones: as user scrolls 0→1, aurora blobs shift through these palettes
const COLOR_ZONES = [
  { prog: 0.00, c: [[37, 99, 235], [99, 102, 241], [59, 130, 246]] },
  { prog: 0.20, c: [[29, 78, 216], [79, 70, 229], [37, 99, 235]] },
  { prog: 0.40, c: [[30, 64, 175], [55, 48, 163], [29, 78, 216]] },
  { prog: 0.60, c: [[23, 37, 84],  [55, 48, 163], [30, 64, 175]] },
  { prog: 0.80, c: [[30, 20, 80],  [55, 48, 163], [23, 37, 84]] },
  { prog: 1.00, c: [[37, 99, 235], [79, 70, 229], [59, 130, 246]] },
]

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

function lerpColor(a: number[], b: number[], t: number): number[] {
  return a.map((v, i) => Math.round(lerp(v, b[i], t)))
}

function getColorsAtProgress(p: number): number[][] {
  for (let i = 0; i < COLOR_ZONES.length - 1; i++) {
    const z0 = COLOR_ZONES[i]
    const z1 = COLOR_ZONES[i + 1]
    if (p >= z0.prog && p <= z1.prog) {
      const t = (p - z0.prog) / (z1.prog - z0.prog)
      return z0.c.map((c, j) => lerpColor(c, z1.c[j], t))
    }
  }
  return COLOR_ZONES[COLOR_ZONES.length - 1].c
}

export default function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let time = 0
    let currentProgress = 0
    let targetProgress = 0

    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      targetProgress = max > 0 ? window.scrollY / max : 0
    }

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setSize()
    window.addEventListener('resize', setSize, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    const draw = () => {
      // Smooth scroll progress interpolation
      currentProgress += (targetProgress - currentProgress) * 0.04

      time += 0.4
      const w = canvas.width
      const h = canvas.height
      const minDim = Math.min(w, h)

      // Clear with base dark color
      ctx.fillStyle = '#030712'
      ctx.fillRect(0, 0, w, h)

      const colors = getColorsAtProgress(currentProgress)

      // 5 aurora blobs — large, very soft, different positions and phases
      const blobs = [
        {
          x: w * (0.18 + Math.sin(time * 0.00055) * 0.09),
          y: h * (0.28 + Math.cos(time * 0.00048) * 0.07),
          r: minDim * 0.58,
          color: colors[0],
          alpha: 0.18,
        },
        {
          x: w * (0.78 + Math.cos(time * 0.00072) * 0.08),
          y: h * (0.22 + Math.sin(time * 0.00085) * 0.10),
          r: minDim * 0.50,
          color: colors[1],
          alpha: 0.14,
        },
        {
          x: w * (0.50 + Math.sin(time * 0.00060 + 4) * 0.10),
          y: h * (0.72 + Math.cos(time * 0.00052 + 2) * 0.08),
          r: minDim * 0.46,
          color: colors[2],
          alpha: 0.13,
        },
        {
          x: w * (0.82 + Math.cos(time * 0.00090 + 1) * 0.07),
          y: h * (0.62 + Math.sin(time * 0.00065 + 3) * 0.09),
          r: minDim * 0.40,
          color: colors[0],
          alpha: 0.10,
        },
        {
          x: w * (0.12 + Math.sin(time * 0.00070 + 2) * 0.09),
          y: h * (0.68 + Math.cos(time * 0.00058 + 1) * 0.06),
          r: minDim * 0.38,
          color: colors[1],
          alpha: 0.09,
        },
      ]

      blobs.forEach(({ x, y, r, color, alpha }) => {
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
        grad.addColorStop(0, `rgba(${color[0]},${color[1]},${color[2]},${alpha})`)
        grad.addColorStop(0.4, `rgba(${color[0]},${color[1]},${color[2]},${alpha * 0.5})`)
        grad.addColorStop(1, `rgba(${color[0]},${color[1]},${color[2]},0)`)
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, w, h)
      })

      // Subtle noise-like shimmer: a faint horizontal gradient that drifts up slowly
      const shimmerY = ((time * 0.3) % (h * 2)) - h
      const shimmer = ctx.createLinearGradient(0, shimmerY, 0, shimmerY + h * 0.6)
      shimmer.addColorStop(0, 'rgba(59,130,246,0)')
      shimmer.addColorStop(0.5, 'rgba(59,130,246,0.025)')
      shimmer.addColorStop(1, 'rgba(59,130,246,0)')
      ctx.fillStyle = shimmer
      ctx.fillRect(0, shimmerY, w, h * 0.6)

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', setSize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
