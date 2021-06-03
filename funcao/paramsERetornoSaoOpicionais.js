function area(Largura, Altura){
    const area = Largura * Altura
    if (area < 20){
        console.log(`Vamor acima do permitido: ${valor}m2.`)
    }else {
         return `${area}m2`
    }
}
console.log(area(10,2))
console.log(area(10, 10))
