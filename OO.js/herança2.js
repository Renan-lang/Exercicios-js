//cadeia de prototipo (prototype chain)
 Object.prototype.attr0 = '0'
 const avo = {attr1: 'A'}
 const pai = {__proto__: avo, attr2: 'B'}
 const filho = {__proto__: pai, attr3: 'c'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    VelAtual: 0,
    VelMax: 200,
    acelerarMais (delta){
        if(this.VelAtual + delta <= this.VelMax){
            this.VelAtual += delta
        }else {
            this.VelAtual = this.VelMax
        }
    },
    status(){
        return `${this.VelAtual}Km/h de ${this.VelMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    VelMax:  345
}

const volvo = { 
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())
