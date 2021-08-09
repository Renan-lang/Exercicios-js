// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal

const nome = 'Renan'
const pessoa = {
    nome,
    ola(){
        return 'Eai galera!!!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class

class Animal {}
class Cachorro extends Animal {
    falar(){
        console.log('AUAUAUAU')
    }
}

new Cachorro().falar()