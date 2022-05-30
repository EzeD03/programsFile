module.exports = {
    nombre : "Juan",
    apellido : "Pérez",
    hijos : 3,
    casado : true,
    hobbies : ["música", "futbol", "ciclismo"],
    nombreCompleto : function(){
        return this.nombre, this.apellido
    } 
}
