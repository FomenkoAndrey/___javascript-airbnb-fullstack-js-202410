// ! noob code
// function testFn() {
//   if (Math.random() > 0.5) {
//     console.log('OK')
//   } else {
//     console.log('Error')
//   }
// }

// ! pro code
// function testFn() {
//   if (Math.random() < 0.5) {
//     return 'Error'
//   }
//   // code OK
//   return 'OK'
// }
// console.log(testFn())

const myError = new Error('My custom error happened')

function func() {
  try {
    if (Math.random() > 0.5) throw myError
    console.log('try')
    return 'OK, try successed'
  } catch (err) {
    console.error('catch', err)
  } finally {
    console.log('finally')
  }

  console.log('after try/catch/finally')

  return 'Error happened'
}

console.log(func())
