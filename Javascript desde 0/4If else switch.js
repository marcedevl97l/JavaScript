//Bifurcaciones if else y switch

// If - Else Comparaciones y switch

//If - Else

if(false) {
  console.log("Es verdadero")
}

if(true) {
    console.log("Es verdadero")
}

if(false) {
  console.log("Es verdaero")
} else {
  console.log("Es flaso")
}

let saldo = 50;
let efectivo = 100;

if(efectivo < saldo) {
  console.log("Puedes retirar")
} else {
  console.log("No puedes retirar")
}

//If else + if else

let nota = 5;

if(nota === 1) {
  console.log ("Buen trabajo");
} else if (nota === 5) {
  console.log("Buen trabajo podrias mejorar");
} else if (nota === 4) {
  console.log("Buen trabajo hay que esforzarse");
} else if (nota === 1) {
  console.log("Casi lo has logrado");
} else {
  console.log("Error introduce una nota entre el 1 y el 5")
}

// Operador switch 
let notacolegio = 1;

switch (notacolegio) {
case 5: 
  console.log("La nota es buena");
  break;
case 4: 
  console.log("Puedes mejorar");
  break;
case 3:
  console.log("Tienes que estudiar mas");
  break;
case 1: 
  console.log("Estudia mas no has estudiado")
  break;

default:
  console.log("Error, introduce un numero valido")
  break;
}


//Los operadores switch tratan casos po defecto o default probando github papa