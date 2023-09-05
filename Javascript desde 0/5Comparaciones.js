// Comparaciones en js

// Igualdad 
if(5 == 5) {
    console.log("5 es igual a 5")
}

// == igualdad debil === igualdad fuerte
// == solo compara el valor 
/// === compara el valor y el tipo

if (6 === 6) {
    console.log("6 es muy igual a 6")
}

//Ejemplo donde se comprueba el valor y el tipo
let a = 5;
console.log(typeof a)

let b = "5";
console.log(typeof b)

if (a == b) {
    console.log("a es igual a b - Debil")
}

if (a === b) {
    console.log("a es igual a b - Fuerte")
}

//Comparacion de desigualdad

let c = 4;
let d = "4";

if(c != d) {
    console.log("c y d no son iguales")
}

if(c !== d) {
    console.log("c y d no son iguales")
}

//comparaciones mayor que y menor que

let max = 12;
let min = 10;

if(max > min) {
    console.log("max es mayor que min")
}
if(max >= min) {
    console.log("max es mayor que min")
}

if(min < max) {
    console.log("min es menor que max")
}
if(max <= min) {
    console.log("max es mayor que min")
}

