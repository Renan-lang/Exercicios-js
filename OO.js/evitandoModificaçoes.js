//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoçao'
})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Bala'
produto.descricao = 'Bala de doce de leite'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 24}
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze  = selado + valores constantes
