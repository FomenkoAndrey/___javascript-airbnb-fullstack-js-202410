const validateNumber = function (number) {
  if (typeof number !== 'number') {
    console.dir(new Error('Введене значення не є числом'))
    throw new Error('Введене значення не є числом')
  }
  console.log('Введене значення є числом')
}

try {
  validateNumber('це не число')
  validateNumber(123)
} catch (error) {
  console.log(error)
} finally {
  console.log('Цей блок виконується завжди')
}

console.log('Програма працює далі')
