/* modulos */
const process = require('process');
const articulos = require('./data.json'); //json parseado
const papelera = require('./papelera.json'); //json parseado
const acciones = require('./acciones');

/* datos ingresados */
const accion = process.argv[2];
const articulo = process.argv[3];

/* proceso */

switch (accion) {
    case "listar":

        acciones.listar();
        break;

    case "agregar":
        /* validación */
        if(articulos.includes(articulo.toLowerCase())){
            console.log('+++++++++++++++++++++++++++++++++++++++++++++');
            console.log(`El artículo "${articulo}" se encuentra registrado.`);
            console.log('+++++++++++++++++++++++++++++++++++++++++++++');
            break
        }
        acciones.agregar(articulo);
        break;

    case "eliminar":

        acciones.eliminar();
        break;

    case "papelera":

        acciones.papelera()
        break

    case "recuperar":

        let posicion = papelera.indexOf(articulo);

        if(posicion === -1){
            console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
            console.log(`El artículo ${articulo} no se encuentra en la papelera`);
            console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
            break
        }else{
            acciones.recuperar(posicion);
        }
        break;

    case undefined:

        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log('Debe escribir una acción: [listar, agregar, eliminar, recuperar]');
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        break;

    default:

        console.log('+++++++++++++++++++++++++++++++++++++++++++');
        console.log('La acción no está contemplada en el sistema');
        console.log('+++++++++++++++++++++++++++++++++++++++++++');
        break;
}