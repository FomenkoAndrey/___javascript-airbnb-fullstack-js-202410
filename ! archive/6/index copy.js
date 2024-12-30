const Person = {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    return this
  },
  greet() {
    console.log('Hi')
  }
}

const person1 = Object.create(Person).constructor('Jhon', 35, 'male')
const person2 = Object.create(Person).constructor('Bob', 21, 'male')
console.log('🚀 ~ person1:', person1)
console.log('🚀 ~ person2:', person2)

// ! Проблема - дублювання коду
// const person = {
//   name: 'Jhon',
//   age: 35,
//   gender: 'male',
//   greet() {
//     console.log(`Hi, my name is ${this.name}`)
//   }
// }

// const anotherPerson = {
//   name: 'Jessi',
//   age: 23,
//   gender: 'female',
//   greet() {
//     console.log(`Hi, my name is ${this.name}`)
//   }
// }

// const thirdPerson = {
//   name: 'Bob',
//   age: 40,
//   gender: 'male',
//   greet() {
//     console.log(`Hi, my name is ${this.name}`)
//   }
// }
