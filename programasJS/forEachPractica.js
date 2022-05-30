const provincias = require("./dataProvincias")
// Crear un nuevo objeto con la información de las provincias armada como el siguiente ejemplo.
// {
//     "Chubut-2010" : 509108,
//     "Chubut-2020" : 618994,
//     "Buenos Aires-2010": 15625084,
//      etc...
// }

const nuevoObjeto = {}

provincias.forEach((provincia) =>{
    /* nuevoObjeto[provincia.nombre + "-" + 2010] = provincia.poblacion[2020]
    nuevoObjeto[provincia.nombre + "-" + 2010] = provincia.poblacion[2020] */

    for (let key in provincia.poblacion){
        nuevoObjeto[provincia.nombre + "-" + key] = provincia.poblacion[key]
    }
})

console.log(nuevoObjeto);