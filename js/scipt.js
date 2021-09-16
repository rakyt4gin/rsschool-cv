class Burger {
  constructor() {
    this.body = document.body
    this.menuButton = document.querySelector('.menu__btn')
    this.menu = document.querySelector('.menu__box')
    this.menu.style.visibility = 'hidden'
    this.menuItems = document.querySelectorAll('.menu__item')
    this.toogleBurgerIcon = document.querySelector('#menu__toggle')
    this.toogleBurgerIcon.checked = false
    this.init()
  }

  init() {
    this.menuButton.addEventListener('click', this.toogleBurger.bind(this))
    this.menuItems.forEach(item => item.addEventListener('click', this.toogleBurger.bind(this)))
    this.menuItems.forEach(item => item.addEventListener('click', this.toogleIcon.bind(this)))
  }

  toogleIcon(){
    if(this.toogleBurgerIcon.checked == false){
      this.toogleBurgerIcon.checked = true
    }
    else{
      this.toogleBurgerIcon.checked = false
    }
  }

  toogleBurger(event) {
    if (this.menu.style.visibility === 'hidden') {
      this.menu.style.visibility = 'visible'
      this.menu.style.left = 0
    }
    else {
      this.menu.style.visibility = 'hidden'
      this.menu.style.left = '-100%'
    }
  }
}

new Burger()