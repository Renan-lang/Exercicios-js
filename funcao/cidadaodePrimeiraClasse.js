// Funçao em JS é First-Class Object (Citizens)
// Higher-Order Funtion

//Criar de forma literal
function fun1() { }

//Armazenar em uma Variavel
const fun2 = function () { }

//Armazenar em um Array
const array = [ function (a, b) {return a + b}, fun1 , fun2 ]
console.log(array[0] (2,3 ))

//Armazenar em um atributo de  Object
const obj = { }
obj.Falar = function () { return 'AOOBA, tudo Baum'}
console.log(obj.Falar())

//Passar function como parametro
function run(fun){
        fun()
}
run(function() {console.log('Executando...')})

//Uma Funtion pode retornar/conter  um funtion
function soma(a,b) {
    return function (c){
        console.log(a + b + c)
    }
}
soma(2, 3)(6)


