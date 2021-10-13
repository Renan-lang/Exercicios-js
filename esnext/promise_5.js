const { reject } = require("lodash");

function funcionandoOuNao(valor, chanceDeErro){
    return new Promise((resolve, reject) => {
        try{
            if(Math.random() < chanceDeErro){
            reject('Ocorreu um Erro!')
            }else {
            resolve(valor)
            }
        }catch(e){
        resolve(e)
        }
    })
}
funcionandoOuNao('Testanto...', 0.3)
    .then(v => (console.log(`Valor: ${v}`)))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('FIM!'))