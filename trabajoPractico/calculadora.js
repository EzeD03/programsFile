const process = require("process")

const sumar = require("./sumar")
const restar = require("./restar")
const multiplicar = require("./multiplicar")
const dividir = require("./dividir")

let numeroA = +process.argv[2]
let numeroB = +process.argv[3]

console.log(sumar(numeroA, numeroB));
console.log(restar(numeroA, numeroB));
console.log(multiplicar(numeroA, numeroB));
console.log(dividir(numeroA, numeroB));