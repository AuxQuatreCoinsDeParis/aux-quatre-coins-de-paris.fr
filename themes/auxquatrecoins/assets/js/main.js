(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service2.js')
      .then(function () { console.log('Service worker registered !') })
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
    if (imgToLoad.nodeName === 'IMG') {
      imgToLoad.src = imgToLoad.getAttribute('data-src')
    } else {
      imgToLoad.srcset = imgToLoad.getAttribute('data-src')
    }
    imgToLoad.removeAttribute('data-src')
  }
  const imagesToLoad = document.querySelectorAll("img[data-src], source[data-src]")
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      console.info(entries)

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