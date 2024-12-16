// var a = 10
// var b = 20

// console.log('🚀 ~ a:', a) // 10
// console.log('🚀 ~ b:', b) // 20

// a = b
// console.log('🚀 ~ a:', a) // 20
// console.log('🚀 ~ b:', b) // 20

// a = 50
// console.log('🚀 ~ a:', a) // 50
// console.log('🚀 ~ b:', b) // 20

// b = 90
// console.log('🚀 ~ a:', a) // 50
// console.log('🚀 ~ b:', b) // 90

let a = { x: 10 }
const b = { x: 20 }

console.log('🚀 ~ a.x:', a.x) // 10
console.log('🚀 ~ b.x:', b.x) // 20

a = b
console.log('🚀 ~ a.x:', a.x) // 20
console.log('🚀 ~ b.x:', b.x) // 20

a.x = 50
console.log('🚀 ~ a.x:', a.x) // 50
console.log('🚀 ~ b.x:', b.x) // ! 20 => 50

b.x = 90
console.log('🚀 ~ a.x:', a.x) // ! 50 => 90
console.log('🚀 ~ b.x:', b.x) // 90
