// ! 5
// const array = [1, 2, 3, 4, 5]

// for (const k of array) {
//   console.log(k)
// }

// ! 4
// for (const k of 'Hello') {
//   console.log(k)
// }

// ! 3
// const iterator = {
//   gen(n = 10) {
//     let index = 0

//     return {
//       next() {
//         if (index < n) {
//           return {
//             value: index++,
//             done: false
//           }
//         }
//         return {
//           value: undefined,
//           done: true
//         }
//       }
//     }
//   }
// }

// const itr = iterator.gen(7)

// console.log(itr.next().value)
// console.log(itr.next().value)
// console.log(itr.next().value)
// console.log(itr.next().value)
// console.log(itr.next().value)
// console.log(itr.next().value)
// console.log(itr.next().value)
// console.log(itr.next())

// ! 2
// function* numberGen(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i
//   }
// }

// const num = numberGen()

// console.log(num.next())

// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next())

// ! 1
// function* strGenerator() {
//   yield 'H'
//   yield 'e'
//   yield 'l'
//   yield 'l'
//   yield 'o'
// }

// const str = strGenerator()

// console.log(str)

// console.log(str.next().value)
// console.log(str.next().value)
// console.log(str.next().value)
// console.log(str.next().value)
// console.log(str.next().value)
// console.log(str.next().value)
