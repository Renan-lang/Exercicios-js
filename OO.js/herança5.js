console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Avisa la que cheguei'.reverse())

Array.prototype.first = function () {
    return this [0]
}

console.log([1, 3, 4, 6].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
   return  'Eita mizera, lascou foi tudo'
}
console.log('eusoudemais'.reverse())