/*setTimeout(()=>{
    console.log('Exectando CallBacks ...')

setTimeout(()=>{
    console.log('Exectando CallBacks ...')
   },2000)
},2000)*/

function depoisDe(tempo = 2000){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log('Executando Promise')
            resolve('Oba')
        },tempo)
    })
}
depoisDe(3000).then(text => console.log(text))