/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
var arr = ['яблуко', 'банан', 'апельсин']

// for
for (var i = 0; i < arr.length; i++) {
  console.log(i + 1, arr[i])
}

// for of
for (var fruit of arr) {
  console.log(fruit)
}

const user = {
  name: 'Олекса',
  age: 28,
  profession: 'розробник',
  skill: 'html'
}

for (var key in user) {
  console.log(`${key}: ${user[key]}`)
}

// Object.keys
const keyArr = Object.keys(user)
console.log(keyArr)
for (var key of keyArr) {
  console.log(key, user[key])
}

// Object.values
const valueArr = Object.values(user)
console.log(valueArr)
for (var value of valueArr) {
  console.log(value)
}

// Object.entries
const entriesArr = Object.entries(user)
console.log(entriesArr)
for (var entry of entriesArr) {
  console.log(entry)
}
