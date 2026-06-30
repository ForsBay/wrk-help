# Shiftly — Unified Data Contract (v2)

**Status:** authoritative. This document is the single source of truth for how every
Shiftly client — **Desktop, Web, Android, iOS** — stores and syncs data in Firestore
(project `workh-cdc4d`). The TypeScript reference implementation lives at
[`shiftly-marketing/lib/contract.ts`](shiftly-marketing/lib/contract.ts); native clients
port from this document. If code and this document disagree, **this document wins** —
fix the code.

> One schema for all platforms — never per-platform or "compatible" schemas. A client
> may *ignore* fields it does not use yet, but it MUST *store and preserve* them.

---

## 1. Storage layout

```
users/{uid}                    ← root document: settings + profile + audit
users/{uid}/shifts/{shiftId}   ← one document per shift (subcollection)
```

A **subcollection** (not an array, not a map on the root doc) is used for shifts because:

- shifts grow without bound (multi-year users), and a single document is capped at
  **1 MB** by Firestore;
- per-shift documents give granular writes/deletes, per-shift security, and
  **month-scoped range queries** on `date`;
- clients listen to the small root doc for settings with one cheap subscription, and
  attach a query listener only for the date window currently on screen.

---

## 2. Root document — `users/{uid}`

`settings` is a **grouped, versioned** object. New preferences go into a namespace; they
never bloat a flat map.

```jsonc
{
  "schemaVersion": 2,

  "settings": {
    "schemaVersion": 2,
    "pay":          { "rate": 31.4, "currency": "PLN" },
    "locale":       { "lang": "en", "weekStart": 1 },
    "appearance":   { "theme": "dark" },
    "integrations": { "calSync": false },
    "notifications":{ "shiftReminders": false },
    "ext": {}
  },

  "profile": { "displayName": null, "email": null, "photo": null },

  "audit": {
    "createdAt": 1719763200000,
    "createdBy": { "platform": "web", "appVersion": "1.8.1", "uid": "abc123" },
    "updatedAt": 1719763200000,
    "updatedBy": { "platform": "web", "appVersion": "1.8.1", "uid": "abc123" }
  }
}
```

### `settings` groups

| Path                          | Type                 | Meaning                                              |
|-------------------------------|----------------------|-----------------------------------------------------|
| `settings.schemaVersion`      | `number`             | settings-shape version (currently `2`)              |
| `settings.pay.rate`           | `number`             | default hourly rate (gross, in `currency`)          |
| `settings.pay.currency`       | `string`             | ISO-style code: `PLN`, `EUR`, `USD`, `GBP`, `UAH`, `RUB`, `CZK`, `KZT`, … (legacy field was `cur`) |
| `settings.locale.lang`        | `string`             | UI language code: `en`, `ru`, `pl`, `uk`, …         |
| `settings.locale.weekStart`   | `number`             | first day of week: `0`=Sunday, `1`=Monday           |
| `settings.appearance.theme`   | `'dark' \| 'light'`  | UI theme                                            |
| `settings.integrations.calSync`| `boolean`           | Google Calendar auto-sync enabled                   |
| `settings.notifications.shiftReminders` | `boolean`   | example of a future group; clients ignore unknown groups but preserve them |
| `settings.ext`                | `map`                | forward-compat bag for keys not yet modelled        |

`profile` is a convenience **cache** of the signed-in account; Firebase Auth is the source
of truth and may overwrite it. `audit` records who created/last-touched the document
(see §4).

Currencies and languages are **codes only**. Each client keeps its own symbol and
translation tables — the contract never stores a rendered symbol or translated string.

---

## 3. Shift document — `users/{uid}/shifts/{shiftId}`

`shiftId` is a **ULID** (Crockford base32, 26 chars, lexicographically sortable by
creation time). It is **stable** and **never derived from the date**, so multiple shifts
on one day, reschedules, and cross-device edits never collide. The calendar day lives in
the separate, queryable `date` field.

