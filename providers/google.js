// ─────────────────────────────────────────────────────────────────────────────
// GoogleProvider — full Google Calendar implementation.
//
// Auth: Google Identity Services (GIS) OAuth token client. GIS is independent of
// Firebase Auth, which is what makes true MULTI-ACCOUNT possible (personal +
// work Google), each with its own access token. Firebase stays responsible only
// for the app identity + cloud data sync.
//
// Backward-compat: if no OAuth client id is configured yet, a single "primary"
// account can still operate using the calendar token already issued by the
// Firebase Google sign-in (bridged via window.__fb.getCalendarToken). So the
// currently-shipping one-account sync never regresses.
//
// API: Google Calendar REST v3.
// ─────────────────────────────────────────────────────────────────────────────

import {
  CalendarProvider, Capability, Availability, AccountStatus, ProviderError,
} from './types.js';

const CAL_BASE = 'https://www.googleapis.com/calendar/v3';
const SCOPE = 'https://www.googleapis.com/auth/calendar.events.owned https://www.googleapis.com/auth/calendar.readonly';
const GIS_SRC = 'https://accounts.google.com/gsi/client';

// Map Google's calendar color ids → our generic hints are passed straight through;
// Google understands colorId directly, so no translation is needed.

export class GoogleProvider extends CalendarProvider {
  static type = 'google';
  static label = 'Google Calendar';
  static icon = '📆';
  static capabilities = [
    Capability.OAUTH, Capability.LIST_CALENDARS, Capability.WRITE, Capability.READ,
  ];

  // AVAILABLE when a GIS client id is configured (multi-account) OR when the
  // Firebase bridge can supply a primary-account token. Resolved at runtime.
  static get availability() {
    const cfg = (typeof window !== 'undefined' && window.__shiftlyConfig) || {};
    const hasClientId = !!(cfg.google && cfg.google.clientId &&
      !/YOUR_|REPLACE/i.test(cfg.google.clientId));
    const hasFirebaseBridge = typeof window !== 'undefined' &&
      window.__fb && typeof window.__fb.ensureCalendarAccess === 'function';
    return (hasClientId || hasFirebaseBridge)
      ? Availability.AVAILABLE
      : Availability.REQUIRES_CONFIG;
  }

  static note = 'Connect personal and work Google accounts; choose which calendars to sync.';

  constructor(ctx = {}) {
    super(ctx);
    /** @type {Map<string, {token:string, exp:number}>} accountId → token cache */
    this._tokens = new Map();
    this._tokenClient = null;   // shared GIS token client (account picked per request)
    this._gisLoading = null;    // de-dupe the script load
  }

  get _clientId() {
    const cfg = (typeof window !== 'undefined' && window.__shiftlyConfig) || {};
    return (cfg.google && cfg.google.clientId) || '';
  }

  get _gisConfigured() {
    return !!this._clientId && !/YOUR_|REPLACE/i.test(this._clientId);
  }

