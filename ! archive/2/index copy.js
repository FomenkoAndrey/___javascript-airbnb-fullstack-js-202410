function capitalize(str) {
  if (str && typeof str === 'string') {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return str
}

console.log(capitalize('hello'))
console.log(capitalize(''))
console.log(capitalize('JavaScript Is awesome'))

// split(' ') => ['javaScript', 'is', 'awesome']
// capitalize for each element
// join(' ') => 'JavaScript Is Awesome'
