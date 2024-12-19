/* eslint-disable no-labels */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

let i = 0
while (i < 10) {
  if (i === 5) {
    break // Припиняє цикл, коли i дорівнює 5
  }
  console.log(i) // Виведе числа від 0 до 4
  i++ // Не забуваємо збільшити лічильник
}
