const primerTrimestre = [7,8,9,3]
const segundoTrimestre = [4,10,,7,10]

const sumar = (array) => array.reduce( (acum, num) =>{
    
    return acum + num
})

let promedio = (notas) => +(sumar(notas) / notas.length).toFixed(0)

