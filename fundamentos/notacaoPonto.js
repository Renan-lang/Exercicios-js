console.log(Math.ceil(7.4))

const obj1 = {}
obj1.nome = 'Yori'
//obj1.['nome'] = 'yori
console.log(obj1)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('exec...')
    }
}
const obj2 = new Obj('Roupa')
const obj3 = new Obj('HUM')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

function moto (company, model, years) {
    this.company = company;
    this.model = model;
    this.years = years;
}
const moto1 = new moto ('Honda','Hornet','2019')
console.log(moto1)
 const moto2 = new moto ('kamaki', 'key', '2021')
 
console.log(moto2)
 





