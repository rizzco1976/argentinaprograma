const readlineSync = require('readline-sync');

const mensaje = readlineSync.question('Ingrese un numero entero del 1 al 12:\n');

let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let cantidadDeDias = [28, 30, 31];
if (mensaje == 1 || mensaje == 3 || mensaje == 5 || mensaje == 7 || mensaje == 8 || mensaje == 10 || mensaje == 12) {
    console.log("La cantidad de dias del mes de %s es %i", mes[mensaje -1], cantidadDeDias[2]);
} else if (mensaje == 2) {
    console.log("La cantidad de dias del mes de %s es %i", mes[mensaje -1], cantidadDeDias[0]);
} else if (mensaje == 4 || mensaje == 6 || mensaje == 9 || mensaje == 11) {
    console.log("La cantidad de dias del mes de %s es %i", mes[mensaje -1], cantidadDeDias[1]);
} else {
    console.log("El numero ingresado es incorrecto.");
};