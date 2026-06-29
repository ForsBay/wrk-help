const CACHE_NAME = 'work-hours-v5';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.PNG',
        './icon-512.PNG',
        // Universal calendar-providers layer (ES modules) — precached for offline.
        './providers/index.js',
        './providers/types.js',
        './providers/platform.js',
        './providers/registry.js',
        './providers/google.js',
        './providers/outlook.js',
        './providers/apple.js',
        './providers/samsung.js',
        './providers/ics.js',
        './providers/account-manager.js',
        './providers/sync-engine.js'
      ]);
    })
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
  // Only handle same-origin GET; let Firebase/Google requests pass straight through.
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
