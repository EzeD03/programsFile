const fs = require("fs");
const listaDeTareas = require("./tareas.json")

const archivoTareas = {
    archivo : "tareas.json",
    leerArchivo : function(){
        let tareas = fs.readFileSync(this.archivo,"utf-8");
        return JSON.parse(tareas)
    },
    /* encontrarTarea : listaDeTareas.filter(titulo => {
        this.titulo
    }), */
    crearTarea : function(titulo,estado){
        this.titulo = titulo
        this.estado = estado
    },
    agregarTarea : function(tarea){
        listaDeTareas.push(tarea)
        fs.writeFileSync("./tareas.json",JSON.stringify(listaDeTareas,null,3))
        return this.leerArchivo
    }


    
}
module.exports = archivoTareas;

