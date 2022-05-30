/* ASIGNACIÓN */
let miMascota = {
    nombre : 'Kanito',
    edad : 8,
    color : 'blanco',
    vive : true
}

/* OPERADORES ARITMÉTICOS */

let precioProducto_1 = "200"
let precioProducto_2 = 300
let precioProducto_1_Number = Number(precioProducto_1); //parseo un string -> number (ojo!!! deben ser caracteres numéricos!!!!)

precioProducto_1_Number = parseInt(precioProducto_1); //parsea todos los number hasta que encuentre un string
precioProducto_1_Number = parseFloat(precioProducto_1);
precioProducto_1_Number = +precioProducto_1; //que tul! re facil!!!!! (fe de erratas: tienen number!!)

//console.log(+precioProducto_1_Number);

let bono = 50;
let recargo = 0.3;
let cuotas = 12;
let total;

total = precioProducto_1 + precioProducto_2; //500 siempre y cuando los valores sean de tipo number, si no string los concatena

total = precioProducto_1_Number + precioProducto_2;

totalConDescuento = total - bono;

totalPagoConTarjeta = totalConDescuento + (total * recargo);

valorDeCuota = totalPagoConTarjeta / cuotas;

/* console.log(valorDeCuota); */

""
""
/* _______________________________________________________________________________________________ */
""
""

/* let numero = 12374
let a = 0
if (numero % 2 == 0) {
    a = 1
    console.log(a);
} */

""
""
/* _______________________________________________________________________________________________ */
""
""

/* let numeroA = 21;
let numeroB = 5;

let resultadoDeLaDivision = numeroA / numeroB;
let restoDeLaDivision = numeroA % numeroB;

let numeroADefinir = 101;

console.log(numeroADefinir % 2); */

""
""
/* _______________________________________________________________________________________________ */
""
""

/* DE COMPARACIÓN */
/* let numeroA = "16";
let numeroB = 17; */
/* igualdad */
/* console.log(numeroA == numeroB); //simple solo se compara el valor!
console.log(numeroA === numeroB) */; //estricta se compara el valor y tipo de datos!
/* desigualdad */
/* console.log(numeroA != numeroB); //false -> comparación simple porque toma los valor no el tipo!
console.log(numeroA !== numeroB) */; //true -> estricta se compara el valor y tipo de datos!
/* mayor y menor y viceversa */
/* console.log(numeroA > numeroB); //false
console.log(numeroA < numeroB); //true
console.log(numeroA >= numeroB); //false 
console.log(numeroA <= numeroB); //true */

""
""
/* _______________________________________________________________________________________________ */
""
""

console.log('1',!true || true); //false
console.log('2',!true || false); //false
console.log('3',!false || true); //true
console.log('4',!false || false); //true
console.log('5',!true && true); //false
console.log('6',!true && false); //false
console.log('7',!false && true); //true
console.log('8',!false && false);//false

""
""
/* _______________________________________________________________________________________________ */
""
""

