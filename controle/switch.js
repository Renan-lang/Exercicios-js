const Resultado = function(Nota) {
    switch(Math.floor(Nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
            console.log('Recuperação')
            break
        case 4:
        case 3:
        case 2:
        case 1: 
            console.log('Reprovado')   
            break
         default:
             (console.log('Nota Invalida')) 
    }
}

Resultado(10)
Resultado(8)
Resultado(6)
Resultado(3)
Resultado(11)