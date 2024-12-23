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

// ! recursion
function pow(x, n) {
  if (n !== 1) {
    return (x *= pow(x, n - 1))
  }
  return x
}
console.log(pow(2, 3)) // 8

// ! for
function pow2(x, n) {
  let res = x
  for (let i = 1; i < n; i++) {
    res *= x
  }
  return res
}
console.log(pow2(2, 3))
