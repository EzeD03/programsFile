const nombres = ["María", "José", "Daniel", "Abril", "Walter", "Julieta", "María", "José", "Daniel", "María", "José", "José"]

const cuentaNombres = (array) => {
    return array.reduce((contador,nombre) => {

        contador[nombre] = (contador[nombre] || 0) + 1
        return contador 
    },{})
}

console.log(cuentaNombres(nombres));