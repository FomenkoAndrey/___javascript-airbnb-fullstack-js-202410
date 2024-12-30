const functionality = {
  greet(msg) {
    console.log(`${msg} ${this.name}`)
  },
  print() {
    console.log('Hello World')
  }
}

const person = {
  name: 'John',
  age: 30
}

// person.__proto__ = functionality
Object.setPrototypeOf(person, functionality)

// console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

// console.log(functionality.isPrototypeOf(person))

console.log(person)
person.greet('Hi')
person.print()
