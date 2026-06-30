'use client'

// ─────────────────────────────────────────────────────────────────────────────
// HEADLESS shifts feature — the single source of data, totals and formatting.
//
// Follows composition-patterns `state-context-interface` / `decouple-implementation`:
// the UI consumes a generic { state, actions, meta } contract and never knows
// where the data comes from (here: mock; later: Firebase + providers/sync-engine).
// Desktop and Mobile presentations both call this — zero duplicated logic.
//
// The desktop workspace needs richer detail + editing affordances, so this hook
// was extended ADDITIVELY (new optional fields + new actions). Mobile keeps using
// the original subset unchanged.
// ─────────────────────────────────────────────────────────────────────────────

import { useMemo, useState, useCallback, useEffect, useRef } from 'react'
import type { ShiftType } from './categories'
import { loadShifts, saveShifts, subscribeShifts } from '../../../../lib/shiftStore'
import { pushShift, removeShift } from '../../../../lib/gcalSync'

export interface Shift {
  id: string
  date: string        // ISO yyyy-mm-dd
  weekday: string
  from: string        // HH:MM
  to: string
  hours: number
  overtime: number    // OT hours
  planned: boolean
  // ── desktop inspector fields (optional → mobile is unaffected) ──
  breakMin?: number   // unpaid break, minutes
  workplace?: string
  notes?: string
  gcalSynced?: boolean
  type?: ShiftType    // colour category (defaults to `regular` everywhere)
  rate?: number       // per-shift hourly rate override (falls back to meta.rate)
}

export interface ShiftRow extends Shift {
  earnings: number
  // pre-formatted strings so every platform renders identical values
  f: { date: string; full: string; hours: string; overtime: string; earnings: string; range: string; duration: string; breaks: string }
}

export interface ShiftsState {
  rows: ShiftRow[]
  byId: Record<string, ShiftRow>
  totals: { days: number; hours: number; overtime: number; earnings: number; f: { hours: string; overtime: string; earnings: string } }
  selectedId: string | null
  selectedIds: string[]
}
export interface ShiftsActions {
  select: (id: string | null) => void
  toggleSelect: (id: string) => void          // ⌘/Ctrl-click — multi
  selectMany: (ids: string[]) => void          // range / select-all
  clearSelection: () => void
  remove: (id: string) => void
  removeMany: (ids: string[]) => void
  duplicate: (id: string) => void
  move: (id: string, newDate: string) => void  // drag & drop
  update: (id: string, patch: Partial<Shift>) => void
  add: (draft: Omit<Shift, 'id' | 'weekday'>) => void  // create from the new-shift form
}
export interface ShiftsMeta { rate: number; currency: string }
export interface ShiftsContext { state: ShiftsState; actions: ShiftsActions; meta: ShiftsMeta }

const RATE = 31.4
const CUR = 'zł'

const SEED: Shift[] = [
  { id: 'd1', date: '2026-06-22', weekday: 'Mon', from: '09:00', to: '17:30', hours: 8.5, overtime: 0,   planned: false, breakMin: 30, workplace: 'Warehouse A', notes: 'Inventory day', gcalSynced: true,  type: 'regular' },
  { id: 'd2', date: '2026-06-23', weekday: 'Tue', from: '09:00', to: '18:00', hours: 9,   overtime: 0.5, planned: false, breakMin: 30, workplace: 'Warehouse A', gcalSynced: true,  type: 'overtime' },
  { id: 'd3', date: '2026-06-24', weekday: 'Wed', from: '22:00', to: '06:00', hours: 8,   overtime: 0,   planned: false, breakMin: 45, workplace: 'Depot',       gcalSynced: false, type: 'night' },
  { id: 'd4', date: '2026-06-25', weekday: 'Thu', from: '09:00', to: '19:00', hours: 10,  overtime: 2,   planned: false, breakMin: 30, workplace: 'Warehouse A', notes: 'Covered late shift', gcalSynced: true, type: 'overtime' },
  { id: 'd5', date: '2026-06-26', weekday: 'Fri', from: '09:00', to: '13:00', hours: 4,   overtime: 0,   planned: false, breakMin: 0,  workplace: 'HQ',          gcalSynced: true,  type: 'training' },
  { id: 'd6', date: '2026-06-29', weekday: 'Mon', from: '09:00', to: '17:30', hours: 8.5, overtime: 0,   planned: true,  breakMin: 30, workplace: 'Warehouse A', type: 'regular' },
]

