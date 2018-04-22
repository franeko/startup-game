var staticCacheName = 'myNewsSite-v0';

self.addEventListener('install', function (event) {
  console.log('ServiceWorker (' + staticCacheName + '): install called');
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll([
        '/',
        'index.html',
        'manifest.json',
        'lib/jquery.min.js',
        'lib/bootstrap.min.css',
        'custom.css',
        'feedReader.js',
      ]);
    })
  );
});