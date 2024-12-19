/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-labels */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

// function first() {
//   console.log('Це функція first')
// }

// function second() {
//   console.log('Це функція second')
// }

// // Виклик функцій
// first()
// second()

// function first(callback) {
//   setTimeout(function () {
//     console.log('Це функція first')
//     callback()
//   }, 5000)
// }

// function second() {
//   setTimeout(function () {
//     console.log('Це функція second')
//   }, 2000)
// }

// Виклик функцій
// first(second)

function getUserData(callback) {
  console.log('Робимо запит на сервер...')
  setTimeout(function () {
    var userData = {
      name: 'John',
      age: 25
    }
    console.log('Дані користувача отримано')
    callback(userData)
  }, 3000)
}

function displayUserData(userData) {
  setTimeout(function () {
    console.log('Дані користувача оброблено:', userData)
  }, 1000)
}

getUserData(displayUserData)
