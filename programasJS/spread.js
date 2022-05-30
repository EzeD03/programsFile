const frutosRojos = ["frutilla","cereza","frambuesa"]
const frutosTropicales = ["papaya","mango","piña"]

let ensaladaDeFrutas = []

//ensaladaDeFrutas.push(frutosRojos, frutosTropicales)
//console.log(ensaladaDeFrutas);

const agregarFrutas = (frutas = []) => {
    frutas.forEach(fruta => ensaladaDeFrutas.push(fruta))
}
/* 
agregarFrutas(frutosRojos)
agregarFrutas(frutosTropicales) */

ensaladaDeFrutas = [...frutosRojos, ...frutosTropicales]


console.log(ensaladaDeFrutas);