//Definiendo variables
var variable;
let variableLet;

// const constante;
const constante = "Hola soy una constante";

// ctrl + cierre de llave comentar codigo

var a = 10;

let b = 3;

console.log(b); 
console.log(a); 
console.log(constante);

// var afecta a todo el codigo mientras que let solo afecta al bloque donde se esta escribiendo

var variable = "Hola soy una variable bar"
for (var i = 0; i< 3; i++) {
  var variable = "Soy la segunda variable"
}

console.log (variable);

//muestra el tipo de la variable que le estemos pasando
console.log(typeof 1)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof false)
console.log(typeof variable)