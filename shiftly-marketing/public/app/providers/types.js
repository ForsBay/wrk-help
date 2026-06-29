// ─────────────────────────────────────────────────────────────────────────────
// Calendar Providers — core contract & domain types
//
// This is the universal layer. NOTHING here is Google-specific. Every concrete
// provider (Google, Outlook, Apple, Samsung, ICS, …) implements `CalendarProvider`
// so the rest of the app never has to know which backend it is talking to.
//
// Design goals:
//   • Adding a new provider = one new file implementing this contract.
//   • Capabilities/availability are declared as data, so the UI can render an
//     honest state (e.g. "requires a server", "not available on web") instead of
//     faking a "Connect" button that does nothing.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * What a provider can do. Declared per concrete provider so the SyncEngine and
 * UI can adapt without branching on provider type.
 * @enum {string}
 */
export const Capability = {
  OAUTH:          'oauth',          // can authenticate a user-owned account
  LIST_CALENDARS: 'listCalendars',  // can enumerate the account's calendars
  WRITE:          'write',          // can create / update / delete events
  READ:           'read',           // can fetch external events (for 2-way sync)
  TWO_WAY:        'twoWaySync',     // supports full bidirectional reconciliation
};

/**
 * Honest availability of a provider in the current (web/client-only) runtime.
 * Drives the Integrations UI: only AVAILABLE / REQUIRES_CONFIG providers expose a
 * working "Connect" action.
 * @enum {string}
 */
export const Availability = {
  AVAILABLE:         'available',          // fully works in the browser right now
  REQUIRES_CONFIG:   'requires_config',    // works, but needs setup (client id, app reg.)
  REQUIRES_BACKEND:  'requires_backend',   // needs a server proxy (CalDAV, ICS CORS, refresh tokens)
  UNAVAILABLE:       'unavailable',        // no public web API exists for this platform
};

/**
 * Connection lifecycle state of a single account.
 * @enum {string}
 */
export const AccountStatus = {
  DISCONNECTED: 'disconnected',
  CONNECTING:   'connecting',
  CONNECTED:    'connected',
  ERROR:        'error',
  EXPIRED:      'expired', // token expired, needs silent/interactive refresh
};

/**
 * @typedef {Object} CalendarRef
 * @property {string}  id          Provider-native calendar id (e.g. 'primary').
 * @property {string}  name        Human label.
 * @property {string}  [color]     CSS color, if the provider exposes one.
 * @property {boolean} [primary]   True for the account's default calendar.
 * @property {boolean} [writable]  False for read-only (e.g. subscribed/ICS) calendars.
 */

/**
 * Normalized event shape used across ALL providers. Each provider translates to
 * and from its own native format. Times are wall-clock + IANA timezone so DST is
 * handled by the calendar backend.
 * @typedef {Object} CalendarEvent
 * @property {string}  [id]          Provider-native event id (absent when creating).
 * @property {string}  calendarId    Target calendar within the account.
 * @property {string}  title
 * @property {string}  [description]
 * @property {{ dateTime: string, timeZone: string }} start  e.g. '2026-06-24T09:00:00'
 * @property {{ dateTime: string, timeZone: string }} end
 * @property {string}  [colorId]     Provider-native color hint (best-effort).
 * @property {Object}  [meta]        Free-form provider extras (never relied upon by core).
 */

/**
 * @typedef {Object} ConnectedAccount
 * @property {string} id           Stable local id (uuid-ish), survives reloads.
 * @property {string} providerType One of the registry provider types.
 * @property {string} label        User-facing label, e.g. "Personal Google".
 * @property {string} [email]      Account email when known.
 * @property {string[]} selectedCalendarIds  Calendars chosen to sync to.
 * @property {AccountStatus} status
 * @property {Object} [auth]       Provider-managed token bag (provider-specific).
 */

