function triple(a){
    return a * 3
}

function tripleDeLaSuma(a,b){
    return (a + b) * 3
}
function tripleDeLaSuma(a,b){
    return triple(a + b)
}

module.exports = triple;

/* 
DATOS:
edad, aporte, genero
*/
let aportes = 30;
function puedeJubilarse(edad, aporte, genero) {
    if (
        ((genero.toLowerCase() === "m" && edad >= 65)
        ||
        (genero.toLowerCase() === "f" && edad >= 60))
        &&
        aporte >= aportes
        ) {
        return true
    } else {
        return false
    }
}
console.log('caso 1',puedeJubilarse(65,30,"m")); //true
console.log('caso 2',puedeJubilarse(60,30,"f")); //true
console.log('caso 3',puedeJubilarse(65,20,"M")); //false
console.log('caso 4',puedeJubilarse(60,10,"F")); //false
console.log('caso 5',puedeJubilarse(64,30,"M")); //false
console.log('caso 6',puedeJubilarse(59,30,"F")); //false
console.log('caso 7',puedeJubilarse(65,30,"F")); //true
console.log('caso 8',puedeJubilarse(60,30,"M")); //false