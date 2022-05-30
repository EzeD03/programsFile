const tareas = [
    {
        "titulo" : "Hacer Playground",
        "estado" : "terminado"
    },
    {
        "titulo" : "Hacer Playground",
        "estado" : "terminado"
    },
    {
        "titulo" : "Hacer Playground",
        "estado" : "terminado"
    },
    {
        "titulo" : "Hacer Playground",
        "estado" : "terminado"
    }
]

for (let i = 0; i < tareas.length; i++) {
    console.log(`${i + 1}.- ${tareas[i].titulo}, estado: ${tareas[i].estado}`);
    
}

tareas.forEach((tarea,i) =>{
    console.log(`${i + 1}.- ${tarea[i].titulo}, estado: ${tarea[i].estado}`)
})