// ─────────────────────────────────────────────────────────────────────────────
// SamsungProvider — scaffold.
//
// Samsung Calendar exposes no public web/cloud calendar API. On Galaxy devices it
// mirrors Google/Outlook/Exchange accounts locally, so the practical path is to
// connect that underlying Google/Outlook account in Shiftly. Declared UNAVAILABLE
// (not connectable) so the UI states this honestly.
// ─────────────────────────────────────────────────────────────────────────────

import { CalendarProvider, Capability, Availability, ProviderError } from './types.js';

export class SamsungProvider extends CalendarProvider {
  static type = 'samsung';
  static label = 'Samsung Calendar';
  static icon = '📱';
  static capabilities = [];
  static availability = Availability.UNAVAILABLE;
  static note = 'No public web calendar API. On Galaxy, connect the Google or Outlook account it syncs with.';

  async connect() {
    throw new ProviderError('unavailable',
      'Samsung Calendar has no web API. Connect the Google/Outlook account your device syncs with.');
  }
}
