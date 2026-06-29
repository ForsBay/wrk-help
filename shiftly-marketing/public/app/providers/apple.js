// ─────────────────────────────────────────────────────────────────────────────
// AppleProvider — scaffold.
//
// Apple Calendar has no browser OAuth calendar API. Real access is CalDAV
// (caldav.icloud.com) with an app-specific password, which cannot be done safely
// or at all from a browser (no CORS, credentials must live server-side). It
// therefore REQUIRES_BACKEND: a small CalDAV bridge service. Declared honestly so
// the UI never shows a non-working "Connect" button.
// ─────────────────────────────────────────────────────────────────────────────

import { CalendarProvider, Capability, Availability, ProviderError } from './types.js';

export class AppleProvider extends CalendarProvider {
  static type = 'apple';
  static label = 'Apple Calendar';
  static icon = '';
  static capabilities = [Capability.LIST_CALENDARS, Capability.WRITE, Capability.READ];
  static availability = Availability.REQUIRES_BACKEND;
  static note = 'Requires a CalDAV bridge server — Apple provides no web calendar API.';

  async connect() {
    throw new ProviderError('requires_backend',
      'Apple Calendar needs a CalDAV bridge server, which is not available in this build.');
  }
}
