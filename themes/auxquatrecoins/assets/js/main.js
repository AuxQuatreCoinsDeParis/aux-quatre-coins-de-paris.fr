(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service.js')
      .then(function () { console.log('Service worker registered !') })
  }

  const menuOpener = document.getElementById('mobile-menu-opener')
  const menuWrapper = menuOpener.parentElement
  const activeClass = 'active'
  menuOpener.addEventListener('click', function (event) {
    let classes = menuWrapper.className
    if (classes.indexOf(activeClass) > -1) {
      console.log(classes.indexOf(activeClass), activeClass.length)
      menuWrapper.className = classes.replace(activeClass, '')
    } else {
      menuWrapper.className = `${classes} ${activeClass}`
    }
  })
})()