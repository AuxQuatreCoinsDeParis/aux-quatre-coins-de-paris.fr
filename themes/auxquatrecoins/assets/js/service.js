const APP_CACHE_NAME = '{{ .GitInfo.Hash }}'
const self = this

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(APP_CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/fr/',
        '/fallback/',
        '/fr/fallback/',
        '/?utm_source=AppQCdP',
        '/fr/?utm_source=AppQCdP',
        '/css/bundle.min.css',
        '/js/main.min.js',
        '/images/a4cp-logo-compact-white.svg',
        '/images/city-island-and-notre-dame-cathedral.jpg'
      ]).then(function () {
        self.skipWaiting()
      })
    })
  )
})

this.addEventListener('fetch', function (event) {
  const request = event.request
  if (request.method !== 'GET') {
    event.respondWith(fetch(request))
  }
  else {
    event.respondWith(
      caches.open(APP_CACHE_NAME).then(function (cache) {
        return cache.match(request)
          .then(function (response) {
            const fetchRequest = event.request.clone()

            const fetched = fetch(fetchRequest)
              .then(function (response) {
                if (!response || response.status !== 200 || response.type !== 'basic') {
                  return response
                }

                const responseCache = response.clone()
                if (responseCache.url.indexOf('analytics') > -1) return response
                cache.put(event.request, responseCache)

                return response
              })
            return response || fetched
          })
          .catch(function (error) {
            // const fetchRequest = event.request.clone()
            // console.error("no match in cache, fallback", error)
            // console.log(typeof error, fetchRequest.referrer, fetchRequest.destination, fetchRequest.context)
            return cache.match('/fr/fallback/')
          })
      })
      .catch(function (arg) {
        console.error("open cache", arg)
      })
    )
  }
})

this.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      cacheNames.filter(function (cacheName) {
        if (cacheName != APP_CACHE_NAME) {
          return true
        }
      }).map(function (cacheName) {
        return caches.delete(cacheName)
      })
    })
  )
})