const Person = function (name, age, gender) {
  const privateMethod = () => console.log('I am private')
  const _show = () => console.log('I am private2')
  this.name = name
  this.age = age
  this.gender = gender
  this.print = function () {
    privateMethod()
    _show()
  }
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`)
}

const person = new Person('Jhon', 35, 'male')
console.log(person)

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
