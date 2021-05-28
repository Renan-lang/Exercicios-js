// Novo recurso do ES2015

const pessoa = {
    Name:('Beto'),
    Age:('35 anos'),
    Address:{
        road:('R.Feliciadade'),
        number:(7),
        cep:(578.543)
    }
}

const {Name, Age, Address} = pessoa
console.log(Name, Age, Address)

const {Name: n, Address: i} = pessoa
console.log(n, i)

console.log(pessoa)

const {humano, hoje = true} = pessoa
console.log(humano, hoje)




