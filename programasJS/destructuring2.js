let persona = {
    nombre : "Jorge",
    apellido : "Lanata",
    edad : 60,
    profesion : "periodista",
    fuma : true
}

//let nombre = persona.nombre

const {nombre,apellido,fuma,edad,profesion} = persona

//console.log(nombre,fuma,profesion);

for (const propiedad in persona) {
    console.log(propiedad, ":", persona[propiedad]);
}