// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 15, 9, 7)
imprimirSoma()

// Funcao com retorno
function Soma(a, b = 1) {
    return a + b
}

console.log(Soma(2 + 3))
console.log(Soma(2))
console.log(Soma())

