const sumarUnoPromesa = (numero) =>{
    //La resolucion y error como segundo argumento
    var promesa = new Promise(function(resolve,reject){
        console.log(numero)
        if(numero >= 7){
            reject('Numero muy grande')
            return //salirse
        }
        setTimeout(function(){
            resolve(numero+1)
        },2000)
    })

    return promesa
}

// sumarUnoPromesa(5).then((value) =>{
// console.log(value)
// sumarUnoPromesa(value).then((value) =>{
//     console.log(value)
//     sumarUnoPromesa(value).then((value) =>{
//         console.log(value)
//         })
//     })
// })

sumarUnoPromesa(5).then(res =>sumarUnoPromesa(res))
.then(final => sumarUnoPromesa(final))
.then(sumarUnoPromesa)
.catch(error => console.log(error))