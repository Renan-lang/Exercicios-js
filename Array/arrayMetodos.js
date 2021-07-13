const pilotos = ['Vettel', 'Alonso', 'Raikkomen', 'Massa']
pilotos.pop() // Retira o Ultimo Elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona no Ultimo Elemento
console.log(pilotos)

pilotos.shift() // Remove o Primeiro Elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no Primeiro Elemento
console.log(pilotos)

//Splice pode adicionar e Remover Elementos

//Adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos) 

//Remover
pilotos.splice(3, 1)
console.log(pilotos)

const AlgunsPilotos1 = pilotos.slice(2) //novo array| Apartir De
console.log(AlgunsPilotos1)

const AlgunsPilotos2 = pilotos.slice(1, 4) // DE/Até
console.log(AlgunsPilotos2)