// ─────────────────────────────────────────────────────────────────────────────
// AccountManager — the registry of CONNECTED accounts (not provider types).
//
// Holds many accounts at once: "Personal Google", "Work Google", "Apple", …
// Persists only serializable METADATA (id, type, label, email, selected
// calendars, status). Access tokens are intentionally NOT persisted — they live
// in the provider instance in memory and are re-acquired on demand, matching the
// existing app's session-only token policy (and keeping secrets out of storage).
// ─────────────────────────────────────────────────────────────────────────────

import { AccountStatus } from './types.js';

const STORE_KEY = 'shiftly_integrations_v1';

export class AccountManager {
  constructor() {
    /** @type {import('./types.js').ConnectedAccount[]} */
    this._accounts = [];
    /** @type {Set<Function>} */
    this._listeners = new Set();
    this._load();
  }

  // ── Persistence (metadata only) ──────────────────────────────────────────────
  _load() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
      if (Array.isArray(raw.accounts)) {
        // Never trust a persisted "connected" — tokens are gone after reload, so
        // start every account as EXPIRED until ensureAccess refreshes it.
        this._accounts = raw.accounts.map(a => ({
          ...a,
          status: a.status === AccountStatus.DISCONNECTED
            ? AccountStatus.DISCONNECTED
            : AccountStatus.EXPIRED,
        }));
      }
    } catch (_) { this._accounts = []; }
  }

  _persist() {
    try {
      const accounts = this._accounts.map(a => ({
        id: a.id,
        providerType: a.providerType,
        label: a.label,
        email: a.email || '',
        selectedCalendarIds: a.selectedCalendarIds || [],
        status: a.status,
        auth: a.auth ? { mode: a.auth.mode, email: a.auth.email || '' } : undefined, // no tokens
      }));
      localStorage.setItem(STORE_KEY, JSON.stringify({ accounts }));
    } catch (_) {}
    this._emit();
  }

  // ── Change notifications (UI re-render hook) ─────────────────────────────────
  onChange(fn) { this._listeners.add(fn); return () => this._listeners.delete(fn); }
  _emit() { this._listeners.forEach(fn => { try { fn(this.list()); } catch (_) {} }); }

  // ── CRUD ──────────────────────────────────────────────────────────────────────
  /** @returns {import('./types.js').ConnectedAccount[]} */
  list() { return this._accounts.slice(); }

  /** @returns {import('./types.js').ConnectedAccount[]} */
  listByProvider(type) { return this._accounts.filter(a => a.providerType === type); }

  get(id) { return this._accounts.find(a => a.id === id) || null; }

  /** Add or replace (by id). De-dupes so connecting the same account twice merges. */
  upsert(account) {
    const i = this._accounts.findIndex(a => a.id === account.id);
    if (i === -1) this._accounts.push(account);
    else this._accounts[i] = { ...this._accounts[i], ...account };
    this._persist();
    return account;
  }

  update(id, patch) {
    const a = this.get(id);
    if (!a) return null;
    Object.assign(a, patch);
    this._persist();
    return a;
  }

  remove(id) {
    this._accounts = this._accounts.filter(a => a.id !== id);
    this._persist();
  }

  setSelectedCalendars(id, calendarIds) {
    return this.update(id, { selectedCalendarIds: calendarIds.slice() });
  }

  /**
   * Accounts that can currently receive writes: connected/expired (refreshable),
   * with at least one selected calendar. EXPIRED is included because ensureAccess
   * will refresh the token at write time.
   */
  writableTargets() {
    return this._accounts.filter(a =>
      (a.status === AccountStatus.CONNECTED || a.status === AccountStatus.EXPIRED) &&
      (a.selectedCalendarIds || []).length > 0);
  }

  hasAny() { return this._accounts.length > 0; }
}
