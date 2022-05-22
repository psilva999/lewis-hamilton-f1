export function scrollAnime() {
  let curiosidades = document.querySelectorAll('.curiosidades div')

  for (let i = 0; i < curiosidades.length; i++) {
    let showContent = window.innerHeight - 150,
        showTop = curiosidades[i].getBoundingClientRect().top

    if (showTop < showContent) {
      curiosidades[i].classList.add('active')
    }
  }
}
