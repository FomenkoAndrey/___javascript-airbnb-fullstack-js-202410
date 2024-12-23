/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-labels */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

// eslint-disable-next-line wrap-iife
var func = (function (param1) {
  console.log('🚀 ~ func ~ param1:', param1)
  return function (param2) {
    console.log('🚀 ~ param2:', param2)
    console.log('Hello')
  }
})(123)
func(456)
func(456)
func(456)
func(456)
