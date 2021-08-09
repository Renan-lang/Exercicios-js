// Arrow function
const soma = (a, b) => a + b
console.log(soma(4, 5))

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametros default
function log(texto = 'AOba') {
    console.log(texto)
}
log()
log('Eu sou o mais Brabo')

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n =>total += n)
    return total
}

console.log(total(2, 3, 4, 5))