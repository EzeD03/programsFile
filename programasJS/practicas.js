function naipes(palo){
    let num = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]
    if (palo == "oros"){
        return [num + "de", palo]
    } else if (palo == "espadas"){
        return [num, "de", palo]
    } else if (palo == "copas"){
        return [num, "de", palo]
    } else if (palo == "bastos"){
        return [num, "de", palo]
    }
}
console.log(naipes("oros"))

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */

function laClaveSecreta(n){
    let clave = n
    for (let i = 0; i < n.lenght; i++){
        let filtro = ""
        let palabra = ""
        if (clave != "*"){
            palabra += clave.pop()
        } else {
            filtro += clave.pop()
        }
    return palabra
    }
}

console.log(laClaveSecreta(["Hola"]))

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */

function medallaSegunPuesto(puesto){
    let medalla = ["Seguí participando", "Oro", "Plata", "Bronce"]
    if(puesto > 0 && puesto < 4){
       return medallas[puesto]
   }
    else{
       return medallas[0]
   }

}

console.log(medallaSegunPuesto(4))

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */

function caloriasDeTrote(x) {
    let calorias = 0
    for (vueltas = 1; vueltas <= x; vueltas++ ){
        calorias += 5 * vueltas
    }
    return calorias
}
console.log(caloriasDeTrote(4))

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */

function puedoIrAlBanco(diaDeLaSemana,horaActual){
    
    if (horaActual >= 10 && horaActual < 15 && diaDeLaSemana == "Lunes" || diaDeLaSemana == "Martes" || diaDeLaSemana == "Miercoles" || diaDeLaSemana == "Jueves" || diaDeLaSemana == "Viernes" || diaDeLaSemana == "Sabado"){
        return true
    }
}

console.log(puedoIrAlBanco("Lunes", 8))

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */

function puedoIrAlBanco1(diaDeLaSemana, horaActual) {
    
    if(diaDeLaSemana !== "sabado" && diaDeLaSemana !== "domingo" && horaActual >= 10 && horaActual <= 15){
        return true
    }

    return false

}


function puedoIrAlBanco2(diaDeLaSemana, horaActual) {
    
    return diaDeLaSemana !== "sabado" && diaDeLaSemana !== "domingo" && horaActual >= 10 && horaActual <= 15

}

console.log(puedoIrAlBanco2("lunes",15));
console.log(puedoIrAlBanco2("sabado",10));
console.log(puedoIrAlBanco2("martes",16));

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */

/* Escribí la función `esNumeroDeLaSuerte` la cual recibiendo un número, le diga a Mariana si es un número de la suerte. Recuerda que el número debe cumplir con las tres condiciones mencionadas:

1. Tiene que ser un número positivo.
2. Tiene que ser múltiplo de 2 o de 3
3. No tiene que ser el número 15

Tu reto adicional será: **NO** usar el `if`. Sólo deberás usar la palabra reservada  `return`  dentro de tu código para generar la expresión. */

function esNumeroDeLaSuerte(n){
    return (n % 2 == 0 || n % 3 == 0) && n > 0 && n !== 15
}

console.log(esNumeroDeLaSuerte(10));
console.log(esNumeroDeLaSuerte(8));
console.log(esNumeroDeLaSuerte(9));
console.log(esNumeroDeLaSuerte(5));
console.log(esNumeroDeLaSuerte(15));