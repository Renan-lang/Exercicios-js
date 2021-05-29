let a = 3

global.b = 123

this.c = 246
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca sem var nem let
adc = 214
console.log(global.adc)

//module.exports = { c: 246, d: false, e: 'teste' }