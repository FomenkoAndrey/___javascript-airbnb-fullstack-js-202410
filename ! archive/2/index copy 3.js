/* eslint-disable no-var */

var someString = 'Non-empty string'
var emptyString = ''
var newString1
var newString2

// if (someString.length > 0) {
//   newString1 = someString
// } else {
//   newString1 = 'Default string'
// }
newString1 = someString || 'Default string'

// if (emptyString.length > 0) {
//   newString2 = emptyString
// } else {
//   newString2 = 'Default string'
// }
newString2 = emptyString || 'Default string'

console.log(newString1)
console.log(newString2)
