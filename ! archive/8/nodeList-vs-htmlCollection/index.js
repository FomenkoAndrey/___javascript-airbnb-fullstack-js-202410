/* eslint-disable max-len */
// HTMLCollection vs NodeList
// getElementsByClassName vs querySelectorAll

const htmlCollection = document.getElementsByClassName('blue')
const nodeList = document.querySelectorAll('.blue')

// кількість вибраних елементів = 1 в обох варіантах
console.log('----- Було -----')
console.log(`Кількість елементів через getElementsByClassName = ${htmlCollection.length}`)
console.log(`Кількість елементів через querySelectorAll = ${nodeList.length}`)

// змінюємо класи елементів на "blue"
document.getElementById('div1').className = 'blue'
document.getElementById('div3').className = 'blue'

// ще раз перевіряємо кількість елементів
// htmlCollection => getElementsByClassName = 3
//       nodeList => querySelectorAll       = 1
console.log('----- Стало -----')
console.log(`Кількість елементів через getElementsByClassName = ${htmlCollection.length}`)
console.log(`Кількість елементів через querySelectorAll = ${nodeList.length}`)

// У першому випадку інформація про кількість елементів усередині колекції автоматично оновилася після зміни класів елементів – ця колекція жива.

// У другому випадку в змінній зберігається початковий стан колекції, який був актуальним на момент виклику методу querySelectorAll. Ця колекція нежива, вона нічого не знає про зміну DOM.
