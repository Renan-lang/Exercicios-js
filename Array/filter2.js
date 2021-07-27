Array.prototype.filter2= function(callback){
    newArray = []
    for( let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 10.50, fragil: true}
]

console.log(produtos.filter(function(i){
    return false
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil
console.log(produtos.filter2(caro).filter2(fragil))