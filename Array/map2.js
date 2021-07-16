const carrinho = [
    '{"nome": "Borracha", "preço": 3.45}',
    '{"nome": "Caderno", "preço": 13.90}',
    '{"nome": "Kit Lapís", "preço": 41.22}',
    '{"nome": "Caneta", "preço": 7.50}'
]

const paraOBJeto = json => JSON.parse(json)
const apenasPreço = produto => produto.preco

const resultado = carrinho.map(paraOBJeto).map(apenasPreço)
console.log(resultado)