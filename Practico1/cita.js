let cita = "Tres tristes tigres comen trigo en un trigal";

let substring = "tigres comen trigo";


//a.
let tamañoDeCita = cita.length;

console.log("El tamaño de la cita es "+tamañoDeCita);

//b.
let indice = cita.indexOf(substring);
console.log("El indice del substring es: "+indice);

//c. 
let citaRevisada = cita.slice(0, indice - 1) + "" + substring;
console.log(citaRevisada);