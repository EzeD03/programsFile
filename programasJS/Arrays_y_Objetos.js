let usuarios = ['Facundo', 'Juana', 'Daniela', 'Jon'];
let nuevoUsuaria = usuarios[1];
//console.log(nuevoUsuaria);
let numerosPares = [2, 4, 6, 8];

let alumno = ['Uriel', 18, 'Lanus', 1.8, false, "Clara"];

let alumno2 = {
    nombre: "Uriel",
    apellido: 'Aguirre',
    edad: 18,
    ciudad: 'Lanus',
    altura: 1.8,
    casado: false,
    nombreDeLaMascota: "Clara",
}

console.log(alumno2.edad);

/* ------------------------------------------ */
/* ------------------------------------------ */
/* ------------------------------------------ */

function book(name, year, author){
    this.name = name;
    this.year = year;
    this.author = author;

}
let book1 = new book ("El Principito","6 de abril 1943","Antoine de Saint-Exupéry")

let book2 = new book ("El arte de hacer dinero","2006","Mario Borghino")

let book3 = new book ("Los secretos de la mente millonaria", "15 de febrero de 2005","T. Harv Eker")

let book4 = new book ( "Padre rico padre pobre", "1997", " Robert Kiyosaki")

let bookStore1 = [book1,book2,book3,book4]

console.log(bookStore1[3]);