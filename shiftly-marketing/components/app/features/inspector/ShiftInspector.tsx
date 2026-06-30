'use client'

// Right-panel inspector for the selected shift. Pure presentation over the shared
// ShiftRow; every mutation goes through the injected actions (duplicate/remove/
// update) — no business logic here.
import { useState } from 'react'
import type { ShiftsContext, ShiftRow } from '../shifts/useShifts'
import { categoryOf } from '../shifts/categories'
import { Icon } from '../../ui/Icon'
import { useToast } from '../../ui/Toast'

export function ShiftInspector({ row, actions }: { row: ShiftRow; actions: ShiftsContext['actions'] }) {
  const [editing, setEditing] = useState(false)
  const cat = categoryOf(row.type)
  const toast = useToast()

  return (
    <div className="insp">
      <div className="insp-head">
        <div>
          <div className="insp-date">{row.f.full}</div>
          <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
            <span className="insp-cat" style={{ background: cat.soft, borderColor: cat.line }}>
              <span className="cat-dot" style={{ background: cat.color }} />{cat.label}
            </span>
            {row.planned && <span className="insp-badge">PLANNED</span>}
          </div>
        </div>
        <span className={`gcal-dot${row.gcalSynced ? ' on' : ''}`} title={row.gcalSynced ? 'Synced to Google Calendar' : 'Not synced'} />
      </div>

      <Field label="Time"        value={row.f.range} icon="clock" />
      <Field label="Duration"    value={row.f.duration} />
      <Field label="Pay"         value={row.f.earnings} icon="coin" accent />
      <Field label="Overtime"    value={row.f.overtime} />
      <Field label="Breaks"      value={row.f.breaks} />
      <Field label="Workplace"   value={row.workplace || '—'} icon="briefcase" />

      {/* Google Calendar — an actionable row, not just a read-out. */}
      <button className="insp-sync" onClick={() => { actions.update(row.id, { gcalSynced: !row.gcalSynced }); toast.success(row.gcalSynced ? 'Removed from Google Calendar' : 'Synced to Google Calendar', 'sync') }}>
        <span className="insp-field-k" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span className={`sync-dot${row.gcalSynced ? ' on' : ''}`} /> Google Calendar
        </span>
        <span className="insp-sync-act">{row.gcalSynced ? 'Synced' : 'Sync now'}</span>
      </button>

      <div className="insp-label">Notes</div>
      {editing ? (
        <textarea
          className="insp-notes"
          defaultValue={row.notes || ''}
          autoFocus
          onBlur={(e) => { actions.update(row.id, { notes: e.target.value }); setEditing(false) }}
        />
      ) : (
        <div className="insp-notes-ro" onClick={() => setEditing(true)}>{row.notes || 'Add a note…'}</div>
      )}

      <div className="insp-actions">
        <button className="ghost-btn" onClick={() => setEditing(v => !v)}><Icon name="pencil" size={15} /> Edit</button>
        <button className="ghost-btn" onClick={() => { actions.duplicate(row.id); toast.success('Shift duplicated', 'copy') }}><Icon name="copy" size={15} /> Duplicate</button>
        <button className="ghost-btn danger" onClick={() => { actions.remove(row.id); toast.toast('Shift deleted', { tone: 'danger', icon: 'trash' }) }}>Delete</button>
      </div>
    </div>
  )
}

function Field({ label, value, icon, accent }: { label: string; value: string; icon?: any; accent?: boolean }) {
  return (
    <div className="insp-field">
      <span className="insp-field-k">{label}</span>
      <span className="insp-field-v" style={accent ? { color: 'var(--accent)', fontWeight: 600 } : undefined}>{value}</span>
    </div>
  )
}
