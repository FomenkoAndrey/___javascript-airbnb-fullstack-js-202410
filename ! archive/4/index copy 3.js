/* eslint-disable wrap-iife */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-labels */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

function addThree(a, b, c) {
  return a + b + c
}

addThree(1, 2, 3) // 6

function curryAddThree(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

var addFive = curryAddThree(5)
var addFiveAndTwo = addFive(2)
console.log(addFiveAndTwo(3)) // 10
