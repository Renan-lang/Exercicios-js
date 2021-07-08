console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Ana', 'Pedro', 'Paulo')
console.log(aprovados)

aprovados = ['Ana', 'Pedro', 'Paulo']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'André'
aprovados.push('Renan')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Dani'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Ana', 'Pedro', 'André']
aprovados.splice(1,1)
console.log(aprovados)
