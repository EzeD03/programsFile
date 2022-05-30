const process =  require("process")

const entradaOperacion = process.argv[2].toLowerCase
const entradaMonto = +process.argv[3]
const entradaNombreUsuario = process.argv[4]

const usuariosDisponibles = [
    {
      nombre: "Alberto",
      dinero: 0,
      numeroCuenta: "1",
    },
    {
      nombre: "Cristian",
      dinero: 0,
      numeroCuenta: "2",
    },
    {
      nombre: "Maximiliano",
      dinero: 0,
      numeroCuenta: "4",
    },
    {
      nombre: "Fabian",
      dinero: 0,
      numeroCuenta: "5",
    },
];

const miCuenta = {
    nombre: "Ezequiel",
    dinero: 100000,
    numeroCuenta: "3"
}

function esUnaOperacionValida(operacion){
    const operaciones = ["extraccion", "depositar", "transferir"]

    return operaciones.includes(operacion)
} 

function operacionEgreso(miUsuario, monto){
    miUsuario.dinero = miUsuario.dinero - monto
}

function operacionIngreso(miUsuario, monto){
    miUsuario.dinero = miUsuario.dinero + monto
}

function usuarioDestino(entradaUsuarioDestino){
    const usuariosDisponibles =  [
        {
          nombre: "Alberto",
          dinero: 0,
          numeroCuenta: "1",
        },
        {
          nombre: "Cristian",
          dinero: 0,
          numeroCuenta: "2",
        },
        {
          nombre: "Maximiliano",
          dinero: 0,
          numeroCuenta: "4",
        },
        {
          nombre: "Fabian",
          dinero: 0,
          numeroCuenta: "5",
        },
      ];
    
    let usuario = null;

    for(let i = 0; i < usuariosDisponibles.length; i++){
        if (usuariosDisponibles[i].nombre.toLowerCase() === entradaUsuarioDestino || usuariosDisponibles[i].numeroCuenta.toLowerCase() === entradaUsuarioDestino){
            usuario = usuariosDisponibles[i]
        }
    }
    return usuario
}

function cajeroAutomatico(usuarioActual, monto, operacion){
    if(esUnaOperacionValida(operacion)){
        if(operacion === "extraccion"){
            operacionEgreso(usuarioActual, monto)
        } else if (operacion === "depositar"){
            operacionIngreso(usuarioActual, monto)
        } else if (operacion === "transferir"){
            const usuarioDestino = usuarioDestino(entradaUsuarioDisponible)

            if(usuarioDestino){
                operacionEgreso(usuarioActual, monto)
                operacionIngreso(usuarioDestino, monto)
            } else {
                return "El usuario al que intentas transferir no existe"
            }
        }
    } else {
        return "La operación ingresada es invalida."
    }
    return "La operación se realizó con éxito"
}

console.log(cajeroAutomatico(miCuenta, entradaMonto, entradaOperacion))

console.table(miCuenta)
console.table(usuariosDisponibles)