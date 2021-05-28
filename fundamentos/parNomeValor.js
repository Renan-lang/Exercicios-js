//par nome/valor
const finalizacao = 'tenha um Bom Dia!!!' //contexto léxico 1

function exec() {
    const finalizacao = 'Obrigado e Boa Noite!!!' // contexto léxico 2
    return finalizacao
}
console.log(finalizacao)
console.log(exec())

//Obejtos são grupos aninhados de pares/valor
const prod3 ={
    tênis: 'Nike',
    modelo: 'Air Max 90',
    tamanho: {
        números:'37, 38, 39, 40, 41'
    }
}
console.log(prod3)