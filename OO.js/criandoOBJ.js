// usando Notacao Literal

const obj1 = {}
console.log(obj1)

//usando Object em Js
const objs2 = new Object
console.log(objs2)

//funcao construtora
function Produto (nome, preco, desc){
    this.nome = nome
    this.getPrecocomDesconto = () => {
        return preco * (1 - desc)
    }
}

const P1 = new Produto('Lapis', 5, 0.40)
const P2 = new Produto('Carro', 75000, 0.25)
console.log(P1.getPrecocomDesconto(), P2.getPrecocomDesconto())

//funcao factory

function Funcionario (nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}


const f1 = Funcionario('Renan', 6000, 5)
const f2 = Funcionario('Olavo', 4500, 7)
const f3 = Funcionario('Ana', 15000, 1)
console.log(f1.getSalario(), f2.getSalario(), f3.getSalario())
