/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break // Припиняє виконання циклу, коли i дорівнює 5
  }
  console.log(i) // Виведе числа від 0 до 4
}
