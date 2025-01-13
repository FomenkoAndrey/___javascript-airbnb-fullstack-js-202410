const button = document.querySelector('#myButton')

// button.onclick = function () {
//   console.log('Button was clicked!')
// }
button.addEventListener('click', () => {
  console.log('Button was clicked!')
})

// button.onclick = function () {
//   console.log('One more clicked!')
// }

button.addEventListener('click', () => {
  console.log('One more clicked!')
})

button.onclick = function () {
  console.log('Second time clicked!')
}
