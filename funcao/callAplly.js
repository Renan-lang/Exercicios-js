function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notbook', 
    preco: 4599,
    desc: 0.15,
    getPreco
}
global.produto = 20
global.desc = 0.2
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 40000, desc: 0.30}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
