/* eslint-disable no-var */
var firstName = 'John'
var lastName = 'Smith'
var middleName = ''
var defaultMiddleName = 'Johnovich'

var resultMiddleName = middleName ?? defaultMiddleName
var fullName = `${firstName} ${resultMiddleName} ${lastName}`
console.log(fullName)
