const provincias = require("./dataProvincias")

// Realizar la suma de toda la población argentina del año 2020 sobre las provincias disponibles

const cantidadPoblacion = provincias.reduce((acum,provincia)=> acum + provincia.poblacion[2020],0)

console.log(cantidadPoblacion);
