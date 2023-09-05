//Bucles for y while y ambito de bucle

//Bucles for (mas utilizados dentro de JavaScript)

/*for(inicializacion; condicion; actualizacion) {
}
*/



for (let i = 0; i < 10; i++) {
  // Esto es el bucle
  console.log(i)
}


let lista = [1, 4, 5, 2, 3, 10, 23];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i])
}


//Estructura for of
for (let valor of lista) {
  console.log(valor)
}

//Estructura forEach
lista.forEach(valor => {
  console.log(valor)
}) //funcion flecha 

//for in
let persona = {
  nombre: "reyes",
  apellido: "marcelo",
  edad: 25,
  isjuniordev: true,
}
for(let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad])
}