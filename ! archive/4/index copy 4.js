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

var i = 5
console.log(i) // 5 global
var func = function () {
  i = 10 // 5->10 global
  console.log(i) // 10 global
  var innerFunc = function () {
    i = 15 // 10->15
    console.log(i) // 15 global
  }
  innerFunc()
  console.log(i) // 15 global
}
func()
console.log(i) // 15 global
