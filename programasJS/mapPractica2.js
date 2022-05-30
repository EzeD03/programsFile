const provincias = require("./dataProvincias")
// Mapeamos todos los nombres de cada provincia

const nombreProvincias = provincias.map((provincia) => provincia.nombre)

const provinciaCapital = provincias.map((provincia) => `${provincia.nombre}, ${provincia.capital}`)

console.log(provinciaCapital);