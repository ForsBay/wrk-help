// ─────────────────────────────────────────────────────────────────────────────
// OutlookProvider — scaffold.
//
// Feasible fully client-side via MSAL.js (PKCE, no client secret) + Microsoft
// Graph /me/events. Not implemented in this iteration. Declared honestly as
// REQUIRES_CONFIG: it will become connectable once an Azure app registration
// (client id) is provided in window.__shiftlyConfig.outlook.clientId.
// ─────────────────────────────────────────────────────────────────────────────

import { CalendarProvider, Capability, Availability, ProviderError } from './types.js';

export class OutlookProvider extends CalendarProvider {
  static type = 'outlook';
  static label = 'Outlook';
  static icon = '📧';
  static capabilities = [Capability.OAUTH, Capability.LIST_CALENDARS, Capability.WRITE, Capability.READ];
  static availability = Availability.REQUIRES_CONFIG;
  static note = 'Planned — Microsoft Graph via MSAL. Needs an Azure app registration (client id).';

  async connect() {
    throw new ProviderError('requires_config',
      'Outlook is not configured yet. Add window.__shiftlyConfig.outlook.clientId (Azure app) to enable it.');
  }
}
