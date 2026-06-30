'use client'

// Desktop Export — a REAL exporter (not a mock button). Generates a file from the
// current shifts and downloads it: CSV (spreadsheets), JSON (backup/restore shape)
// or ICS (import into any calendar app). Scope filters to this month or all time.
import { useState } from 'react'
import type { ShiftsContext, ShiftRow } from '../shifts/useShifts'
import { categoryOf } from '../shifts/categories'
import { Icon, type IconName } from '../../ui/Icon'
import { useToast } from '../../ui/Toast'

type Format = 'csv' | 'json' | 'ics'
type Scope = 'month' | 'all'

const FORMATS: { id: Format; label: string; ext: string; icon: IconName; hint: string }[] = [
  { id: 'csv',  label: 'CSV',  ext: 'csv',  icon: 'grid',     hint: 'Open in Excel / Sheets' },
  { id: 'json', label: 'JSON', ext: 'json', icon: 'download', hint: 'Full backup of every field' },
  { id: 'ics',  label: 'ICS',  ext: 'ics',  icon: 'calendar', hint: 'Import into any calendar app' },
]

const p2 = (n: number) => String(n).padStart(2, '0')
const csvCell = (v: string | number) => {
  const s = String(v ?? '')
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function toCSV(rows: ShiftRow[], cur: string): string {
  const head = ['Date', 'Weekday', 'From', 'To', 'Hours', 'Overtime', 'Break (min)', 'Workplace', 'Category', `Rate (${cur})`, `Earnings (${cur})`, 'Google synced', 'Notes']
  const body = rows.map(r => [
    r.date, r.weekday, r.from, r.to, r.hours, r.overtime, r.breakMin ?? 0,
    r.workplace ?? '', categoryOf(r.type).label, r.rate ?? '', Math.round(r.earnings),
    r.gcalSynced ? 'yes' : 'no', r.notes ?? '',
  ].map(csvCell).join(','))
  return [head.join(','), ...body].join('\r\n')
}

function toJSON(rows: ShiftRow[]): string {
  return JSON.stringify(rows.map(({ f, ...r }) => r), null, 2)
}

function toICS(rows: ShiftRow[]): string {
  const dt = (date: string, time: string, addDay = false) => {
    const [y, m, d] = date.split('-').map(Number)
    const base = new Date(y, m - 1, d + (addDay ? 1 : 0))
    const [hh, mm] = time.split(':')
    return `${base.getFullYear()}${p2(base.getMonth() + 1)}${p2(base.getDate())}T${hh}${mm}00`
  }
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Shiftly//Export//EN', 'CALSCALE:GREGORIAN']
  rows.forEach(r => {
    const overnight = r.to <= r.from
    const cat = categoryOf(r.type)
    lines.push(
      'BEGIN:VEVENT',
      `UID:${r.id}@shiftly`,
      `DTSTART:${dt(r.date, r.from)}`,
      `DTEND:${dt(r.date, r.to, overnight)}`,
      `SUMMARY:${cat.label}${r.workplace ? ` · ${r.workplace}` : ''}`,
      `DESCRIPTION:${(r.notes || '').replace(/\n/g, ' ')} (${Math.round(r.earnings)} earnings)`,
      'END:VEVENT',
    )
  })
  lines.push('END:VCALENDAR')
  return lines.join('\r\n')
}

function download(name: string, mime: string, data: string) {
  const blob = new Blob([data], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = name
  document.body.appendChild(a); a.click(); a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export function ExportView({ ctx }: { ctx: ShiftsContext }) {
  const [format, setFormat] = useState<Format>('csv')
  const [scope, setScope] = useState<Scope>('all')
  const toast = useToast()

  const month = new Date().toISOString().slice(0, 7)
  const rows = scope === 'month' ? ctx.state.rows.filter(r => r.date.slice(0, 7) === month) : ctx.state.rows

  const run = () => {
    if (rows.length === 0) { toast.toast('Nothing to export in this range', { tone: 'info' }); return }
    const f = FORMATS.find(x => x.id === format)!
    const stamp = new Date().toISOString().slice(0, 10)
    const name = `shiftly-${scope === 'month' ? month : 'all'}-${stamp}.${f.ext}`
    const data = format === 'csv' ? toCSV(rows, ctx.meta.currency) : format === 'json' ? toJSON(rows) : toICS(rows)
    const mime = format === 'csv' ? 'text/csv' : format === 'json' ? 'application/json' : 'text/calendar'
    download(name, mime, data)
    toast.success(`Exported ${rows.length} shift${rows.length === 1 ? '' : 's'}`, 'download')
  }

  return (
    <>
      <section className="stats-card">
        <h2 className="m-section-title">Format</h2>
        <div className="exp-formats">
          {FORMATS.map(f => (
            <button key={f.id} className={`exp-fmt${format === f.id ? ' on' : ''}`} onClick={() => setFormat(f.id)}>
              <span className="exp-fmt-ic"><Icon name={f.icon} size={20} /></span>
              <span className="exp-fmt-name">{f.label}</span>
              <span className="exp-fmt-hint">{f.hint}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="stats-card">
        <h2 className="m-section-title">Range</h2>
        <div className="seg" role="group" aria-label="Range" style={{ width: 'fit-content' }}>
          <button className={scope === 'all' ? 'seg-on' : 'seg-off'} onClick={() => setScope('all')}>All time</button>
          <button className={scope === 'month' ? 'seg-on' : 'seg-off'} onClick={() => setScope('month')}>This month</button>
        </div>
      </section>

      <div className="exp-foot">
        <span className="exp-count">{rows.length} shift{rows.length === 1 ? '' : 's'} ready to export</span>
        <button className="cta-primary" style={{ padding: '11px 20px' }} onClick={run}>
          <Icon name="download" size={16} /> Download {format.toUpperCase()}
        </button>
      </div>
    </>
  )
}
