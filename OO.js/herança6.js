function aula(nome, VideoID){
   this.nome = nome,
   this.VideoID = VideoID
}
const aula1 = new aula ('AOOBa', 234)
const aula2 = new aula ('Trem baum', 235)
console.log(aula1,aula2)

//simulando New
function novo(f,params){
    const obj = {}
    obj.__proto__ = f.prototype 
    f.apply( params, obj)
    return obj
}
 const aula3 = novo(aula,'iiiraapaz', 344)
 const aula4 = novo(aula,'epa',345)
 console.log(aula3, aula4)      