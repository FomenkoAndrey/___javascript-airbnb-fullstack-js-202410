const items = document.querySelectorAll('li')
let pointer = null

const handleClick = function () {
  this.style.color = 'red'
  this.style.fontWeight = 'bold'

  if (pointer) {
    pointer.style.color = 'black'
    pointer.style.fontWeight = 'normal'
  }

  pointer = this
}

items.forEach((item) => {
  item.addEventListener('click', handleClick)
})