const num = (n: number) => (n % 1 === 0 ? String(n) : n.toFixed(1))
const money = (n: number) => `${Math.round(n)} ${CUR}`
const weekdayOf = (iso: string) => new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' })
const addDays = (iso: string, n: number) => {
  const d = new Date(iso + 'T00:00:00'); d.setDate(d.getDate() + n)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function useShifts(): ShiftsContext {
  // REAL data: hydrate from the persistent store (seeded once), persist on every
  // change, and live-update when another shell/tab mutates the same store.
  const [shifts, setShifts] = useState<Shift[]>(() => loadShifts(SEED))
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  // A ref mirror lets the actions read the current list synchronously (to compute
  // the affected row for Google Calendar sync) without stale-closure bugs.
  const shiftsRef = useRef(shifts)
  useEffect(() => { shiftsRef.current = shifts; saveShifts(shifts) }, [shifts])
  useEffect(() => subscribeShifts(setShifts), [])

  // Derived during render (rerender-derived-state-no-effect): rows + totals + index.
  const { rows, byId, totals } = useMemo(() => {
    const rows: ShiftRow[] = shifts.map(s => {
      const rate = s.rate && s.rate > 0 ? s.rate : RATE
      const earnings = s.hours * rate + s.overtime * rate * 0.5
      const d = new Date(s.date + 'T00:00:00')
      return {
        ...s, earnings,
        f: {
          date: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
          full: d.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
          hours: `${num(s.hours)}h`,
          overtime: s.overtime ? `+${num(s.overtime)}h` : '—',
          earnings: money(earnings),
          range: `${s.from}–${s.to}`,
          duration: `${num(s.hours)}h`,
          breaks: s.breakMin ? `${s.breakMin} min` : 'None',
        },
      }
    })
    const byId = Object.fromEntries(rows.map(r => [r.id, r])) as Record<string, ShiftRow>
    const sum = (k: (r: ShiftRow) => number) => rows.reduce((a, r) => a + k(r), 0)
    const hours = sum(r => r.hours), overtime = sum(r => r.overtime), earnings = sum(r => r.earnings)
    return {
      rows, byId,
      totals: {
        days: rows.length, hours, overtime, earnings,
        f: { hours: `${num(hours)}h`, overtime: `${num(overtime)}h`, earnings: money(earnings) },
      },
    }
  }, [shifts])

  // Stable actions (rerender-functional-setstate).
  const select = useCallback((id: string | null) => setSelectedIds(id ? [id] : []), [])
  const toggleSelect = useCallback((id: string) =>
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]), [])
  const selectMany = useCallback((ids: string[]) => setSelectedIds(ids), [])
  const clearSelection = useCallback(() => setSelectedIds([]), [])
  const remove = useCallback((id: string) => {
    const prev = shiftsRef.current.find(s => s.id === id)
    setShifts(list => list.filter(s => s.id !== id))
    setSelectedIds(ids => ids.filter(x => x !== id))
    if (prev?.gcalSynced) removeShift(prev)            // delete the Google event
  }, [])
  const removeMany = useCallback((ids: string[]) => {
    const set = new Set(ids)
    const removed = shiftsRef.current.filter(s => set.has(s.id))
    setShifts(list => list.filter(s => !set.has(s.id)))
    setSelectedIds([])
    removed.forEach(s => { if (s.gcalSynced) removeShift(s) })
  }, [])
  const duplicate = useCallback((id: string) => {
    const s = shiftsRef.current.find(x => x.id === id); if (!s) return
    const date = addDays(s.date, 1)
    const copy: Shift = { ...s, id: `s${Date.now()}`, date, weekday: weekdayOf(date), planned: true, gcalSynced: false }
    setShifts(list => [...list, copy])
    setSelectedIds([copy.id])
  }, [])
  const move = useCallback((id: string, newDate: string) => {
    const prev = shiftsRef.current.find(s => s.id === id)
    const next = prev ? { ...prev, date: newDate, weekday: weekdayOf(newDate) } : null
    setShifts(list => list.map(s => s.id === id ? { ...s, date: newDate, weekday: weekdayOf(newDate) } : s))
    if (next?.gcalSynced) { if (prev) removeShift(prev); pushShift(next) } // move = delete old day + create new
  }, [])
  const update = useCallback((id: string, patch: Partial<Shift>) => {
    const prev = shiftsRef.current.find(s => s.id === id); if (!prev) return
    const next = { ...prev, ...patch }
    setShifts(list => list.map(s => s.id === id ? next : s))
    if (next.gcalSynced) { if (prev.date !== next.date && prev.gcalSynced) removeShift(prev); pushShift(next) }
    else if (prev.gcalSynced) removeShift(prev)        // sync turned off → remove event
  }, [])
  const add = useCallback((draft: Omit<Shift, 'id' | 'weekday'>) => {
    const id = `s${Date.now()}`
    const ns: Shift = { ...draft, id, weekday: weekdayOf(draft.date) }
    setShifts(list => [...list, ns])
    setSelectedIds([id])
    if (ns.gcalSynced) pushShift(ns)                   // create the Google event
  }, [])

  const selectedId = selectedIds.length ? selectedIds[selectedIds.length - 1] : null

  return {
    state: { rows, byId, totals, selectedId, selectedIds },
    actions: { select, toggleSelect, selectMany, clearSelection, remove, removeMany, duplicate, move, update, add },
    meta: { rate: RATE, currency: CUR },
  }
}
