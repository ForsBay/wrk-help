'use client'

// Right-panel inspector for the selected shift. Pure presentation over the shared
// ShiftRow; every mutation goes through the injected actions (duplicate/remove/
// update) — no business logic here.
import { useState } from 'react'
import type { ShiftsContext, ShiftRow } from '../shifts/useShifts'
import { Icon } from '../../ui/Icon'

export function ShiftInspector({ row, actions }: { row: ShiftRow; actions: ShiftsContext['actions'] }) {
  const [editing, setEditing] = useState(false)

  return (
    <div className="insp">
      <div className="insp-head">
        <div>
          <div className="insp-date">{row.f.full}</div>
          {row.planned && <span className="insp-badge">PLANNED</span>}
        </div>
        <span className={`gcal-dot${row.gcalSynced ? ' on' : ''}`} title={row.gcalSynced ? 'Synced to Google Calendar' : 'Not synced'} />
      </div>

      <Field label="Time"        value={row.f.range} icon="clock" />
      <Field label="Duration"    value={row.f.duration} />
      <Field label="Pay"         value={row.f.earnings} icon="coin" accent />
      <Field label="Overtime"    value={row.f.overtime} />
      <Field label="Breaks"      value={row.f.breaks} />
      <Field label="Workplace"   value={row.workplace || '—'} />
      <Field label="Google Calendar" value={row.gcalSynced ? 'Synced' : 'Off'} />

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
        <button className="ghost-btn" onClick={() => setEditing(v => !v)}><Icon name="gear" size={15} /> Edit</button>
        <button className="ghost-btn" onClick={() => actions.duplicate(row.id)}><Icon name="plus" size={15} /> Duplicate</button>
        <button className="ghost-btn danger" onClick={() => actions.remove(row.id)}>Delete</button>
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