```jsonc
{
  "id": "01J9ZK7Q8X3M2N5P7R9T1V4W6Y",
  "date": "2026-06-22",
  "start": "09:00",
  "end": "17:30",
  "hours": 8,
  "breakMin": 30,
  "overtime": { "hours": 0.5, "pct": 150, "start": null, "end": null },
  "workplace": "Warehouse A",
  "notes": "Inventory day",
  "category": "regular",
  "planned": false,
  "rateOverride": null,
  "gcal": { "eventId": null, "calendarId": null, "synced": false },
  "legacyRef": null,
  "audit": {
    "createdAt": 1719763200000,
    "createdBy": { "platform": "web", "appVersion": "1.8.1", "uid": "abc123" },
    "updatedAt": 1719763200000,
    "updatedBy": { "platform": "web", "appVersion": "1.8.1", "uid": "abc123" }
  },
  "schemaVersion": 2,
  "ext": {}
}
```

| Field          | Type                          | Notes                                                                 |
|----------------|-------------------------------|-----------------------------------------------------------------------|
| `id`           | `string` (ULID)               | equals the document id                                                |
| `date`         | `string` `YYYY-MM-DD`         | local calendar day of the shift **start**; the field clients query on |
| `start`        | `string` `HH:MM` \| `null`    | 24h local start; `null` for a manual-hours entry                      |
| `end`          | `string` `HH:MM` \| `null`    | 24h local end; may be `<= start` → shift crosses midnight             |
| `hours`        | `number`                      | **authoritative worked hours for pay** (see §4)                       |
| `breakMin`     | `number`                      | unpaid break minutes (default `0`)                                    |
| `overtime`     | `Overtime \| null`            | `{ hours, pct, start, end }`; `pct` = extra-rate **percent** (e.g. `150` = +50%) |
| `workplace`    | `string \| null`              | free text                                                             |
| `notes`        | `string \| null`              | free text                                                             |
| `category`     | `string`                      | known set: `regular \| overtime \| night \| training \| leave`; unknown → treat as `regular` |
| `planned`      | `boolean`                     | `true` = planned/future, not actuals                                  |
| `rateOverride` | `number \| null`              | per-shift hourly rate; `null` → use `settings.pay.rate`               |
| `gcal`         | `{eventId,calendarId,synced} \| null` | Google Calendar linkage                                       |
| `legacyRef`    | `string \| null`              | `YYYY-MM-DD` this shift was migrated from; `null` for native shifts (see §5) |
| `audit`        | `Audit`                       | provenance (see §4)                                                   |
| `schemaVersion`| `number`                      | per-document shape version (currently `2`)                            |
| `ext`          | `map`                         | forward-compat bag                                                    |

---

## 4. Cross-cutting rules

These are **normative** — every client must obey them.

### 4.1 `hours` is authoritative for pay
`start`/`end` are presentation and Calendar detail. When both are present a client
computes `hours = range(start,end) − breakMin` on edit and stores the result. When they
are absent, `hours` is a manual entry (this is exactly what the phone does today). Pay =
`hours × (rateOverride ?? settings.pay.rate)` plus overtime (`overtime.hours × rate ×
overtime.pct/100`).

### 4.2 Overtime is unified to `{ hours, pct, start, end }`
`pct` is the **extra-rate percent** (`150` means the OT hours are paid at 150%). Legacy
data that stored a fractional `mult` (e.g. `1.5`) or a different `pct` is normalized to
this single percent on migration/read.

### 4.3 `category` is an open string
Render the known set; any unknown value falls back to `regular`. This lets a new category
ship on one platform without breaking older clients (they preserve the value, they just
draw it as regular).

### 4.4 Client provenance — `audit`
`Audit = { createdAt, createdBy, updatedAt, updatedBy }` where timestamps are epoch ms and
`createdBy`/`updatedBy` are a reusable **`ClientRef`**:

