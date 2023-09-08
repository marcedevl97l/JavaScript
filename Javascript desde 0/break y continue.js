// Casos muy especificos - break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for(let i = 0; i<lista.length; i++) {

    if (lista[i] === 3) {
        continue;
    }

    console.log(lista[i]);
    // si lista i es mayor que 3 salte, osea romper el bucle
    if(lista[i] > 4) {
        break;
    }
}
//Esto dificulta la legilibilidad del codigo ¡


//Cual es el amnito de un bucle

