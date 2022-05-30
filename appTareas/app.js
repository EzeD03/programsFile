const process = require("process");

const { crearTarea, agregarTarea, encontarTarea } = require("./funcionesDeTareas")
const { leerArchivo } = require("./funcionesDeTareas");
const listaDeTareas = require("./tareas.json");
const funcionesDeTareas = require("./funcionesDeTareas")

const tareas = funcionesDeTareas.leerArchivo()

const accion = process.argv[2].toLowerCase();
const tituloInput = process.argv[3].toLowerCase()
const estadoInput = process.argv[4].toLowerCase()

const acciones = ["listar","crear"]

switch (accion) {
    case acciones[0]:
        console.log("Listado de tareas\n-----------------");
        for (let i = 0; i < tareas.length; i++) {
            console.log(`(${i + 1}). ${tareas[i].titulo} - ${tareas[i].estado}`);
        }
        break;
    case acciones[1]:
        let tareaNueva = new crearTarea(tituloInput,estadoInput)
        listaDeTareas.find(objeto => {
            objeto.titulo
        })
        agregarTarea(tareaNueva)
        console.log("Tarea agregada correctamente.\n---------------");
        break
    case undefined:
        console.log(`\nAtención - Tienes que pasar una acción.\nLas acciones disponibles son: "${acciones}"\n--------------------------------------`);
        break
    default:
        console.log(
        `--------------------------------------\nNo entiendo qué quieres hacer.\nLas acciones disponibles son: "${acciones}"\n--------------------------------------`);
        break;
}
console.log(listaDeTareas.find(tituloInput => tituloInput.titulo))
