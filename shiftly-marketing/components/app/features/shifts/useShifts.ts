'use client'

// ─────────────────────────────────────────────────────────────────────────────
// HEADLESS shifts feature — the single source of data, totals and formatting.
//
// Follows composition-patterns `state-context-interface` / `decouple-implementation`:
// the UI consumes a generic { state, actions, meta } contract and never knows
// where the data comes from (here: mock; later: Firebase + providers/sync-engine).
// Desktop and Mobile presentations both call this — zero duplicated logic.
// ─────────────────────────────────────────────────────────────────────────────

import { useMemo, useState } from 'react'

export interface Shift {
  id: string
  date: string        // ISO yyyy-mm-dd
  weekday: string
  from: string        // HH:MM
  to: string
  hours: number
  overtime: number    // OT hours
  planned: boolean
}

export interface ShiftRow extends Shift {
  earnings: number
  // pre-formatted strings so every platform renders identical values
  f: { date: string; hours: string; overtime: string; earnings: string; range: string }
}

export interface ShiftsState {
  rows: ShiftRow[]
  totals: { days: number; hours: number; overtime: number; earnings: number; f: { hours: string; overtime: string; earnings: string } }
  selectedId: string | null
}
export interface ShiftsActions {
  select: (id: string | null) => void
  remove: (id: string) => void
}
export interface ShiftsMeta { rate: number; currency: string }
export interface ShiftsContext { state: ShiftsState; actions: ShiftsActions; meta: ShiftsMeta }

const RATE = 31.4
const CUR = 'zł'

const SEED: Shift[] = [
  { id: 'd1', date: '2026-06-22', weekday: 'Mon', from: '09:00', to: '17:30', hours: 8.5, overtime: 0,   planned: false },
  { id: 'd2', date: '2026-06-23', weekday: 'Tue', from: '09:00', to: '18:00', hours: 9,   overtime: 0.5, planned: false },
  { id: 'd3', date: '2026-06-24', weekday: 'Wed', from: '08:00', to: '16:00', hours: 8,   overtime: 0,   planned: false },
  { id: 'd4', date: '2026-06-25', weekday: 'Thu', from: '09:00', to: '19:00', hours: 10,  overtime: 2,   planned: false },
  { id: 'd5', date: '2026-06-26', weekday: 'Fri', from: '09:00', to: '17:00', hours: 8,   overtime: 0,   planned: false },
  { id: 'd6', date: '2026-06-29', weekday: 'Mon', from: '09:00', to: '17:30', hours: 8.5, overtime: 0,   planned: true  },
]

const num = (n: number) => (n % 1 === 0 ? String(n) : n.toFixed(1))
const money = (n: number) => `${Math.round(n)} ${CUR}`

export function useShifts(): ShiftsContext {
  const [shifts, setShifts] = useState<Shift[]>(SEED)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // Derived during render (rerender-derived-state-no-effect): rows + totals.
  const { rows, totals } = useMemo(() => {
    const rows: ShiftRow[] = shifts.map(s => {
      const earnings = s.hours * RATE + s.overtime * RATE * 0.5
      const d = new Date(s.date + 'T00:00:00')
      return {
        ...s, earnings,
        f: {
          date: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
          hours: `${num(s.hours)}h`,
          overtime: s.overtime ? `+${num(s.overtime)}h` : '—',
          earnings: money(earnings),
          range: `${s.from}–${s.to}`,
        },
      }
    })
    const sum = (k: (r: ShiftRow) => number) => rows.reduce((a, r) => a + k(r), 0)
    const hours = sum(r => r.hours), overtime = sum(r => r.overtime), earnings = sum(r => r.earnings)
    return {
      rows,
      totals: {
        days: rows.length, hours, overtime, earnings,
        f: { hours: `${num(hours)}h`, overtime: `${num(overtime)}h`, earnings: money(earnings) },
      },
    }
  }, [shifts])

  return {
    state: { rows, totals, selectedId },
    actions: {
      select: setSelectedId,
      remove: (id) => setShifts(prev => prev.filter(s => s.id !== id)),
    },
    meta: { rate: RATE, currency: CUR },
  }
}
