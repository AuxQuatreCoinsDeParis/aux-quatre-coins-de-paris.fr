(function () {
  const oCaptchaChecker = {
    hasRecaptcha: false,
    recaptchaField: null,
    checkGRecaptcha: function () {
      if (this.hasRecaptcha === false) {
        this.initGRecaptcha()
      }
      return this.isRecaptchaValid()
    },
    initGRecaptcha: function () {
      this.recaptchaField = document.getElementById('g-recaptcha-response')
      if (null === this.recaptchaField) {
        this.recaptchaField = { validity: { valid: false } }
      } else if (this.isRecaptchaValid() === false) {
        this.hasRecaptcha = true
        this.recaptchaField.addEventListener('change', (event) => {
          if (this.isRecaptchaValid()) {
            this.activateSubmitButton()
          }
        })
      }
    },
    activateSubmitButton: function () {
      document.getElementById('contactSubmit').removeAttribute('disabled')
    },
    isRecaptchaValid: function () {
      return this.recaptchaField.validity.valid
    },
    checkAndActiveButton: function () {
      if (this.checkGRecaptcha()) {
        this.activateSubmitButton()
      }
    }
  }

  const oForm = document.getElementById('contactForm')
  oForm.addEventListener('submit', function (event) {
    if (false === oCaptchaChecker.checkGRecaptcha()) {
      event.preventDefault()
    }
  })
  oForm.addEventListener('change', function (event) {
      oCaptchaChecker.checkAndActiveButton()
  })
})()