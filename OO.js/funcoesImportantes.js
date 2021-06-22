const pessoa = {
    nome: 'Ana ',
    idade: 16,
    peso: 50
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'DatadeNascimento',{
    enumerable: true,
    writable: true,
    value: '11/12/2004'
})
console.log(pessoa.DatadeNascimento)
pessoa.DatadeNascimento = '23/04/1990'
console.log(pessoa.DatadeNascimento)

//Object assign (ES 2015)

const dest = {a: 1}
const ob1 = {b: 3}
const ob2 = {c: 4}
const ob3 = {d: 5, a: 7}
const obj = Object.assign(dest, ob1, ob2, ob3)
console.log(obj)