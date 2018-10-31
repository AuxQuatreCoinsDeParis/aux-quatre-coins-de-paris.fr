const APP_CACHE_NAME = '{{ .GitInfo.Hash }}'

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
      ])
    })
  )
})

this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response
        }

        const fetchRequest = event.request.clone()

        return fetch(fetchRequest)
          .then(function (response) {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response
              }

              const responseCache = response.clone()

              caches.open(APP_CACHE_NAME).then(function (cache) {
                cache.put(event.request, responseCache)
              })

              return response
          })
      })
      .catch(function () {
        console.error(event.request)
        return caches.match('/fr/fallback/')
      })
  )
})
