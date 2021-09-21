
const p = new Promise(resolve => {
    resolve = (['Ana', 'Bia', 'Carlos', 'Renan'])
})
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

  p
   .then(primeiroElemento)
   .then(primeiroElemento)
   .then(letraMinuscula)
   console.log(p)