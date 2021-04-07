const burgerButton = document.querySelector('#burger-button')
const mobileNav = document.querySelector('#mobile-nav')

function activeMenu() {
  this.classList.toggle('open')
  mobileNav.classList.toggle('active')

  if (mobileNav.classList.contains('active')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style = null
  }
}

burgerButton.addEventListener('click', activeMenu)