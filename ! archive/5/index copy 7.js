/* eslint-disable guard-for-in */
const person = {
  name: 'John Doe',
  _age: 25,
  get age() {
    // console.log(`${this.name} is ${this._age} years old`)
    return this._age
  },
  set age(value) {
    this._age = value < 0 ? 0 : value > 122 ? 122 : value
  }
}

Object.defineProperty(person, 'gender', {
  value: 'male',
  writable: false,
  enumerable: false,
  configurable: false
})

Object.defineProperty(person, '_age', {
  enumerable: false
})

console.log(person)

console.log(Object.getOwnPropertyDescriptor(person, 'gender'))
// console.log(Object.getOwnPropertyDescriptor(person, 'name'))
// console.log(Object.getOwnPropertyDescriptor(person, 'age'))

console.log('--- for in ---')
for (const key in person) {
  console.log(key, person[key])
}

console.log('--- Object.keys ---')
console.log(Object.keys(person))
Object.keys(person).forEach((key) => console.log(key, person[key]))

console.log('--- Object.values ---')
console.log(Object.values(person))
Object.values(person).forEach((value) => console.log(value))

console.log('--- Object.entries ---')
console.log(Object.entries(person))
Object.entries(person).forEach((entrie) => {
  console.log(entrie)
  console.log(entrie[0], entrie[1])
})

// console.log(person.gender)
// person.gender = 'female'
// console.log(person.gender)
