//tagged Template - processa o Template dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Renan'
const status = 'Aprovado'
console.log( tag `${aluno} está ${status}`)