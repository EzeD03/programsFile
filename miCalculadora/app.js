const process = require("process")

const calculador = require("./functions")

let operator = process.argv[2].toLowerCase();
let numeroA = +process.argv[3];
let numeroB = +process.argv[4];

let resultado = 0;
let operators = ['suma','resta','multiplicacion','division', "potenciacion", "resto"];

if(operators.includes(operator)){

    if(!isNaN(numeroA) && !isNaN(numeroB)){
        if (operator === "suma") {
            resultado = calculador.suma(numeroA, numeroB);
        }else if (operator === "resta") {
            resultado = calculador.resta(numeroA, numeroB);
        }else if (operator === "multiplicacion") {
            resultado = calculador.multiplicacion(numeroA, numeroB);
        }else if (operator === "division") {
            resultado = calculador.division(numeroA, numeroB);
        }else if (operator === "potenciacion") {
            resultado = calculador.potenciacion(numeroA, numeroB)
        }else if (operator === "resto") {
            resultado = calculador.resto(numeroA, numeroB)
        }
        console.log(`El resultado de tu ${operator} es:`,resultado);

    }else{
        console.log('El valor ingresado no es numérico.');
    }

}else{
    console.log('Lo sentimos, la operación solicitada no está integrada en la calculadora.\n',`Las operaciones válidas son:\n${operators.join("\n")}`);
}