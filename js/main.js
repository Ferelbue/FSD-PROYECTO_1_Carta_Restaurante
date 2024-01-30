const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

function btnTable() {
  prompt("ESCRIBE TU NUMERO DE TELEFONO Y TE LLAMAREMOS LO ANTES POSIBLE PARA RESERVAR LA MESA")
}
