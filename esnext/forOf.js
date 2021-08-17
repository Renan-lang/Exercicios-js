for(let letra of "Renan") {
    console.log(letra)
}

const assuntosEcma = ['map', 'Set', 'Promise']

for(let i in assuntosEcma) {
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntoMap  = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado:false}]
])

for(let assunto of assuntoMap){
    console.log(assunto)
}

for(let chave of assuntoMap.keys()){
    console.log(chave)
}

for(let valor of assuntoMap.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntoMap.entries()){
    console.log(ch, vl)
}