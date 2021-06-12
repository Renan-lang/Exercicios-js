const valor = 'Global'
function minhaFun (){
    console.log(valor)
}

function acee(){
    const valor = 'Local'
    minhaFun()
}

acee()