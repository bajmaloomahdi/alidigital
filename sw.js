const cacheName = 'ali-digital-v2';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './iphone17.jpg',
  './PS5.jpg',
  './lab.jpg',
  './w.jpg',
  './1.jpg',
  './2.jpg',
  './3.jpg',
  './4.jpg',
  './f5.jpg',
  './6.jpg',
  './112.jpg',
  './206.jpg',
  './11.jpg',
  './201.jpg',
  './204.jpg',
  './203.jpg',
  './200.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
