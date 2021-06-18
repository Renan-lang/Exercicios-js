const a = 1
const b = 2
const c = 3

const obj1 = {a: a , b: b, c: c}
const obj2  = {a, b, c}
console.log(obj1,obj2) 

const nomeATTr = 'nota'
const valorATTr = 7.56

const obj3 = {}
obj3[nomeATTr]  = valorATTr
console.log(obj3)

const obj4 = {[nomeATTr]: valorATTr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //...
    }, 
    funcao2 (){
        //sa
    }
}
console.log(obj5)