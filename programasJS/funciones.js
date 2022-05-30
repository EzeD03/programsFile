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