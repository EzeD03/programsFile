const numeros = [ 1 , 2, 66, 34, 232, 11, 26, 96]
const arrObj = [
    {
        nombre:"Ezequiel",
        apellido:"Gonzalez"
    },
    {
        nombre:"Walter",
        apellido:"Mansilla"
    },
    {
        nombre:"Abril",
        apellido:"sdf"
    }
]

function mapeo(arr,callback){
    let arrNuevo = []
    for(let i = 0; i < arr.length; i++){
        arrNuevo.push(callback(arr[i]))
    }
}

mapeo(numeros, function(element){
    return element % 2 === 0 ? numero - 1 : numero
})

const nombrePersonas = mapeo(arrObj, (persona)=>persona.nombre)

function filtrar(arr,callback){
    let arrNuevo = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            arrNuevo.push(arr[i])
        }
    }
}

function forEach2(arr, callback){
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
} 

forEach2(numeros,function(numero){
    if (numero %2 === 0){
        console.log(numero)
    }
})