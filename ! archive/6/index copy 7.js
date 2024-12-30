/* eslint-disable class-methods-use-this */
class MyClass {
  static staticProperty = 'Статичне значення' // Статична властивість

  #privateProperty = 'Приватне значення' // Приватна властивість

  constructor(publicProperty) {
    this.publicProperty = publicProperty // Публічна властивість
  }

  static staticMethod() {
    return 'Статичний метод' // Статичний метод
  }

  #privateMethod() {
    console.log(this.#privateProperty)
    return 'Приватний метод' // Приватний метод
  }

  publicMethod() {
    return `Публічний метод, ${this.#privateMethod()}` // Публічний метод
  }
}

console.log(MyClass.staticProperty) // Виводить "Статичне значення"
console.log(MyClass.staticMethod()) // Виводить "Статичний метод"

const myInstance = new MyClass('Публічне значення')
console.log(myInstance.publicProperty) // Виводить "Публічне значення"
console.log(myInstance.publicMethod()) // Виводить "Публічний метод, Приватний метод"
// Приватні члени не доступні ззовні класу, тому наступні рядки викинуть помилку:
// console.log(myInstance.#privateProperty); // SyntaxError
// console.log(myInstance.#privateMethod()); // SyntaxError
