const notas = [7.3, 5.6, 8.9, 4.9, 3.4, 9.0]

//sem callback
 let notasBaixas1 = []
  for(let i in notas){
      if(notas[i] <= 7){
      notasBaixas1.push(notas[i])
    }
  }
console.log(notasBaixas1)


//com callback
const notasBaixas2 = notas.filter(function(notas){
    return notas < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas < 7 )
console.log(notasBaixas3)
