const comision14 = {
    turno : "mañana",
    horario : "9 - 11",
    profesores : [
        "Eric",
        "Matias"
    ]
}
const comision16 = {
    turno : "tarde",
    horario : "16 - 18",
    profesores : [
        "Eric",
        "Emmanuel"
    ]
}
const comision15 = {
    turno : "noche",
    horario : "19 - 21",
    profesores : [
        "Eric",
        "Julián"
    ]
}

const alumno = {
    nombre : "Marcos",
    apellido : "Mansilla"
}

const alumna = {
    nombre : "Daniela",
    apellido : "Fernandez"
}

const alumno2 = {
    nombre : "Fabián",
    apellido : "Coseglia"
}

const inscripcion = (datosPersonales,comision) => {
    const registro = {
        nombre : datosPersonales.nombre,
        apellido : datosPersonales.apellido,
        comision : comision.turno,
        horario : comision.horario,
        profesores : comision.profesores
    }

    return registro
}

console.log(inscripcion(alumno1, comision14));

const inscripcion2 = (datosPersonales,comision) => {
    const registro = {
        ...datosPersonales,
        ...comision,
        profesores : ["Jonatan","Emanuel"]
    }

    return registro
}