function criarProd(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProd('Iphone', 10000))