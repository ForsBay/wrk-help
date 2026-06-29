// Scope: /app/ (the SW lives at /app/sw.js, so it only ever controls /app/*).
// Bump this on any deploy where you want to force-clear the offline cache.
const CACHE_NAME = 'shiftly-app-v6';
const PRECACHE = [
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  // Universal calendar-providers layer (ES modules).
  './providers/index.js', './providers/types.js', './providers/platform.js',
  './providers/registry.js', './providers/google.js', './providers/outlook.js',
  './providers/apple.js', './providers/samsung.js', './providers/ics.js',
  './providers/account-manager.js', './providers/sync-engine.js',
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin GET; let Firebase / Google API requests pass through.
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  // Navigations (the app shell): network-first so a new deploy is always picked up,
  // falling back to the cached shell only when offline.
  const isNavigation = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isNavigation) {
    event.respondWith(
      fetch(req)
        .then(res => {
          caches.open(CACHE_NAME).then(c => c.put('./index.html', res.clone()));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Static assets (icons, manifest): cache-first for speed, refresh in background.
  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
