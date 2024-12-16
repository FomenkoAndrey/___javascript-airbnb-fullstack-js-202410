const obj = { prop: 42 }
Object.freeze(obj)
obj.prop = 33
console.log(obj.prop)
