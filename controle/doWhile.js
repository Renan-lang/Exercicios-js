function Repetir(min, max){
    const valor = Math.random() * (max - min) + min
    return (Math.floor(valor))
}

let opcao = 0

/*while  (opcao != -1) {
    opcao = Repetir (-1,10)
    console.log(`Opçao escolhida foi ${opcao}.`)
}
console.log('Até a proxima')*/
 
 do {
    opcao = Repetir (-1,10)
    console.log(`Opçao escolhida foi ${opcao}.`)
}while  (opcao != -1)
console.log('Até a proxima')