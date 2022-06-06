let saludo = "hola, "

//función declarada.

function repetirSaludo(cantidad){
    return saludo.repeat(cantidad)
}

console.log(repetirSaludo(5));

//función expresada.

const repetirSaludo2 = function(cantidad,mensaje) {
    return mensaje.repeat(cantidad)
}

console.log(repetirSaludo2(5,"Chauuu"));

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */

const process = require('process');
const numeroA = +process.argv[2];
const numeroB = +process.argv[3];

function sumar(a,b) {
    return a + b
}

console.log(sumar(numeroA, numeroB));
