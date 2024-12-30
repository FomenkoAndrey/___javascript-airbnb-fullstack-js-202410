/* eslint-disable prefer-rest-params */
const Person = {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    return this
  },
  greet() {
    console.log(`Hi! ${this.name}`)
  }
}

// const person = Object.create(Person).constructor('Jhon', 35, 'male')

const Developer = Object.create(Person)

Developer.constructor = function (name, age, gender, skills) {
  Person.constructor.apply(this, arguments)
  this.skills = skills
  return this
}

Developer.develop = function () {
  console.log('Developing...')
}

const developer = Object.create(Developer).constructor('Alex', 25, 'male', ['JavaScript', 'HTML', 'CSS'])

console.log(developer)

developer.greet()
developer.develop()
