/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

var car = Object.create({
  model: 'BMW',
  year: 2019,
  owner: 'John Doe',
  driver: 'John Doe'
})

// car.model = 'Supra'
// car.year = 2024
car.owner = 'Bob Smith'
// car.driver = 'John Doe'

console.log(car.model)
console.log(car.year)
console.log(car.owner)
console.log(car.driver)

console.log(car)

// delete car.owner

console.log(car)

console.log(car.hasOwnProperty('model'))
console.log('model' in car)

console.log(car.hasOwnProperty('owner'))
console.log('owner' in car)
