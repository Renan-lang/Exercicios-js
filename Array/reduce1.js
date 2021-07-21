const alunos = [
    { nome: 'Ana', nota: 7.5, bolsista: false},
    { nome: 'Rafa', nota: 8.0, bolsista: true},
    { nome: 'Pedro', nota: 9.2, bolsista: false},
    { nome: 'João', nota: 9.8, bolsista: true}
]

resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual
})
console.log(resultado)