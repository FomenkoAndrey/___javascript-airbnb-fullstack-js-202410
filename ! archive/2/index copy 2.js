/* eslint-disable no-var */
var a = 0
var b = 0
var isFalse = false
var isTrue = true

// if (isTrue) {
//   a = 5
// }
var resIsTrue = isTrue && (a = 5)
console.log(a)
console.log(resIsTrue) // 5

// if (isFalse) {
//   b = 5
// }
var resIsFalse = isFalse && (b = 5)
console.log(b)
console.log(resIsFalse) // false
