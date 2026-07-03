// Bump this on every content change (new module, edited HTML, updated JS/CSS)
// so the browser detects the file diff and installs a fresh cache.
const CACHE_VERSION = 'v6';
const CACHE_NAME = `itcert-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './quiz.html',
  './resources.html',
  './subnet-practice.html',
  './style.css',
  './manifest.json',
  './questions.js',
  './quiz-bank.js',
  './subnet-scripts.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './courses/01-technical-support-fundamentals.html',
  './courses/02-bits-and-bytes-networking.html',
  './courses/03-operating-systems.html',
  './courses/04-system-administration.html',
  './courses/05-it-security.html',
  './resources/cli-commands.html',
  './resources/cli-practice.html',
  './resources/ports-chart.html',
  './resources/subnet-cheatsheet.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

// Cache-first, falling back to network; successful network responses
// refresh the cache so anything not precached still ends up available offline.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      // A cached response that was originally fetched via a redirect (e.g. "./"
      // getting redirected to "./index.html" by the host) keeps `redirected: true`.
      // Serving that flag for a navigation request throws "a redirected response
      // was used for a request whose redirect mode is not follow", which blocks
      // the PWA install prompt. Strip the flag by rebuilding a plain Response.
      if (cached && cached.redirected) {
        return cached.blob().then((body) => new Response(body, {
          status: cached.status,
          statusText: cached.statusText,
          headers: cached.headers,
        }));
      }
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
