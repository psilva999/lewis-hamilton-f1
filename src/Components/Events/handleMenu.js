export function resizeWindow() {
  if (window.matchMedia("(min-width:1041px)").matches) {
    document.querySelector(".menu").classList.remove('active')
    document.querySelector(".login-menu").classList.remove("active")
  }
}

export function menuMobile(e) {
  console.log(e.target, e.currentTarget)

  let toggleMenu = document.querySelector(".toggle-menu"),
      menu = document.querySelector(".menu"),
      buttonLoginMenu = document.querySelector(".login-menu")

  let tempo = 3

  if (menu.classList.contains('active')) {
    menu.style.animation = 'hides-menu .3s forwards'
    toggleMenu.classList.remove("close")

    let retiraMenu = setInterval(timeMenu, 100)
    function timeMenu() {
      tempo--

      if (tempo === 0) {
        menu.classList.remove('active')
        menu.style.animation = 'show-menu .3s forwards'
        clearInterval(retiraMenu)
      }
    }
  }

  else {
    toggleMenu.classList.add("close")
    menu.classList.add('active')
    buttonLoginMenu.classList.add('active')
  }
}

export function closeMenu(e) {
  let tempo = 3

  if ((e.target.id !== 'toggle-menu' && e.target.id !== 'menu') && window.matchMedia("(max-width:1040px)").matches) {
    document.querySelector('.menu').style.animation = 'hides-menu .3s forwards'
    document.querySelector('.toggle-menu').classList.remove("close")

    let retiraMenu = setInterval(timeMenu, 100)
    function timeMenu() {
      tempo--

      if (tempo === 0) {
        document.querySelector('.menu').classList.remove('active')
        document.querySelector('.menu').style.animation = 'show-menu .3s forwards'
        clearInterval(retiraMenu)
      }
    }
  }
}
