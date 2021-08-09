//let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

//Template String

const produto = 'Ipad'

console.log(`${produto} é caro!!!`)

//Destructuring

const [l, e, ...tras] = 'Renan'
console.log(l,e,tras)

const [x, y] = [1, 2]
console.log(x, y)

const {idade, nome} = {nome: 'Alberto', idade: 34}
console.log(idade,nome)