```jsonc
{ "platform": "web" | "desktop" | "android" | "ios", "appVersion": "1.8.1", "uid": "abc123" }
```

`ClientRef` is the one place provenance grows — add `deviceId`, `sessionId`, etc. there
without touching any other field. Every write stamps `updatedAt`/`updatedBy`; the first
write stamps `createdAt`/`createdBy` and never changes them afterwards.

### 4.5 Preserve-unknown (forward compatibility)
A client MUST NOT drop fields it does not understand. In practice:

- **Write named fields only** — use `setDoc(ref, patch, { merge: true })` or
  `updateDoc(ref, patch)`. Never `setDoc` a freshly-rebuilt whole object over an existing
  document.
- Unknown top-level keys, the `ext` bags, and unread `settings` groups therefore survive
  every round-trip automatically.
- When a client *does* deserialize into a typed object and re-serializes, it must carry
  the original `ext` (and any unknown keys it captured) back out unchanged.

### 4.6 Per-day grouping is a query, not the key
A client that thinks "one entry per day" (today's phone) MUST query
`shifts where date == day` (or a month range) and roll the results up — it must not assume
`id == date`. The reference impl provides `rollupByDay()`.

---

## 5. Migration: legacy → v2

The legacy shape (still in production on the phone) is, under `users/{uid}`:

```jsonc
{
  "cfg":  { "rate": 25, "cur": "PLN", "lang": "en", "calSync": false, "theme": "dark" },
  "data": { "2026-06": { "22": 8.5, "23": 9 } },           // day → hours (a number)
  "ot":   { "2026-06": { "23": { "h": 0.5, "pct": 150 } } } // day → overtime
  // "calIds" is local-only on the phone (Google Calendar event ids), not in Firestore
}
```

Migration is **one-time and idempotent** (not a temporary bridge). A client runs it the
first time it reads a document whose `schemaVersion` is absent or `< 2`:

1. **Shifts.** For each `data[mo][day] = hours`, create a shift document with a fresh
   **ULID** id and `legacyRef = "${mo}-${pad(day)}"`:
   - `date = "${mo}-${pad(day)}"`, `hours`, `start/end = null`, `breakMin = 0`;
   - `planned = (date is in the future)`;
   - `category = "regular"`;
   - `overtime` from `ot[mo][day]` if present (normalized per §4.2);
   - `gcal.eventId` from the client's local `calIds[mo][day]` if present, with
     `synced = true`;
   - `audit.createdBy/updatedBy` = the migrating client.
   - **Idempotency:** before inserting, look for an existing shift with the same
     `legacyRef`; if found, update it instead of creating a duplicate. A re-run (or a
     second device migrating) therefore never duplicates.
2. **Settings.** Map flat `cfg` → grouped `settings`:
   `cur → pay.currency`, `rate → pay.rate`, `lang → locale.lang`,
   `theme → appearance.theme`, `calSync → integrations.calSync`; default
   `locale.weekStart = 1`; set `schemaVersion = 2`.
3. **Cold backup.** Leave legacy `cfg` / `data` / `ot` untouched as an *ignored* backup —
   readers key off `schemaVersion`, so no client ever reads both shapes at runtime. These
   fields can be deleted in a later release once every client is on v2.

---

## 6. Firestore security rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
      match /shifts/{sid} {
        allow read, write: if request.auth != null && request.auth.uid == uid;
      }
    }
  }
}
```

A user can read and write only their own document tree. `date` supports automatic
single-field range queries (month windows); a **composite index** is only needed if a
client later filters by `category` + `date` together.

---

## 7. Versioning

- `schemaVersion` exists at three levels: root document, `settings`, and each shift
  document. Bump the relevant one when its shape changes incompatibly, and add a migration
  step here (legacy backups make migrations replayable).
- Additive changes (new optional field, new `settings` group, new `category`) do **not**
  require a version bump — the preserve-unknown rule (§4.5) keeps old clients safe.
