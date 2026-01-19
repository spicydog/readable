const CACHE_Name = 'readable-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=PT+Serif:wght@400;700&display=swap'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_Name).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
