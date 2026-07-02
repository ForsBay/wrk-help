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
import { useT } from '@/lib/appI18n'

export type SheetMode = 'detail' | 'edit' | 'new' | null

// minutes between two HH:MM marks, wrapping past midnight (night shifts)
const diffH = (from: string, to: string) => {
  const [fh, fm] = from.split(':').map(Number)
  const [th, tm] = to.split(':').map(Number)
  let m = (th * 60 + tm) - (fh * 60 + fm)
  if (m <= 0) m += 24 * 60
  return Math.round((m / 60) * 10) / 10
}

// LOCAL calendar date (not UTC) so "today" matches the user's timezone.
const todayISO = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

interface Draft {
  date: string; from: string; to: string; hours: string; breakMin: string; rate: string
  workplace: string; notes: string; type: ShiftType; planned: boolean; gcalSynced: boolean
}
const draftOf = (r?: ShiftRow | null, presetDate?: string): Draft => {
  const from = r?.from ?? '09:00'
  const to = r?.to ?? '17:00'
  return {
    date: r?.date ?? presetDate ?? todayISO(),
    from, to,
    hours: r?.hours != null ? String(r.hours) : String(diffH(from, to)),
    breakMin: r?.breakMin != null ? String(r.breakMin) : '',
    rate: r?.rate != null ? String(r.rate) : '',
    workplace: r?.workplace ?? '',
    notes: r?.notes ?? '',
    type: r?.type ?? 'regular',
    planned: r?.planned ?? true,
    gcalSynced: r?.gcalSynced ?? false,
  }
}

