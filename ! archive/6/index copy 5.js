const Person = function (name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
  this.print = function () {
    console.log('Hello world')
  }
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`)
}

const person = new Person('Jhon', 35, 'male')
console.log(person)

const Developer = function (name, age, gender, skills) {
  // eslint-disable-next-line prefer-rest-params
  Person.apply(this, arguments)
  this.skills = skills || []
}

Developer.prototype = Object.create(Person.prototype)
Developer.prototype.constructor = Developer

Developer.prototype.develop = function () {
  console.log('Developing...')
}

Developer.prototype.greet = function () {
  Person.prototype.greet.call(this)
  console.log('I am a developer')
}

const developer = new Developer('Alex', 25, 'male', ['JavaScript', 'HTML', 'CSS'])

console.log(developer)

developer.greet()
developer.develop()
