const pai = {nome: 'Leandro', corDeCabelo: 'Loiro'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome, filha1.corDeCabelo)

const filha2 = Object.create(pai,{
    nome:{value: 'Clara', writable: false, enumerable: true}
})

console.log(filha2.nome)

console.log(`${filha2.nome}: Tem cabelo ${filha2.corDeCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por Herança: ${key}.`)
}

