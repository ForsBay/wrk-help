// ─────────────────────────────────────────────────────────────────────────────
// Calendar Providers — composition root & app bridge.
//
// Wires the registry, account manager and sync engine together and exposes a
// single, framework-agnostic surface on `window.__calendars` that the (classic-
// script) app calls. This mirrors the existing `window.__fb` bridge pattern, so
// the ES-module layer and the legacy app script interop cleanly with no bundler.
// ─────────────────────────────────────────────────────────────────────────────

import { ProviderRegistry } from './registry.js';
import { AccountManager } from './account-manager.js';
import { SyncEngine } from './sync-engine.js';
import { AccountStatus, ProviderError } from './types.js';
import { detectPlatform, recommendedProviderOrder } from './platform.js';

import { GoogleProvider } from './google.js';
import { OutlookProvider } from './outlook.js';
import { AppleProvider } from './apple.js';
import { SamsungProvider } from './samsung.js';
import { ICSProvider } from './ics.js';

// ── Compose ───────────────────────────────────────────────────────────────────
const ctx = { config: () => (window.__shiftlyConfig || {}) };
const registry = new ProviderRegistry(ctx);
registry
  .register(GoogleProvider)
  .register(OutlookProvider)
  .register(AppleProvider)
  .register(SamsungProvider)
  .register(ICSProvider);

const accounts = new AccountManager();

let lastError = null;
const sync = new SyncEngine({
  registry,
  accounts,
  onError(account, err) {
    lastError = { accountId: account && account.id, code: err.code || 'error', message: err.message };
    // Surface to the app exactly like the legacy calendar error channel.
    if (window.__app && window.__app.setCalendarError) window.__app.setCalendarError(lastError.code);
  },
});

// ── Public bridge ───────────────────────────────────────────────────────────
const api = {
  // ----- catalog / discovery -----
  platform: detectPlatform(),
  recommendedOrder: () => recommendedProviderOrder(),
  getCatalog: () => registry.catalogForPlatform(),
  getProviderMeta: (type) => registry.catalog().find(p => p.type === type) || null,

  // ----- accounts -----
  getAccounts: () => accounts.list(),
  getAccountsByProvider: (type) => accounts.listByProvider(type),
  hasAnyAccount: () => accounts.hasAny(),
  isEnabled: () => accounts.writableTargets().length > 0,
  lastError: () => lastError,
  onChange: (fn) => accounts.onChange(fn),

  /**
   * Interactive connect. Returns the connected account, or throws a ProviderError
   * the caller can show. Auto-selects the primary calendar on success.
   */
  async connect(providerType) {
    lastError = null;
    const provider = registry.get(providerType);
    try {
      const account = await provider.connect();
      account.status = AccountStatus.CONNECTED;
      accounts.upsert(account);
      return account;
    } catch (err) {
      lastError = { providerType, code: err.code || 'error', message: err.message };
      throw err;
    }
  },

  async disconnect(accountId) {
    const account = accounts.get(accountId);
    if (!account) return;
    try { await registry.get(account.providerType).disconnect(account); } catch (_) {}
    accounts.remove(accountId);
    if (!accounts.hasAny()) sync.clearMap();
  },

  /** Fetch the calendars for an account (used by the calendar-picker UI). */
  async listCalendars(accountId) {
    const account = accounts.get(accountId);
    if (!account) return [];
    const provider = registry.get(account.providerType);
    try {
      const cals = await provider.listCalendars(account);
      if (account.status === AccountStatus.EXPIRED) accounts.update(accountId, { status: AccountStatus.CONNECTED });
      return cals;
    } catch (err) {
      accounts.update(accountId, { status: AccountStatus.ERROR });
      lastError = { accountId, code: err.code || 'error', message: err.message };
      throw err;
    }
  },

  setSelectedCalendars: (accountId, ids) => accounts.setSelectedCalendars(accountId, ids),

  /**
   * Non-interactive migration helper: ensure a primary-calendar Google account
   * that reuses the token from the existing Firebase Google sign-in. Lets legacy
   * `calSync` users keep syncing with no extra consent popup.
   * @param {{email?:string}} [user]
   */
  adoptFirebaseGoogle(user) {
    const id = 'google:primary';
    const existing = accounts.get(id);
    if (existing) return existing;
    const account = {
      id,
      providerType: 'google',
      label: user && user.email ? `Google · ${user.email}` : 'Google',
      email: (user && user.email) || '',
      selectedCalendarIds: ['primary'],
      status: AccountStatus.CONNECTED,
      auth: { mode: 'firebase', email: (user && user.email) || '' },
    };
    return accounts.upsert(account);
  },

  // ----- sync (write) -----
  syncShift: (shift) => sync.syncShift(shift),
  removeDay: (mo, day) => sync.removeDay(mo, day),
  syncMany: (shifts) => sync.syncMany(shifts),

  // ----- migration -----
  importLegacy: (legacyCalIds, accountId, calendarId) => sync.importLegacyMap(legacyCalIds, accountId, calendarId),

  // expose internals for advanced/debug use
  _registry: registry, _accounts: accounts, _sync: sync,
};

window.__calendars = api;

// Let the app know the layer is live (it may have rendered before this module ran).
window.dispatchEvent(new CustomEvent('calendars:ready'));

export default api;
