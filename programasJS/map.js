const tareas = require("./tareas.json")

actualizarTareas = () => {
    const tareasActualizadas = []
    tareas.forEach(tarea => {
        if(tarea.estado === "en proceso"){
            let tareaActualizada = {
                titulo : tarea.titulo,
                estado : "terminado"
            }
            tareasActualizadas.push(tareaActualizada)
            
        }else{
            tareasActualizadas.push(tarea)
        }
        
    })
    return tareasActualizadas
}

console.log(actualizarTareas());

const actualizarTareasConMap = () => {
    const tareasActualizadas = tareas.map(tarea => {
        if(tarea.estado === "en proceso"){
            let tareaActualizada = {
                titulo : tarea.titulo,
                estado : "terminado"
            }
            return tareaActualizada
        }
        return tarea
    })
    return tareasActualizadas
}

console.log(actualizarTareasConMap())