const readlineSync = require('readline-sync');
const numeroEntero = readlineSync.questionInt('Ingrese un numero entero:\n');

if (numeroEntero > 0 && numeroEntero % 2 === 0) {
    console.log("El numero es positivo y par");
} else if (numeroEntero > 0 && !numeroEntero % 2 === 0) {
    console.log("El numero es positivo e impar");
} else if (numeroEntero === 0) {
    console.log("El numero es cero");
} else {
    console.log("El numero es negativo");
};