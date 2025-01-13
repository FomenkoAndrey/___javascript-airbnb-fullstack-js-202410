const button = document.querySelector('#myButton')

const handler = () => {
  console.log('Button was clicked!')
}

button.addEventListener('click', handler, { once: true })
