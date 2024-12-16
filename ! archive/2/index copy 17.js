const obj = { a: 1, b: { c: 2 } }
const deepCopy = JSON.parse(JSON.stringify(obj))

console.log(deepCopy)
deepCopy.b.c = 3
console.log(obj.b.c)

// lodash
// _.cloneDeep(obj)