  // ── GIS bootstrap ────────────────────────────────────────────────────────────
  _loadGis() {
    if (typeof window === 'undefined') return Promise.reject(new ProviderError('no_window', 'No window'));
    if (window.google && window.google.accounts && window.google.accounts.oauth2) return Promise.resolve();
    if (this._gisLoading) return this._gisLoading;
    this._gisLoading = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = GIS_SRC; s.async = true; s.defer = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new ProviderError('gis_load_failed', 'Could not load Google Identity Services'));
      document.head.appendChild(s);
    });
    return this._gisLoading;
  }

  /**
   * Run the interactive GIS consent for a (possibly new) account.
   * @param {string} [loginHint] email to pre-select an account
   * @returns {Promise<{token:string, exp:number}>}
   */
  async _requestToken({ loginHint, prompt = '' } = {}) {
    await this._loadGis();
    return new Promise((resolve, reject) => {
      try {
        const client = window.google.accounts.oauth2.initTokenClient({
          client_id: this._clientId,
          scope: SCOPE,
          login_hint: loginHint || undefined,
          prompt, // '' = silent if possible, 'consent'/'select_account' to force UI
          callback: (resp) => {
            if (resp && resp.access_token) {
              resolve({
                token: resp.access_token,
                exp: Date.now() + (Number(resp.expires_in || 3600) - 120) * 1000,
              });
            } else {
              reject(new ProviderError('auth_failed', (resp && resp.error) || 'No access token'));
            }
          },
          error_callback: (err) => reject(new ProviderError('auth_failed', (err && err.type) || 'consent failed')),
        });
        client.requestAccessToken({ prompt });
      } catch (e) {
        reject(new ProviderError('auth_failed', e.message));
      }
    });
  }

  // ── Auth lifecycle ─────────────────────────────────────────────────────────
  async connect() {
    // Path A — full multi-account via GIS.
    if (this._gisConfigured) {
      // Force the account chooser so the user can add a *second* Google account.
      const { token, exp } = await this._requestToken({ prompt: 'select_account consent' });
      const profile = await this._fetchTokenProfile(token);
      const id = `google:${profile.email || Date.now()}`;
      this._tokens.set(id, { token, exp });
      return {
        id,
        providerType: GoogleProvider.type,
        label: profile.email ? `Google · ${profile.email}` : 'Google',
        email: profile.email || '',
        selectedCalendarIds: ['primary'],
        status: AccountStatus.CONNECTED,
        auth: { mode: 'gis', email: profile.email || '' },
      };
    }

    // Path B — backward-compat single account through the Firebase bridge.
    if (window.__fb && typeof window.__fb.ensureCalendarAccess === 'function') {
      const ok = await window.__fb.ensureCalendarAccess();
      if (!ok) throw new ProviderError('auth_failed', 'Calendar consent was not granted');
      const user = (window.__app && window.__app.getUser && window.__app.getUser()) || {};
      const id = 'google:primary';
      return {
        id,
        providerType: GoogleProvider.type,
        label: user.email ? `Google · ${user.email}` : 'Google (primary)',
        email: user.email || '',
        selectedCalendarIds: ['primary'],
        status: AccountStatus.CONNECTED,
        auth: { mode: 'firebase', email: user.email || '' },
      };
    }

    throw new ProviderError('requires_config',
      'Google sign-in is not available. Configure window.__shiftlyConfig.google.clientId.');
  }

  async disconnect(account) {
    const cached = this._tokens.get(account.id);
    if (cached && cached.token && window.google && window.google.accounts) {
      try { window.google.accounts.oauth2.revoke(cached.token, () => {}); } catch (_) {}
    }
    this._tokens.delete(account.id);
  }

  async ensureAccess(account) {
    const cached = this._tokens.get(account.id);
    if (cached && Date.now() < cached.exp) return true;

    // Firebase-bridged primary account: delegate token freshness to the bridge.
    if (account.auth && account.auth.mode === 'firebase') {
      const ok = window.__fb && await window.__fb.ensureCalendarAccess();
      if (ok && window.__fb.getCalendarToken) {
        const token = window.__fb.getCalendarToken();
        if (token) { this._tokens.set(account.id, { token, exp: Date.now() + 50 * 60 * 1000 }); return true; }
      }
      return !!ok; // bridge may perform the fetch itself
    }

    // GIS account: try a silent refresh first, then interactive if needed.
    if (this._gisConfigured) {
      try {
        const fresh = await this._requestToken({ loginHint: account.email, prompt: '' });
        this._tokens.set(account.id, fresh);
        return true;
      } catch (_) {
        try {
          const fresh = await this._requestToken({ loginHint: account.email, prompt: 'consent' });
          this._tokens.set(account.id, fresh);
          return true;
        } catch (e) {
          throw new ProviderError('token_expired', 'Could not refresh Google access', { retriable: true });
        }
      }
    }
    return false;
  }

  _token(account) {
    const c = this._tokens.get(account.id);
    return c ? c.token : null;
  }

  async _fetchTokenProfile(token) {
    try {
      const r = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return r.ok ? r.json() : {};
    } catch (_) { return {}; }
  }

  // ── Authorized fetch with one transparent re-auth retry ──────────────────────
  async _api(account, path, opts = {}) {
    const ok = await this.ensureAccess(account);
    if (!ok) throw new ProviderError('auth_failed', 'Not authorized');
    const doFetch = async () => fetch(`${CAL_BASE}${path}`, {
      ...opts,
      headers: { ...(opts.headers || {}), Authorization: `Bearer ${this._token(account)}` },
    });

    let res = await doFetch();
    if (res.status === 401) {
      // Token went stale mid-flight — drop it and try once more.
      this._tokens.delete(account.id);
      const reok = await this.ensureAccess(account);
      if (reok) res = await doFetch();
    }
    if (res.status === 204) return {};
    if (!res.ok) throw new ProviderError(`http_${res.status}`, `Google API ${res.status}`,
      { retriable: res.status >= 500 });
    return res.json();
  }

  // ── Calendars ────────────────────────────────────────────────────────────────
  async listCalendars(account) {
    const data = await this._api(account, '/users/me/calendarList');
    return (data.items || []).map(c => ({
      id: c.id,
      name: c.summaryOverride || c.summary,
      color: c.backgroundColor,
      primary: !!c.primary,
      writable: c.accessRole === 'owner' || c.accessRole === 'writer',
    }));
  }

  // ── Events (write) ────────────────────────────────────────────────────────────
  _toGoogleEvent(event) {
    const body = {
      summary: event.title,
      description: event.description || '',
      start: { dateTime: event.start.dateTime, timeZone: event.start.timeZone },
      end:   { dateTime: event.end.dateTime,   timeZone: event.end.timeZone },
    };
    if (event.colorId) body.colorId = String(event.colorId);
    return body;
  }

  async createEvent(account, event) {
    const cal = encodeURIComponent(event.calendarId || 'primary');
    const data = await this._api(account, `/calendars/${cal}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this._toGoogleEvent(event)),
    });
    return data ? data.id : null;
  }

  async updateEvent(account, eventId, event) {
    const cal = encodeURIComponent(event.calendarId || 'primary');
    const data = await this._api(account, `/calendars/${cal}/events/${encodeURIComponent(eventId)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this._toGoogleEvent(event)),
    });
    return data ? data.id : eventId;
  }

  async deleteEvent(account, eventId, calendarId = 'primary') {
    const cal = encodeURIComponent(calendarId || 'primary');
    try {
      await this._api(account, `/calendars/${cal}/events/${encodeURIComponent(eventId)}`, { method: 'DELETE' });
    } catch (e) {
      // 404/410 = already gone; treat as success so local state can clear.
      if (e.code !== 'http_404' && e.code !== 'http_410') throw e;
    }
  }

  // ── Events (read — phase 2) ───────────────────────────────────────────────────
  async fetchEvents(account, { calendarId = 'primary', timeMin, timeMax } = {}) {
    const cal = encodeURIComponent(calendarId);
    const q = new URLSearchParams({ singleEvents: 'true', orderBy: 'startTime' });
    if (timeMin) q.set('timeMin', timeMin);
    if (timeMax) q.set('timeMax', timeMax);
    const data = await this._api(account, `/calendars/${cal}/events?${q.toString()}`);
    return (data.items || []).map(e => ({
      id: e.id,
      calendarId,
      title: e.summary || '',
      description: e.description || '',
      start: e.start || {},
      end: e.end || {},
      colorId: e.colorId,
      meta: { htmlLink: e.htmlLink },
    }));
  }
}
