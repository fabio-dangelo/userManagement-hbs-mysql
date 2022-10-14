const hamburger = document.querySelector('#hamburger')
const navLi = document.querySelector('#nav-li')
const navForm = document.querySelector('#nav-form')
const alertButton = document.querySelector('#alert-button')

hamburger.addEventListener('click', () => {
  navLi.classList.toggle('hidden')
  navForm.classList.toggle('hidden')
})

alertButton?.addEventListener('click', () => {
  window.location.href = '/'
})
