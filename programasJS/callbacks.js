function saludar(){
    return console.log("Hola gente!")
}

setTimeout(saludar, 3000)

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */

function agregarHttp(url) {
    return "http://" + url
}

function procesar(array,cb){
    let newArray  = []
    for (i = 0; i < array.length; i++ ){
    newArray.push(cb(array[i]))
    }
    return newArray
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
}

console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp));

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */
