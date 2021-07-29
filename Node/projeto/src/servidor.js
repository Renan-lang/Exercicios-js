const porta = 3003

const express = require('express')

const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notbook', preço: 3500.89}) //Converter para JSON
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta:${porta}.`)
})

