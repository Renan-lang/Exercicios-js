function red([min = 0, max = 100]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * [min - max] + min
    return Math.floor(valor)
}

console.log(red([50, 40]))
console.log(red([500]))
console.log(red([, 70]))
console.log(red([]))
