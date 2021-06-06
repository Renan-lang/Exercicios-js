let dobro = function (a) {
    return 2 * a
}
console.log(dobro(2))

dobro = a => 2 * a //Retorno implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}
console.log(ola())

ola = () => 'Olá'
ola =  _ => 'Oláaa'//Possui um paramentro
console.log(ola()) 

