const provincias = require("./dataProvincias");
// Filtrar las provincias que tengan menos de un millón basándonos en el año 2020

const provinciasFiltradas1 = provincias.filter((provincia)=>provincia.poblacion[2020] < 1000000 )

//console.log(provinciasFiltradas1);

// Filtrar las provincias en la que su capital empieza con "san"

const capitalSan = provincias.filter((provincia=>{
    return provincia.capital.slice(0,3).toLowerCase() === "san"
}))

console.log(capitalSan);