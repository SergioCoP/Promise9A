console.log("Hola Mundo")

const sumarUno = (numero,callback) =>{
    
    if(numero >= 7){
        //Primer argumento es el error
        callback('Numero muy grande')
        return //salirse
    }
    setTimeout(function(){
        //Primer argumento null, ya que no hay error
        callback(null,numero+1)
    },2000)

}
//nuevoValorque retorna el callback, despues del tiempo
//establecido
sumarUno(5,function(error,nuevoValor){
    if(error){
        console.log(error)
        return
    }
    console.log(nuevoValor)
    sumarUno(nuevoValor,function(error,nuevoValor2){
        if(error){
            console.log(error)
            return
        }
        console.log(nuevoValor2)
        sumarUno(nuevoValor2,function(error,nuevoValor3){
            if(error){
                console.log(error)
                return
            }
            console.log(nuevoValor3)
        })
    })
})


