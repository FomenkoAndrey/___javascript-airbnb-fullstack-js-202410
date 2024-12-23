/* eslint-disable wrap-iife */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-labels */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

function add(a, b) {
  return a + b
}

// console.log(add(1, 2))
add(2, 2)
add(3, 2)
add(7, 2)

function currryAdd(a) {
  return function (b) {
    return a + b
  }
}

var addFive = currryAdd(5)

console.log(addFive(2))
console.log(addFive(3))
console.log(addFive(7))

var addTen = currryAdd(10)

console.log(addTen(2))
console.log(addTen(3))
console.log(addTen(7))
