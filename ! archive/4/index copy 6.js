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
/* eslint-disable no-var */

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}

// console.log(urlGenerator('com')('google'))
const comUrl = urlGenerator('com')
console.log(comUrl('google'))
console.log(comUrl('yahoo'))

const uaUrl = urlGenerator('ua')
console.log(uaUrl('google'))
console.log(uaUrl('meta'))
