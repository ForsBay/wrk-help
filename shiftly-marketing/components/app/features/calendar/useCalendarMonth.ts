'use client'

// ─────────────────────────────────────────────────────────────────────────────
// HEADLESS calendar view-model. Pure VIEW derivation on top of the shared
// `useShifts` data — it does NOT recompute earnings/formatting (that lives in
// useShifts). It only arranges the existing rows into a month grid and owns the
// "which month am I looking at" presentation state + navigation.
// Consumed by the desktop CalendarGrid; mobile doesn't use it.
// ─────────────────────────────────────────────────────────────────────────────

import { useMemo, useState, useCallback } from 'react'
import type { ShiftsContext, ShiftRow } from '../shifts/useShifts'

export interface DayCellData {
  date: string          // yyyy-mm-dd
  day: number
  inMonth: boolean
  isToday: boolean
  isWeekend: boolean
  shift: ShiftRow | null
}
export interface CalendarMonth {
  monthKey: string      // yyyy-mm
  label: string         // "June 2026"
  weekdays: string[]
  cells: DayCellData[]  // 42 (6×7), Monday-first
  upcoming: ShiftRow[]
  monthTotals: { days: number; hours: number; earnings: number }
  prev: () => void
  next: () => void
  goToday: () => void
  goMonth: (key: string) => void
}

const p2 = (n: number) => String(n).padStart(2, '0')
const todayKey = () => { const d = new Date(); return `${d.getFullYear()}-${p2(d.getMonth() + 1)}` }
const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}` }

export function useCalendarMonth(ctx: ShiftsContext): CalendarMonth {
  // Default to the month that actually contains data (demo), else the real month.
  const [monthKey, setMonthKey] = useState<string>(() => ctx.state.rows[0]?.date.slice(0, 7) || todayKey())

  const shift = (key: string, delta: number) => {
    const [y, m] = key.split('-').map(Number)
    const d = new Date(y, m - 1 + delta, 1)
    return `${d.getFullYear()}-${p2(d.getMonth() + 1)}`
  }
  const prev = useCallback(() => setMonthKey(k => shift(k, -1)), [])
  const next = useCallback(() => setMonthKey(k => shift(k, +1)), [])
  const goToday = useCallback(() => setMonthKey(todayKey()), [])
  const goMonth = useCallback((key: string) => setMonthKey(key), [])

  const model = useMemo(() => {
    const [y, m] = monthKey.split('-').map(Number)
    const first = new Date(y, m - 1, 1)
    const daysInMonth = new Date(y, m, 0).getDate()
    const leadMon = (first.getDay() + 6) % 7 // Monday-first offset
    const byDate = new Map(ctx.state.rows.map(r => [r.date, r]))
    const tISO = todayISO()

    const cells: DayCellData[] = []
    for (let i = 0; i < 42; i++) {
      const dayNum = i - leadMon + 1
      const d = new Date(y, m - 1, dayNum)
      const iso = `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`
      const dow = d.getDay()
      cells.push({
        date: iso, day: d.getDate(),
        inMonth: dayNum >= 1 && dayNum <= daysInMonth,
        isToday: iso === tISO,
        isWeekend: dow === 0 || dow === 6,
        shift: byDate.get(iso) || null,
      })
    }

    const monthRows = ctx.state.rows.filter(r => r.date.slice(0, 7) === monthKey)
    const monthTotals = {
      days: monthRows.length,
      hours: monthRows.reduce((a, r) => a + r.hours, 0),
      earnings: monthRows.reduce((a, r) => a + r.earnings, 0),
    }
    const upcoming = [...ctx.state.rows]
      .filter(r => r.date >= tISO)
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 5)

    return {
      label: first.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      cells, upcoming, monthTotals,
    }
  }, [monthKey, ctx.state.rows])

  return { monthKey, ...model, prev, next, goToday, goMonth }
}
