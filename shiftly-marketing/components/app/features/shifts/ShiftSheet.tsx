'use client'

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE shift sheet — the bottom-sheet detail + editor + new-shift form.
//
// Replaces the old inline "Edit / Delete" expander with a proper native-feeling
// sheet. Detail mode mirrors the desktop ShiftInspector (same fields, same
// category colour); tapping Edit flips the same sheet into the form. "New" opens
// the form empty. All mutations go through the SHARED useShifts actions, and
// every action fires a toast for a clear success state. No desktop code touched.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import type { ShiftsContext, ShiftRow, Shift } from './useShifts'
import { categoryOf, type ShiftType } from './categories'
import { BottomSheet } from '../../ui/BottomSheet'
import { Field, TextInput, CategoryPicker } from '../../ui/Form'
import { Icon } from '../../ui/Icon'
import { useToast } from '../../ui/Toast'

export type SheetMode = 'detail' | 'edit' | 'new' | null

// minutes between two HH:MM marks, wrapping past midnight (night shifts)
const diffH = (from: string, to: string) => {
  const [fh, fm] = from.split(':').map(Number)
  const [th, tm] = to.split(':').map(Number)
  let m = (th * 60 + tm) - (fh * 60 + fm)
  if (m <= 0) m += 24 * 60
  return Math.round((m / 60) * 10) / 10
}

const todayISO = () => new Date().toISOString().slice(0, 10)

interface Draft {
  date: string; from: string; to: string; breakMin: string; rate: string
  workplace: string; notes: string; type: ShiftType; planned: boolean; gcalSynced: boolean
}
const draftOf = (r?: ShiftRow | null): Draft => ({
  date: r?.date ?? todayISO(),
  from: r?.from ?? '09:00',
  to: r?.to ?? '17:00',
  breakMin: r?.breakMin != null ? String(r.breakMin) : '',
  rate: r?.rate != null ? String(r.rate) : '',
  workplace: r?.workplace ?? '',
  notes: r?.notes ?? '',
  type: r?.type ?? 'regular',
  planned: r?.planned ?? true,
  gcalSynced: r?.gcalSynced ?? false,
})

