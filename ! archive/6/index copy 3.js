const Person = function (name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
}

const Functionality = {
  start: 0,
  end: 122,
  print() {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
  },
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

Object.assign(Person.prototype, Functionality)

console.dir(Person)
const person = new Person('Jhon', 35, 'male')
console.log(person)
person.print()
person.greet()

// const Developer = Object.create(Person)

// Developer.constructor = function (name, age, gender, skills) {
//   Person.constructor.apply(this, arguments)
//   this.skills = skills
//   return this
// }

// Developer.develop = function () {
//   console.log('Developing...')
// }

// const developer = Object.create(Developer).constructor('Alex', 25, 'male', ['JavaScript', 'HTML', 'CSS'])

// console.log(developer)

// developer.greet()
// developer.develop()
