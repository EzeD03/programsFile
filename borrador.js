




/* const articulos = ['lapiceras','gomas','plasticola','reglas','escuadras','témperas','pinceles','lápices','colores','cartucheras'];

const papelera = [];

function agregar(array = [],elemento) { */

/*     let posicion = -1
    for (let i = 0; i < array.length; i++) {
        if(array[i] === elemento){
            posicion = i
        }
    } */

/*     let posicion = array.indexOf(elemento);

    if(posicion === -1){
        array.push(elemento);
        return `${elemento} se agregó con éxito.`
    }

    return  `${elemento} ya se encuentra en el registro en la posición ${posicion}`

}

console.log(agregar(articulos,'carpetas'));
console.log(agregar(articulos,'carpetas')); */



/* const fs = require("fs")
const objeto = require("./Objeto")
const objetoJSON = fs.readFileSync("./objeto.json", "utf-8")

const objetoParseado = JSON.parse(objetoJSON)
const objetoJSONRequerido = require("./objeto.json")

console.log(objeto);
console.log(objetoJSON)
console.log(objetoJSONRequerido);
console.log(objetoParseado.nombre); */

/* const data = require("./Objeto.json")

console.log(data);

data.apellido = "Muñoz"

console.log(data); */

/* const fs = require("fs")
const jsonParseado = require("./Objeto.json")

jsonParseado.apellido = "Muñoz"

const objetoString = JSON.stringify(jsonParseado, null, 3)

fs.writeFileSync("./objeto.json", objetoString)

console.log(objetoString); */

/* function loro(texto) {
    for (let i = 1; i <= 5; i++){
        console.log(texto);
    }
}

console.log(loro("Hola")) */

let autos = [
    {
        marca : "Ford",
        modelo : "Fiesta",
        precio : 150000,
        km : 200,
        color : "Azul",
        cuotas : 12,
        anio : 2019,
        patente : "APL123",
        vendido : false
    },{
        marca : "Toyota",
        modelo : "Corolla",
        precio : 100000,
        km : 0,
        color : "Blanco",
        cuotas : 14,
        anio : 2019,
        patente : "JJK116",
        vendido : false
    }
]

/* const concesionaria = {
    autos : this.autos
    
    
}; */

//console.log(autos[1].patente)



/* function a(patente){
    for (i = 0; i < autos.length; i++){
        if (patente === autos[i].patente){
            return autos[i]
        }
        return null
    }
} */
//console.log(a("APL123"))
/* 
function b(patente){
    autos.patente.forEach(patente => {
    return autos
});
}
console.log(b("APL123")) */


  
/* buscarAuto = function(patente){
    if (autos.includes(patente)){
        return autos.patente
    }else{
        return null
    }
}
console.log(buscarAuto("APL123"))

array.forEach( => {
    
}); */

const buscarAuto = (patente) => autos.find(auto => auto.patente.includes(patente) === true ? auto : null)

const venderAuto = (patente) => {
    let autoVendido = buscarAuto(patente)
    autoVendido["vendido"] = true
    return autoVendido
}

console.log(venderAuto("APL123"));