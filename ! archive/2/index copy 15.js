const obj = {
  prop: 42,
  complexProp: {
    innerProp: 5
  }
}
Object.freeze(obj)
obj.complexProp.innerProp = 10
console.log(obj.complexProp.innerProp)
