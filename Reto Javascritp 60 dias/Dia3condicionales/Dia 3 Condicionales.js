/*Condicionales

//La condicional mas basica if and else :)

/* if (condicion) { 
  codigo a ejectura si la condicion es verdadera
} else {
  ejecuta este otro codigo si la condicion es falsa
}
*/

//Otra forma de escribirlo:

/* if (condicion) {
  ejecuta el codigo al ser verdadera la condicion
}

ejecuta otro codigo

*/

/* Como punto final, habran ocasiones donde veas declaraciones if..else escritas sin un conjunto de llaves, de esta manera:

if (condicion) ejecuta codigo de ser verdadero (true)
else ejecuta este otro codigo
no es recomendable utilizar este tipo de codigo
*/

// Ahora practiquemos con ejemplos reales
let seleccionar = document.querySelector("select");
let parrafo = document.querySelector("p");

seleccionar.addEventListener("change", establecerClima);

function establecerClima() {
  let eleccion = seleccionar.value;

  if (eleccion === "soleado") {
    parrafo.textContent =
      "El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.";
  } else if (eleccion === "lluvioso") {
    parrafo.textContent =
      "Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.";
  } else if (eleccion === "nevando") {
    parrafo.textContent =
      "Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.";
  } else if (eleccion === "nublado") {
    parrafo.textContent =
      "No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.";
  } else {
    parrafo.textContent = "";
  }
}

