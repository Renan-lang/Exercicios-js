//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12349.99}
const clone = {...funcionario}
console.log(clone)

//usar spread com Array
const grupoA = ['Maria', 'André', 'Renan', 'Danielle']
const grupoFinal = ['Eric', 'Carol', 'Regina',...grupoA]
console.log(grupoFinal)