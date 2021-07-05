class lancamento {
    constructor (nome = 'Generico', valor = 0){
        this.nome = nome    
        this.valor = valor
    }
}

class ciclofinanceiro {
    constructor (mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addlancamentos (... lancamentos) {
        lancamentos.forEach (l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach (l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento ('Salario', 17000)
const contadeluz = new lancamento('luz', -980)
const contas = new ciclofinanceiro(6, 2020)
contas.addlancamentos(salario, contadeluz)
console.log(contas.sumario()) 
