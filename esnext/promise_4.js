function generateNums(min, max, tempo) {
    if( min > max)  [max,min] = [min, max]
    return new Promise( resolve =>{
        setTimeout(function() {
            const fator = max - min +1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
        }, tempo);
    })
  
}

function gerarVariosNums(){
        return Promise.all([
            generateNums(1, 60,4000),
            generateNums(1, 60,5000),
            generateNums(1, 60,50),
            generateNums(1, 60,100)
        ])
}
console.log('Promise')
gerarVariosNums()
     .then(console.log)
     .then(() =>{
         console.time('Promise')
         console.timeEnd('Promise')
     })
