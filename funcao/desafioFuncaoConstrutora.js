function produtos(Nome, Modelo, Preço){
    this.Nome = Nome
    this.Modelo = Modelo
    this.Preço = Preço
}

const Prod1 = new produtos ('LG', 'k11', 1700)
console.log(Prod1)