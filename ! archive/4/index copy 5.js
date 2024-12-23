/* eslint-disable strict */
/* eslint-disable lines-around-directive */
/* eslint-disable no-shadow */
/* eslint-disable wrap-iife */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-labels */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

// ! closure
var counter = (function () {
  var count = 0
  return function (num) {
    if (num !== undefined) {
      count = num
    }
    return ++count
  }
})()

// ! object
// var counter = function (num) {
//   if (num !== undefined) {
//     counter.count = num
//   }
//   return ++counter.count
// }
// counter.count = 0

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(100))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(9990))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(0))
console.log(counter())
console.log(counter())
