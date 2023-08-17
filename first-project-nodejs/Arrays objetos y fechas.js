
//Listas, arrays o arreglo
const lista = [1, "hola", false, undefined, null];
const lista2 = new Array(1, "hola", false, undefined, null);
const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento"
const lista4 = [lista, lista1, lista2, lista3];


console.log(lista); 
console.log(lista2);
console.log(lista3);


//Objetos
const movil = {
  altura: 10,
  anchura: 5,
  marca: "xiaomi",
  isWhite: false,
  contactos: ["gorka", "marcelo", "raul"],
  tarjeta: {
    marca: "Santander",
    almacenamiento: 32
  },
}

movil.anyo = 2019;

console.log(movil.tarjeta)

//Fechas
// Librerias para trabajar fechas con javascript Moment.js
const ahora = new Date();
console.log(ahora);
const fecha_milis = new Date(10) // Utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()

console.log(dia, mes, anyo)