function tratarErroElancar(erro) {
    // throw new error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.massege,
        date: new Date
    }
}

    function imprimirNomeGritado(obj) {
        try {
            console.log(obj.name.toUpperCase() + '!!!')
        } catch (e) {
            tratarErroElancar(e)
        }finally {
            console.log('Final')
        }
    }

    const obj = {nome: 'Roberto'}
    imprimirNomeGritado(obj)