//Hoja de ruta
// Crear un programa que determine si un numero es par o impar

//Algunos ejemplos basicos de condicionales y operadores logicos

let edad = 19;
if (edad >= 18) {
    console.log("Usted es mayor de edad")
} else {
    console.log("Usted es menor de edad")
}

//if else if
let hora = 18;

if (hora < 12) {
    console.log("Buenos dias");
} else if (hora <= 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

//Operadores logicos
let esAdulto = true;
let tieneLicencia = false;

if (esAdulto && tieneLicencia) {
    console.log("Puede conducir")
} else {
    console.log("No puede conducir")
}

// ||
let esVacaciones = false;
let esFinDeSemana = false;

if (esVacaciones || esFinDeSemana) {
    console.log("Es momento de descansar")
} else {
    console.log("Deberias trabajar")
}

//Ejemplo de '!' (no) aqui se invierte el valor de la condicion
let llueve = true;

if (!llueve) {
    console.log("Puede salir")
} else {
    console.log("no puede salir")
}

//Ejercicio (crear un programa que determine si un numero es impar o par)

let numeroS

function esParoImpar(numero) {
    if (numero % 2 === 0) {
        return "Es un numero par";
    } else {
        return "Es un numero impar"
    }
}
let numero = 2;
let resultado = esParoImpar(numero);
console.log(resultado);