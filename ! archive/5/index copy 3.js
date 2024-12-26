// const sum = () => {
//   console.log(arguments)
//   let result = 0
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i]
//   }
//   return result
// }

const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0)

console.log(sum(1, 2, 3, 4, 5))
