/* eslint-disable no-var */
/* eslint-disable vars-on-top */
function greet(msg, divider) {
  console.log(this)
  console.log(`${msg}${divider} мене звати ${this.name}`)
}
const person = {
  name: 'Андрій',
  greet
}
const person2 = {
  name: 'John'
}
const person3 = {
  name: 'MAry'
}

// person.greet('Привіт', '!')
// person.greet.apply(person2, ['Hello', '!!!'])
// person.greet.call(person3, 'Hello', '!!!')

greet.apply(person2, ['Hello', '!!!'])
greet.call(person3, 'Hello', '!!!')

const greetAndrii = greet.bind(person)
greetAndrii('Привіт', '!!!')

const hiAndrii = greet.bind(person, 'Привіт', '!')
hiAndrii()
hiAndrii()
hiAndrii.call(person2)
hiAndrii.apply(person2)

// 1
// greet()

// 2
// callback

// 3
// dom events
