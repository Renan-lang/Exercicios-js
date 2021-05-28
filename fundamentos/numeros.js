const peso1 = 1.0
const peso2 = 2.0

 console.log(peso1, peso2)

console.log(Number.isInteger(peso1, peso2)) // isInteger = True ou False


const avaliacao1 = 9.726
const avaliacao2 = 6.789

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media)
console.log(media.toFixed(3)) //Para limitar o numeros de casas após a virgula
console.log(media.toString(2))//para transformar em numeros binario

console.log(media)



