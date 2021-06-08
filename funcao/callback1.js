const Fabricante = ["BMW", "Audi", "Mercedes"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
Fabricante.forEach(imprimir)
Fabricante.forEach(Fabricante =>console.log(Fabricante))
