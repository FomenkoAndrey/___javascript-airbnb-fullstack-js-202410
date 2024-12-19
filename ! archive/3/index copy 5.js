/* eslint-disable no-labels */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

let j = 0
while (j < 10) {
  if (j === 5) {
    break // Припиняє цикл, коли j дорівнює 5
  }
  j++ // Збільшуємо лічильник на початку, тому що continue пропускає все після нього в циклі
  if (j % 2 === 0) {
    continue // Пропускає поточну ітерацію, якщо j є парним числом
  }
  console.log(j) // Виведе лише непарні числа до 5 (1, 3)
}
