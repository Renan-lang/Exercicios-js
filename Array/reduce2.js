const alunos = [
    { nome: 'Ana', nota: 7.5, bolsista: true},
    { nome: 'Rafa', nota: 8.0, bolsista: true},
    { nome: 'Pedro', nota: 9.2, bolsista: false},
    { nome: 'João', nota: 9.8, bolsista: true}
]

//Desafio 1: Todos Sao bolsistas?

const TodosBolsa = (resultado,bolsa) => resultado && bolsa
console.log(alunos.map(a => a.bolsista).reduce(TodosBolsa))

//Desafio 2: Se Algum Aluno é Bolsista

const algumBolsa = (resultado,bolsa) => resultado || bolsa
console.log(alunos.map(a => a.bolsista).reduce(algumBolsa)) 