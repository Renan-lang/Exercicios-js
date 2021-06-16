//Coleçao dinanmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 80000,
    proprietarios :{
        nome: 'Raul',
        idade: 56,
        endereco: {
            lougradouro: 'Rua Grande',
            numero: 123
        }
    },
    condutores:[{
        nome: 'João',
        idade: 19
    }, {
        nome: 'Ana',
        idade: '29'
    }],
    calcularValorSeguro: function(){
        //aaas
    }
}
console.log(carro)
carro.proprietarios.endereco.numero = 1000
carro['proprietarios']['endereco']['lougradouro'] = 'Rua braba'
console.log(carro)

//delete carro.condutores
delete carro.proprietarios.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
