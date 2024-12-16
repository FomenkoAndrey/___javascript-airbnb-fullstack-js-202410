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

var person2 = new Object()
person2.name = 'Іван'
person2.age = 30

console.log(person, person2)
person.hello()
