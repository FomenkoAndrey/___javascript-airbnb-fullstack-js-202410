/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break // Припиняє виконання циклу, коли i дорівнює 5
  }
  // Якщо i є парним числом
  if (i % 2 === 0) {
    continue // Пропускає поточну ітерацію і переходить до наступної
  }
  console.log(i) // Виведе лише непарні числа до 5 (1, 3)
}
