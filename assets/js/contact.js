(function () {
  const oForm = document.getElementById('contactForm')
  oForm.addEventListener('submit', function (event) {
    if (false === checkGRecaptcha()) {
      event.preventDefault()
    }
  })
  oForm.addEventListener('change', function (event) {
    if (checkGRecaptcha()) {
      activateSubmitButton()
    }
  })
  function checkGRecaptcha() {
    const recaptchaField = document.getElementById('g-recaptcha-response')
    if (null === recaptchaField) return
    return recaptchaField.validity.valid
  }
  function activateSubmitButton() {
    document.getElementById('contactSubmit').setAttribute('disabled', false)
  }
})()