export function ShiftSheet({ mode, row, ctx, onClose }: {
  mode: SheetMode
  row: ShiftRow | null
  ctx: ShiftsContext
  onClose: () => void
}) {
  const open = mode !== null
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<Draft>(draftOf(row))
  const toast = useToast()

  // Reset internal state whenever the sheet (re)opens for a different target.
  useEffect(() => {
    if (open) { setEditing(mode === 'new' || mode === 'edit'); setDraft(draftOf(row)) }
  }, [open, mode, row])

  const set = (patch: Partial<Draft>) => setDraft(d => ({ ...d, ...patch }))

  const save = () => {
    const hours = diffH(draft.from, draft.to)
    const rate = Number(draft.rate)
    const breakMin = Number(draft.breakMin)
    const patch: Partial<Shift> = {
      date: draft.date, from: draft.from, to: draft.to, hours,
      breakMin: Number.isFinite(breakMin) && breakMin > 0 ? breakMin : 0,
      rate: Number.isFinite(rate) && rate > 0 ? rate : undefined,
      workplace: draft.workplace.trim(), notes: draft.notes.trim(),
      type: draft.type, planned: draft.planned, gcalSynced: draft.gcalSynced,
    }
    if (mode === 'new') { ctx.actions.add({ ...patch, overtime: row?.overtime ?? 0 } as Omit<Shift, 'id' | 'weekday'>); toast.success(draft.gcalSynced ? 'Shift added & synced' : 'Shift added') }
    else if (row)       { ctx.actions.update(row.id, patch); toast.success('Shift updated') }
    onClose()
  }

  const cat = categoryOf(editing ? draft.type : row?.type)
  const title = mode === 'new' ? 'New shift' : editing ? 'Edit shift' : (row?.f.full ?? 'Shift')

  return (
    <BottomSheet open={open} onClose={onClose} title={title}>
      {/* category accent header strip */}
      {!editing && row && (
        <div className="sheet-cat" style={{ background: cat.soft, borderColor: cat.line }}>
          <span className="cat-dot" style={{ background: cat.color }} />
          <span style={{ fontWeight: 600 }}>{cat.label}</span>
          {row.planned && <span className="pill-plan">Planned</span>}
          <span style={{ flex: 1 }} />
          <span className={`sync-dot${row.gcalSynced ? ' on' : ''}`} />
          <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{row.gcalSynced ? 'Synced' : 'Not synced'}</span>
        </div>
      )}

      {editing ? (
        <div className="form-grid">
          <Field label="Date"><TextInput type="date" value={draft.date} onChange={v => set({ date: v })} /></Field>
          <Field label="Category"><CategoryPicker value={draft.type} onChange={t => set({ type: t })} /></Field>
          <div className="form-row">
            <Field label="From" style={{ flex: 1 }}><TextInput type="time" value={draft.from} onChange={v => set({ from: v })} /></Field>
            <Field label="To" style={{ flex: 1 }}><TextInput type="time" value={draft.to} onChange={v => set({ to: v })} /></Field>
          </div>
          <div className="form-row">
            <Field label="Duration" hint="auto" style={{ flex: 1 }}><div className="fld-readout">{diffH(draft.from, draft.to)}h</div></Field>
            <Field label="Break" hint="min" style={{ flex: 1 }}><TextInput type="text" inputMode="numeric" value={draft.breakMin} onChange={v => set({ breakMin: v.replace(/[^0-9]/g, '') })} placeholder="0" /></Field>
          </div>
          <Field label="Workplace"><TextInput value={draft.workplace} onChange={v => set({ workplace: v })} placeholder="e.g. Warehouse A" /></Field>
          <Field label="Hourly rate" hint={`default ${ctx.meta.rate} ${ctx.meta.currency}`}>
            <TextInput type="text" inputMode="decimal" value={draft.rate} onChange={v => set({ rate: v.replace(/[^0-9.]/g, '') })} placeholder={String(ctx.meta.rate)} />
          </Field>
          <Field label="Notes"><textarea className="fld-input" style={{ minHeight: 64, resize: 'vertical' }} value={draft.notes} onChange={e => set({ notes: e.target.value })} placeholder="Optional note…" /></Field>
          <button className="row-toggle" type="button" onClick={() => set({ planned: !draft.planned })}>
            <span>Planned shift</span>
            <span className={`switch${draft.planned ? ' on' : ''}`} />
          </button>
          <button className="row-toggle" type="button" onClick={() => set({ gcalSynced: !draft.gcalSynced })}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}><Icon name="sync" size={16} /> Sync to Google Calendar</span>
            <span className={`switch${draft.gcalSynced ? ' on' : ''}`} />
          </button>

          <div className="sheet-actions">
            {mode !== 'new' && <button className="btn-ghost" style={{ flex: 1 }} onClick={() => (mode === 'detail' ? setEditing(false) : onClose())}>Cancel</button>}
            <button className="cta-primary" style={{ flex: 2 }} onClick={save}>{mode === 'new' ? 'Add shift' : 'Save changes'}</button>
          </div>
        </div>
      ) : row ? (
        <>
          <div className="detail-grid">
            <DetailRow icon="clock" label="Time" value={row.f.range} />
            <DetailRow label="Duration" value={row.f.duration} />
            <DetailRow icon="coin" label="Pay" value={row.f.earnings} accent />
            <DetailRow label="Rate" value={`${row.rate ?? ctx.meta.rate} ${ctx.meta.currency}/h`} />
            <DetailRow label="Overtime" value={row.f.overtime} />
            <DetailRow label="Breaks" value={row.f.breaks} />
            <DetailRow icon="briefcase" label="Workplace" value={row.workplace || '—'} />
          </div>
          {row.notes && <div className="detail-notes">{row.notes}</div>}

          <div className="sheet-actions">
            <button className="btn-ghost" onClick={() => setEditing(true)}><Icon name="pencil" size={15} /> Edit</button>
            <button className="btn-ghost" onClick={() => { ctx.actions.duplicate(row.id); toast.success('Shift duplicated', 'copy'); onClose() }}><Icon name="copy" size={15} /> Duplicate</button>
            <button className="btn-ghost danger" onClick={() => { ctx.actions.remove(row.id); toast.toast('Shift deleted', { tone: 'danger', icon: 'trash' }); onClose() }}><Icon name="trash" size={15} /> Delete</button>
          </div>
        </>
      ) : null}
    </BottomSheet>
  )
}

function DetailRow({ label, value, icon, accent }: { label: string; value: string; icon?: any; accent?: boolean }) {
  return (
    <div className="detail-row">
      <span className="detail-k">{icon && <Icon name={icon} size={15} style={{ opacity: .7 }} />}{label}</span>
      <span className="detail-v" style={accent ? { color: 'var(--accent)', fontWeight: 700 } : undefined}>{value}</span>
    </div>
  )
}