/**
 * The contract every concrete provider implements. Methods that a provider does
 * not support (per its `capabilities`) should throw `NotSupportedError` so callers
 * fail loudly rather than silently no-op.
 *
 * A provider instance is *stateless w.r.t. accounts*: account data is passed in,
 * and token storage is delegated to the AccountManager via the provided `ctx`.
 * This keeps providers pure and makes multi-account trivial.
 */
export class CalendarProvider {
  /** @type {string}  Unique machine type, e.g. 'google'. */
  static type = 'base';
  /** @type {string}  Display name. */
  static label = 'Calendar';
  /** @type {string}  Emoji/asset hint for the UI. */
  static icon = '📅';
  /** @type {Availability[keyof Availability]} */
  static availability = Availability.UNAVAILABLE;
  /** @type {string[]}  Subset of Capability values. */
  static capabilities = [];
  /** @type {string}  Short honest note shown in the UI when not fully usable. */
  static note = '';

  /**
   * @param {Object} ctx  Injected runtime helpers (config, token persistence,
   *                       network helpers). Concrete providers declare what they read.
   */
  constructor(ctx = {}) {
    this.ctx = ctx;
  }

  /** @returns {boolean} Can this provider be connected in the current runtime? */
  static get connectable() {
    return this.availability === Availability.AVAILABLE ||
           this.availability === Availability.REQUIRES_CONFIG;
  }

  /** @returns {boolean} */
  supports(capability) {
    return this.constructor.capabilities.includes(capability);
  }

  // ── Auth lifecycle ─────────────────────────────────────────────────────────
  /**
   * Start an interactive connect flow (account chooser / consent).
   * @returns {Promise<ConnectedAccount>}
   */
  async connect() { throw new NotSupportedError(this.constructor.type, 'connect'); }

  /** @param {ConnectedAccount} account @returns {Promise<void>} */
  async disconnect(account) { /* default: nothing to revoke */ }

  /**
   * Ensure a valid access token, refreshing if needed.
   * @param {ConnectedAccount} account
   * @returns {Promise<boolean>} true when an authorized call can proceed.
   */
  async ensureAccess(account) { throw new NotSupportedError(this.constructor.type, 'ensureAccess'); }

  // ── Calendars ────────────────────────────────────────────────────────────────
  /** @param {ConnectedAccount} account @returns {Promise<CalendarRef[]>} */
  async listCalendars(account) { throw new NotSupportedError(this.constructor.type, 'listCalendars'); }

  // ── Events (write path) ──────────────────────────────────────────────────────
  /** @returns {Promise<string|null>} created event id */
  async createEvent(account, event) { throw new NotSupportedError(this.constructor.type, 'createEvent'); }
  /** @returns {Promise<string|null>} event id */
  async updateEvent(account, eventId, event) { throw new NotSupportedError(this.constructor.type, 'updateEvent'); }
  /** @returns {Promise<void>} */
  async deleteEvent(account, eventId, calendarId) { throw new NotSupportedError(this.constructor.type, 'deleteEvent'); }

  // ── Events (read path — phase 2 of two-way sync) ─────────────────────────────
  /** @returns {Promise<CalendarEvent[]>} */
  async fetchEvents(account, { calendarId, timeMin, timeMax } = {}) {
    throw new NotSupportedError(this.constructor.type, 'fetchEvents');
  }
}

/** Thrown when a caller invokes a capability the provider doesn't declare. */
export class NotSupportedError extends Error {
  constructor(type, op) {
    super(`Provider "${type}" does not support "${op}"`);
    this.name = 'NotSupportedError';
    this.providerType = type;
    this.op = op;
  }
}

/** Normalized auth/transport error so the UI can show one consistent message. */
export class ProviderError extends Error {
  constructor(code, message, { retriable = false } = {}) {
    super(message || code);
    this.name = 'ProviderError';
    this.code = code;          // e.g. 'auth_failed', 'token_expired', 'http_401'
    this.retriable = retriable;
  }
}
