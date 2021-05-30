Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
const Resultado = function (Nota){
    if (Nota.entre(9, 10)){
        console.log('Quadro de Honra ')
    }else if (Nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if (Nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if (Nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota Invalida')
    }
    console.log('Finalizado')
}

Resultado(9.1)
Resultado(7.45)
Resultado(5)
Resultado(2.45)
Resultado(-1)
