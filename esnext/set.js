//não aceita repetição/ nao indexada
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('São Paulo').add('Corinthians')
times.add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))


const nome = ['Raquel', 'Duda', 'Julia', 'Duda']
const nomeSet = new Set(nome)
console.log(nomeSet)