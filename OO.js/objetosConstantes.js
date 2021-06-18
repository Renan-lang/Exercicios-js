// pessoa -> 123 ->  {...} 

const pessoa = {nome:'joao'}
pessoa.nome  = 'Renan'
console.log(pessoa) 

// pesso -> 456  -> {...}
//pessoa = {nome: 'ana'}  = erro

Object.freeze(pessoa)
pessoa.nome = 'maria'
pessoa.end = 'rua legal'
delete pessoa.nome

console.log(pessoa)
console.log(pessoa.nome)


const  pessoaConstante = Object.freeze({nome: 'Osvaldo'})
console.log(pessoaConstante)