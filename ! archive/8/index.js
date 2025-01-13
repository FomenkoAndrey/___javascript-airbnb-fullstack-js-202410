const timeoutId = setTimeout(() => {
  console.log('Виконано після затримки')
}, 3000)

clearTimeout(timeoutId) // скасування виконання

const intervalId = setInterval(() => {
  console.log('Регулярне виконання')
}, 5000)

clearInterval(intervalId) // зупинка регулярного виконання
