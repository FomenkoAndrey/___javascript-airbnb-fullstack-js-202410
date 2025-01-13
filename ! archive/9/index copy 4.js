/* eslint-disable prefer-destructuring */
const ul = document.querySelector('ul')
let pointer = null

const handleClick = function (e) {
  const target = e.target

  if (target.nodeName !== 'LI') return

  target.style.color = 'red'
  target.style.fontWeight = 'bold'

  if (pointer) {
    pointer.removeAttribute('style')
  }

  pointer = target
}

ul.addEventListener('click', handleClick)
