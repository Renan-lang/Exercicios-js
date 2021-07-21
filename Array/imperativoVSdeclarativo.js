const Alunos = [
    { nome: 'Ana', nota: 8.7},
    { nome: 'Renan', nota: 9.0}
]

// imperativo

 let total1 = 0
 for(let i = 0; i < Alunos.length; i ++) {
     total1 += Alunos[i].nota
 }
 console.log(total1 / Alunos.length)

 //Declarativo

 let getNotas = Alunos => Alunos.nota
 let soma = (total,Alunos) => total + Alunos
const total2 = Alunos.map(getNotas).reduce(soma)
console.log(total2 / Alunos.length)