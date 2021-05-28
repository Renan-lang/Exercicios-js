function bed({min = 50, max = 500}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max:400, min:70}
console.log(bed(obj))
console.log(bed({ min: 70}))
console.log(bed({}))