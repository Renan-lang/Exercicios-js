const ferrari = {
    modelo: 'f40',
    VelMax: 345
}

const volvo = {
    modelo: 'v40',
    VelMax: 240
}
console.log(ferrari.prototype)
console.log(ferrari.__proto__)  
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
