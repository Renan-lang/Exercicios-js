const soma = function (x, y){
    return x + y
}
console.log(soma(3, 4))

const imprimirResultado = function (a, b, Operacao = soma){
    console.log(Operacao(a, b))
}
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y){
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y )

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar()
