const escola = [{
    nome: 'Turma M1',
    Alunos: [{
        nome: 'Ana',
        nota: 9.7
    }, {
        nome: 'Rafael',
        nota: 8.67
    }]
}, {
    nome: 'Turma M2',
    Alunos: [{
        nome: 'Renan',
        nota: 9.57
    },{
        nome: 'Igor',
        nota: 7.8
    }]
}]

const getNotaDoAluno = Alunos => Alunos.nota
const getNotasDaTurma = turma => turma.Alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
