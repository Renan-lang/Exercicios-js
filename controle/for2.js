const notas = [8.2, 9.1, 7, 7.23, 6.92]     

for(let i in notas) {
    console.log(i, notas[i])
}

const Pessoa = {
    Nome:' Amanda ',
    Sobrenome:'Silva ',
    Idade:25,
    Peso:64
}

for(let atributo in Pessoa) {
    console.log(`${atributo} = ${Pessoa[atributo]}`)
}  