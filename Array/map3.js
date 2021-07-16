Array.prototype.map2 = function (callback){
    const newArray = []
    for (let i = 0; 1 < this.length; i++ ){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

let carrinho = [
    '{ "nome": "Borracha", "preço": 3.45 }',
    '{ "nome": "Caderno", "preço": 13.90 }',
    '{ "nome": "Kit Lapís", "preço": 41.22 }',
    '{ "nome": "Caneta", "preço": 7.50 }'
]

const paraOBjeto = json => JSON.parse(json)
const apenasPreço = produto => produto.preço

const resultado = carrinho.map2(paraOBjeto).map2(apenasPreço)
console.log(resultado) 