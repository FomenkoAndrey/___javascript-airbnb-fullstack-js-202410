/* eslint-disable max-classes-per-file */
class Person {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  greet() {
    return `Hello, my name is ${this.name}`
  }
}

class Developer extends Person {
  constructor(...args) {
    super(...args)
    this.skills = args[3] || []
  }

  develop() {
    console.log(`${this.name} developing...`)
  }

  greet() {
    const result = super.greet()
    return `${result}. \n\tI am a real web-developer!`
  }
}

const developer = new Developer('Alex', 25, 'male', ['JavaScript', 'HTML', 'CSS'])

console.log(developer)

console.log(developer.greet())
developer.develop()
