/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
var userName = 'Іван'
function sayHello() {
  console.log('Hello')
}

var person = {
  userName, // property
  age: 30, // property
  hello: sayHello // method
}

person.age = 18 // if exists - change
person.fullName = 'Іван Петрович' // if not exists - add

console.log(person.skills)

console.log('---------------')

for (key in person) {
  console.log(key, person[key])
}
