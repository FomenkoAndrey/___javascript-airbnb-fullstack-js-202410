/* eslint-disable prefer-rest-params */
const sum = () => {
  console.log(arguments)
  let result = 0
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result
}

console.log(sum(1, 2, 3, 4, 5))