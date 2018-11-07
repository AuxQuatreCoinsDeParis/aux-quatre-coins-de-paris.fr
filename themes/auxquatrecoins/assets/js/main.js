{{ $service := resources.Get "js/service.js" | resources.ExecuteAsTemplate "sw.js" . -}}
(function () {
  if ('serviceWorker' in navigator && location.host.indexOf('localhost') < 0) {
    navigator.serviceWorker
      .register('{{ $service.RelPermalink }}')
      .then(function () { console.info('Service worker registered !') })
  }

  const menuOpener = document.getElementById('mobile-menu-opener')
  const menuWrapper = menuOpener.parentElement
  const activeClass = 'active'
  menuOpener.addEventListener('click', function (event) {
    let classes = menuWrapper.className
    if (classes.indexOf(activeClass) > -1) {
      menuWrapper.className = classes.replace(activeClass, '')
    } else {
      menuWrapper.className = `${classes} ${activeClass}`
    }
  })

  function loadImage(imgToLoad) {
    const src = imgToLoad.getAttribute('data-src')
    if (false == src) {
      return
    }
    if (imgToLoad.nodeName === 'IMG') {
      imgToLoad.src = src
    } else {
      imgToLoad.srcset = src
    }
    imgToLoad.removeAttribute('data-src')
  }
  const imagesToLoad = document.querySelectorAll("img[data-src], source[data-src]")
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      if (entries[0].intersectionRatio <= 0) return

      entries.forEach(function (entry) {
        loadImage(entry.target)
        io.unobserve(entry.target)
      })
    })
    imagesToLoad.forEach(function (item) {
      io.observe(item)
    })
  } else {
    imagesToLoad.forEach(function (item) {
      loadImage(item)
    })
  }
})()