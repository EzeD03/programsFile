const fechaActual = new Date()
const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
const meses = ["Ene", "Feb", "Mar", "Abr","May", "Jun", "Ago", "Sep", "Oct", "Nov", "Dic"]

let diaDeLaFecha = fechaActual.getDate()

let diaDeLaSemana = dias[fechaActual.getDay()]

console.log(diaDeLaFecha);

let mes = meses[fechaActual.getMonth()]

let year = fechaActual.getFullYear()

console.log(diaDeLaSemana, diaDeLaFecha, "De", mes, "Del", year);