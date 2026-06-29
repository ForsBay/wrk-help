// ─────────────────────────────────────────────────────────────────────────────
// ProviderRegistry — the catalog of known provider types.
//
// Adding a new calendar backend in the future is: implement CalendarProvider in
// a new file, then `registry.register(MyProvider)`. Nothing else in the app
// changes. The registry also produces the platform-aware, availability-aware
// ordering the Integrations UI renders.
// ─────────────────────────────────────────────────────────────────────────────

import { detectPlatform, recommendedProviderOrder } from './platform.js';

export class ProviderRegistry {
  /** @param {Object} ctx Shared runtime context injected into every provider. */
  constructor(ctx = {}) {
    this.ctx = ctx;
    /** @type {Map<string, typeof import('./types.js').CalendarProvider>} */
    this._classes = new Map();
    /** @type {Map<string, import('./types.js').CalendarProvider>} cached instances */
    this._instances = new Map();
  }

  /** @param {typeof import('./types.js').CalendarProvider} ProviderClass */
  register(ProviderClass) {
    if (!ProviderClass || !ProviderClass.type) {
      throw new Error('register() requires a CalendarProvider subclass with a static `type`');
    }
    this._classes.set(ProviderClass.type, ProviderClass);
    return this;
  }

  /** @returns {boolean} */
  has(type) { return this._classes.has(type); }

  /** @returns {(typeof import('./types.js').CalendarProvider)|undefined} */
  getClass(type) { return this._classes.get(type); }

  /**
   * Get (and lazily build) a singleton provider instance for a type.
   * @returns {import('./types.js').CalendarProvider}
   */
  get(type) {
    if (!this._instances.has(type)) {
      const Cls = this._classes.get(type);
      if (!Cls) throw new Error(`Unknown provider type: ${type}`);
      this._instances.set(type, new Cls(this.ctx));
    }
    return this._instances.get(type);
  }

  /**
   * Static metadata for every registered provider — what the Integrations list
   * needs to render without instantiating anything.
   * @returns {Array<{type,label,icon,availability,capabilities,note,connectable}>}
   */
  catalog() {
    return [...this._classes.values()].map(Cls => ({
      type: Cls.type,
      label: Cls.label,
      icon: Cls.icon,
      availability: Cls.availability,
      capabilities: Cls.capabilities,
      note: Cls.note,
      connectable: Cls.connectable,
    }));
  }

  /**
   * Catalog sorted for display: platform recommendations first (in recommended
   * order), then connectable providers, then the rest. Each entry is flagged
   * `recommended` so the UI can badge it.
   * @param {string} [platform]
   */
  catalogForPlatform(platform = detectPlatform()) {
    const order = recommendedProviderOrder(platform);
    const rank = (type) => {
      const i = order.indexOf(type);
      return i === -1 ? order.length + 1 : i;
    };
    return this.catalog()
      .map(entry => ({ ...entry, recommended: order.indexOf(entry.type) !== -1 }))
      .sort((a, b) => {
        // connectable providers float above non-connectable ones,
        // then by platform recommendation rank, then alphabetically.
        if (a.connectable !== b.connectable) return a.connectable ? -1 : 1;
        const r = rank(a.type) - rank(b.type);
        return r !== 0 ? r : a.label.localeCompare(b.label);
      });
  }
}
