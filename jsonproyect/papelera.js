const articulos = ['lapiceras','gomas','plasticola','reglas','escuadras','témperas','pinceles','lápices','colores','cartucheras'];

const papelera = [];

function agregar(array = [],elemento) {

    if(!array.includes(elemento)){
        array.push(elemento);
        return `${elemento} se agregó con éxito.`
    }

    return  `${elemento} ya se encuentra registrado!`

}

console.log(agregar(articulos,'carpetas'));
console.log(agregar(articulos,'carpetas'));