export function ShiftSheet({ mode, row, ctx, onClose, presetDate }: {
  mode: SheetMode
  row: ShiftRow | null
  ctx: ShiftsContext
  onClose: () => void
  presetDate?: string   // pre-fill the date when creating from an empty calendar day
}) {
  const open = mode !== null
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<Draft>(draftOf(row))
  const toast = useToast()
  const t = useT()

  // Reset internal state whenever the sheet (re)opens for a different target.
  useEffect(() => {
    if (open) { setEditing(mode === 'new' || mode === 'edit'); setDraft(draftOf(row, presetDate)) }
  }, [open, mode, row, presetDate])

  const set = (patch: Partial<Draft>) => setDraft(d => ({ ...d, ...patch }))
  // Editing a time re-derives the (auto) duration; editing duration directly is kept.
  const setFrom = (v: string) => setDraft(d => ({ ...d, from: v, hours: String(diffH(v, d.to)) }))
  const setTo = (v: string) => setDraft(d => ({ ...d, to: v, hours: String(diffH(d.from, v)) }))

  const save = () => {
    const hours = Number(draft.hours) > 0 ? Number(draft.hours) : diffH(draft.from, draft.to)
    const rate = Number(draft.rate)
    const breakMin = Number(draft.breakMin)
    const patch: Partial<Shift> = {
      date: draft.date, from: draft.from, to: draft.to, hours,
      breakMin: Number.isFinite(breakMin) && breakMin > 0 ? breakMin : 0,
      rate: Number.isFinite(rate) && rate > 0 ? rate : undefined,
      workplace: draft.workplace.trim(), notes: draft.notes.trim(),
      type: draft.type, planned: draft.planned, gcalSynced: draft.gcalSynced,
    }
    if (mode === 'new') { ctx.actions.add({ ...patch, overtime: row?.overtime ?? 0 } as Omit<Shift, 'id' | 'weekday'>); toast.success(draft.gcalSynced ? t('shiftAddedSynced') : t('shiftAdded')) }
    else if (row)       { ctx.actions.update(row.id, patch); toast.success(t('shiftUpdated')) }
    onClose()
  }

  const cat = categoryOf(editing ? draft.type : row?.type)
  const title = mode === 'new' ? t('newShift') : editing ? t('edit') : (row?.f.full ?? t('shiftTitle'))

  return (
    <BottomSheet open={open} onClose={onClose} title={title}>
      {/* category accent header strip */}
      {!editing && row && (
        <div className="sheet-cat" style={{ background: cat.soft, borderColor: cat.line }}>
          <span className="cat-dot" style={{ background: cat.color }} />
          <span style={{ fontWeight: 600 }}>{t(cat.i18nKey as any)}</span>
          {row.planned && <span className="pill-plan">{t('planned')}</span>}
          <span style={{ flex: 1 }} />
          <span className={`sync-dot${row.gcalSynced ? ' on' : ''}`} />
          <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{row.gcalSynced ? t('synced') : t('notSynced')}</span>
        </div>
      )}

      {editing ? (
        <div className="form-grid">
          <Field label={t('date')}><TextInput type="date" value={draft.date} onChange={v => set({ date: v })} /></Field>
          <Field label={t('category')}><CategoryPicker value={draft.type} onChange={ty => set({ type: ty })} /></Field>
          <div className="form-row">
            <Field label={t('from')} style={{ flex: 1 }}><TextInput type="time" value={draft.from} onChange={setFrom} /></Field>
            <Field label={t('to')} style={{ flex: 1 }}><TextInput type="time" value={draft.to} onChange={setTo} /></Field>
          </div>
          <div className="form-row">
            <Field label={t('duration')} hint={t('hrs')} style={{ flex: 1 }}>
              <div className="dur-input">
                <TextInput type="text" inputMode="decimal" value={draft.hours} onChange={v => set({ hours: v.replace(/[^0-9.]/g, '') })} placeholder="8" />
                <span className="dur-suffix">h</span>
              </div>
            </Field>
            <Field label={t('breakLabel')} hint={t('min')} style={{ flex: 1 }}><TextInput type="text" inputMode="numeric" value={draft.breakMin} onChange={v => set({ breakMin: v.replace(/[^0-9]/g, '') })} placeholder="0" /></Field>
          </div>
          <Field label={t('workplace')}><TextInput value={draft.workplace} onChange={v => set({ workplace: v })} placeholder={t('egWarehouse')} /></Field>
          <Field label={t('hourlyRate')} hint={`${t('default')} ${ctx.meta.rate} ${ctx.meta.currency}`}>
            <TextInput type="text" inputMode="decimal" value={draft.rate} onChange={v => set({ rate: v.replace(/[^0-9.]/g, '') })} placeholder={String(ctx.meta.rate)} />
          </Field>
          <Field label={t('notesField')}><textarea className="fld-input" style={{ minHeight: 64, resize: 'vertical' }} value={draft.notes} onChange={e => set({ notes: e.target.value })} placeholder={t('optionalNote')} /></Field>
          <button className="row-toggle" type="button" onClick={() => set({ planned: !draft.planned })}>
            <span>{t('plannedShift')}</span>
            <span className={`switch${draft.planned ? ' on' : ''}`} />
          </button>
          <button className="row-toggle" type="button" onClick={() => set({ gcalSynced: !draft.gcalSynced })}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}><Icon name="sync" size={16} /> {t('syncGoogleCal')}</span>
            <span className={`switch${draft.gcalSynced ? ' on' : ''}`} />
          </button>

          <div className="sheet-actions">
            {mode !== 'new' && <button className="btn-ghost" style={{ flex: 1 }} onClick={() => (mode === 'detail' ? setEditing(false) : onClose())}>{t('cancel')}</button>}
            <button className="cta-primary" style={{ flex: 2 }} onClick={save}>{mode === 'new' ? t('addShift') : t('save')}</button>
          </div>
        </div>
      ) : row ? (
        <>
          <div className="detail-grid">
            <DetailRow icon="clock" label={t('time')} value={row.f.range} />
            <DetailRow label={t('duration')} value={row.f.duration} />
            <DetailRow icon="coin" label={t('pay')} value={row.f.earnings} accent />
            <DetailRow label={t('rate')} value={`${row.rate ?? ctx.meta.rate} ${ctx.meta.currency}/h`} />
            <DetailRow label={t('overtime')} value={row.f.overtime} />
            <DetailRow label={t('breaks')} value={row.f.breaks} />
            <DetailRow icon="briefcase" label={t('workplace')} value={row.workplace || '—'} />
          </div>
          {row.notes && <div className="detail-notes">{row.notes}</div>}

          <div className="sheet-actions">
            <button className="btn-ghost" onClick={() => setEditing(true)}><Icon name="pencil" size={15} /> {t('edit')}</button>
            <button className="btn-ghost" onClick={() => { ctx.actions.duplicate(row.id); toast.success(t('shiftDuplicated'), 'copy'); onClose() }}><Icon name="copy" size={15} /> {t('duplicate')}</button>
            <button className="btn-ghost danger" onClick={() => { ctx.actions.remove(row.id); toast.toast(t('shiftDeleted'), { tone: 'danger', icon: 'trash' }); onClose() }}><Icon name="trash" size={15} /> {t('delete')}</button>
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
