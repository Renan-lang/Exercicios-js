Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Ana', 'Miguel', 'Roberta', 'Renan']

aprovados.forEach2(function (Nome, indice){
    console.log(`${indice + 1}) ${Nome} `)
})