const nums=  [1, 2, 3, 4, 5]

resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const Triplo = e => e * 3
const emReais = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}.`

resultado = nums.map(soma10).map(Triplo).map(emReais)
console.log(resultado)  