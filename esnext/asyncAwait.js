//sem promises
const http = require('http')
const { get } = require('lodash')

const getTurma = (letra,callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url,res => {
        let resultado = ''

        res.on('data',dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}


//Recurso do ES8
//Objetivo de simplificar  o uso de promises
let ObterAlunos = async () => {
const ta = await getTurma('A')
const tb = await getTurma('B')
const tc = await getTurma('C')
return [].concat(ta,tb,tc)
}

ObterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))