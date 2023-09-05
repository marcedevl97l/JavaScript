//Bucles while

/**while (condicion) {

} cuidado con los bucles infinitos**/

let i = 0;
let max = 13;
while (i < max) {
    console.log(i);
    i+= 2;
}

i= 15;
//Do..while
do {
    i++;
    console.log("Estoy en el while")
} while (i < max)
