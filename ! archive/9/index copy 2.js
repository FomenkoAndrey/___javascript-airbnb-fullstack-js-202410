// const button = document.querySelector('#myButton')
// const handler = () => {
//   console.log('Button was clicked!')
//   button.removeEventListener('click', handler)
// }
// button.addEventListener('click', handler)

const button = document.querySelector('#myButton')

const handler = () => {
  console.log('Button was clicked!')
}

button.addEventListener('click', handler, { once: true })
