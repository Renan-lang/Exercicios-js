//closures é o escopo criado quando uma funçao é declarada
// Esse escopo permite a funçao acessar e manipular variaveis externas á funçao
 const x = 'Global'

 function fora(){
     const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
 }
 const minhaFuncao = fora()
 console.log(minhaFuncao()) 
