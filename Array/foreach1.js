const aprovados = ['Ana', 'Miguel', 'Roberta', 'Renan']

aprovados.forEach(function (Nome, indice){
    console.log(`${indice + 1}) ${Nome} `)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
