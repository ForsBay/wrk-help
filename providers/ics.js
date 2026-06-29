// ─────────────────────────────────────────────────────────────────────────────
// ICSProvider — scaffold (read-only).
//
// An .ics feed is a URL, not an account, and is inherently read-only (you cannot
// write back to a static feed). Direct browser fetch of arbitrary feeds is mostly
// blocked by CORS, so a lightweight proxy is needed → REQUIRES_BACKEND for now.
// The parsing + READ capability will live here; it slots into SyncEngine's read
// path (phase 2) without touching the write path.
// ─────────────────────────────────────────────────────────────────────────────

import { CalendarProvider, Capability, Availability, ProviderError } from './types.js';

export class ICSProvider extends CalendarProvider {
  static type = 'ics';
  static label = 'ICS / iCal feed';
  static icon = '🔗';
  static capabilities = [Capability.READ]; // import-only, never writes
  static availability = Availability.REQUIRES_BACKEND;
  static note = 'Read-only import by URL. Most feeds require a CORS proxy to fetch from the browser.';

  async connect() {
    throw new ProviderError('requires_backend',
      'ICS import needs a CORS proxy to fetch feeds; not available in this build.');
  }
}
