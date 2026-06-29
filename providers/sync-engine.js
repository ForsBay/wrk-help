// ─────────────────────────────────────────────────────────────────────────────
// SyncEngine — one place that turns a Shiftly "shift" into calendar events
// across EVERY connected account and selected calendar.
//
// This generalizes the old syncToCalendar/syncOTToCalendar (which only ever wrote
// one event to Google "primary"). It owns the event-id map so updates/deletes hit
// the exact native event in each target.
//
// Direction: app → calendars (write). Reading external events back in is phase 2;
// fetchEvents() already exists on providers, so the read path can layer on here
// without touching the write path.
// ─────────────────────────────────────────────────────────────────────────────

const MAP_KEY = 'shiftly_sync_map_v1';
// account ids ('google:foo@bar') and calendar ids ('x@group.calendar.google.com')
// both contain ':' and '@', so the target key joins them on a separator that
// cannot occur in either.
const SEP = '';

function pad2(n) { return String(n).padStart(2, '0'); }
function timeMin(hhmm) { const [h, m] = String(hhmm).split(':').map(Number); return h * 60 + m; }
function nextDate(ymd) {
  const [y, m, d] = ymd.split('-').map(Number);
  const nd = new Date(y, m - 1, d + 1);
  return `${nd.getFullYear()}-${pad2(nd.getMonth() + 1)}-${pad2(nd.getDate())}`;
}

export class SyncEngine {
  /**
   * @param {Object} deps
   * @param {import('./registry.js').ProviderRegistry} deps.registry
   * @param {import('./account-manager.js').AccountManager} deps.accounts
   * @param {Function} [deps.onError]  (account, error) => void
   */
  constructor({ registry, accounts, onError }) {
    this.registry = registry;
    this.accounts = accounts;
    this.onError = onError || (() => {});
    /** @type {Object} { 'YYYY-MM': { 'day:kind': { '<accId>SEP<calId>': eventId } } } */
    this._map = this._loadMap();
  }

  _loadMap() {
    try { return JSON.parse(localStorage.getItem(MAP_KEY) || '{}'); }
    catch (_) { return {}; }
  }
  _saveMap() {
    try { localStorage.setItem(MAP_KEY, JSON.stringify(this._map)); } catch (_) {}
  }

  _slot(mo, key) {
    if (!this._map[mo]) this._map[mo] = {};
    if (!this._map[mo][key]) this._map[mo][key] = {};
    return this._map[mo][key];
  }
  _target(accId, calId) { return accId + SEP + calId; }
  _splitTarget(tkey) {
    const i = tkey.indexOf(SEP);
    return [tkey.slice(0, i), tkey.slice(i + SEP.length)];
  }

  /** Build a normalized CalendarEvent from a shift descriptor. */
  _buildEvent({ mo, day, from, to, title, notes, colorId, calendarId, timeZone }) {
    const date = `${mo}-${pad2(day)}`;
    const endDate = timeMin(to) <= timeMin(from) ? nextDate(date) : date; // overnight shift
    const tz = timeZone || (Intl.DateTimeFormat().resolvedOptions().timeZone) || 'UTC';
    return {
      calendarId,
      title,
      description: notes || '',
      start: { dateTime: `${date}T${from}:00`, timeZone: tz },
      end:   { dateTime: `${endDate}T${to}:00`, timeZone: tz },
      colorId,
    };
  }

  /**
   * Create / update / delete the event(s) for one shift across all writable
   * targets. When `hours <= 0`, any previously-created events for this slot are
   * deleted.
   * @param {Object} shift { mo, day, kind:'work'|'ot', hours, from, to, title, notes, colorId, timeZone }
   */
  async syncShift(shift) {
    const { mo, day, kind = 'work', hours } = shift;
    const key = `${day}:${kind}`;
    const slot = this._slot(mo, key);
    const targets = this.accounts.writableTargets();

    if (!targets.length) return;

    if (hours <= 0) { await this._deleteSlot(mo, key); return; }

    const jobs = [];
    for (const account of targets) {
      const provider = this.registry.get(account.providerType);
      for (const calId of account.selectedCalendarIds) {
        jobs.push(this._upsertOne(provider, account, calId, slot, shift));
      }
    }
    // Clean up targets that are no longer selected (e.g. user unticked a calendar).
    for (const tkey of Object.keys(slot)) {
      const [accId, calId] = this._splitTarget(tkey);
      const stillSelected = targets.some(a =>
        a.id === accId && a.selectedCalendarIds.includes(calId));
      if (!stillSelected) jobs.push(this._deleteOne(accId, calId, slot, tkey));
    }
    await Promise.allSettled(jobs);
    this._saveMap();
  }

  async _upsertOne(provider, account, calId, slot, shift) {
    const tkey = this._target(account.id, calId);
    const event = this._buildEvent({ ...shift, calendarId: calId });
    try {
      const existing = slot[tkey];
      const id = existing
        ? await provider.updateEvent(account, existing, event)
        : await provider.createEvent(account, event);
      if (id) slot[tkey] = id; else delete slot[tkey];
    } catch (e) {
      this.onError(account, e);
    }
  }

  async _deleteSlot(mo, key) {
    const slot = this._map[mo] && this._map[mo][key];
    if (!slot) return;
    const jobs = Object.keys(slot).map(tkey => {
      const [accId, calId] = this._splitTarget(tkey);
      return this._deleteOne(accId, calId, slot, tkey);
    });
    await Promise.allSettled(jobs);
    delete this._map[mo][key];
    this._saveMap();
  }

  async _deleteOne(accId, calId, slot, tkey) {
    const account = this.accounts.get(accId);
    const eventId = slot[tkey];
    if (account && eventId) {
      try {
        const provider = this.registry.get(account.providerType);
        await provider.deleteEvent(account, eventId, calId);
      } catch (e) { this.onError(account, e); }
    }
    delete slot[tkey];
  }

  /** Remove every calendar event for a given day (work + overtime). */
  async removeDay(mo, day) {
    await Promise.allSettled([
      this._deleteSlot(mo, `${day}:work`),
      this._deleteSlot(mo, `${day}:ot`),
    ]);
  }

  /** Bulk re-sync helper. `shifts` is an array of shift descriptors. */
  async syncMany(shifts) {
    for (const s of shifts) {
      // sequential to avoid hammering token refresh / rate limits
      // eslint-disable-next-line no-await-in-loop
      await this.syncShift(s);
    }
  }

  /** Drop all local mapping (e.g. after disconnecting every account). */
  clearMap() { this._map = {}; this._saveMap(); }

  /**
   * One-time import of the legacy single-account map (S.calIds) into a target
   * account so existing users keep their already-created Google events.
   * @param {Object} legacyCalIds  { 'YYYY-MM': { day|`${day}_ot`: eventId } }
   * @param {string} accountId
   * @param {string} calendarId
   */
  importLegacyMap(legacyCalIds, accountId, calendarId = 'primary') {
    if (!legacyCalIds) return;
    const t = this._target(accountId, calendarId);
    for (const mo in legacyCalIds) {
      for (const dayKey in legacyCalIds[mo]) {
        const isOt = dayKey.endsWith('_ot');
        const day = isOt ? dayKey.slice(0, -3) : dayKey;
        const slotKey = `${day}:${isOt ? 'ot' : 'work'}`;
        this._slot(mo, slotKey)[t] = legacyCalIds[mo][dayKey];
      }
    }
    this._saveMap();
  }
}
