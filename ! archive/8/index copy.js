let i = 0

const intervalId = setInterval(() => {
  console.log(`${++i} інтервал`)
}, 1000)

setTimeout(() => {
  console.log('Таймер виконано після затримки')
  clearInterval(intervalId)
}, 10000)
