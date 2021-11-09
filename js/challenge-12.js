// let base = Number(prompt('Ingrese la base del triangulo'));
// let altura = Number(prompt('Ingrese la altura del triangulo'));
// let radio = Number(prompt('Ingrese el radio del Circulo'));

// if (!isNaN(base)&&!isNaN(altura)) {
//     console.log('El area del tringulo es:', (base*altura)/2);
// } else {
//     console.log('Ingrese bien los valores para el Triangulo !!!');
// }
// if (!isNaN(radio)) {
//     console.log('El area del circulo es:', (Math.PI*radio*radio).toFixed(2));
// } else {
//     console.log('Ingrese bien los valores para el Circulo !!!');
// }

let base = prompt("Ingrese la base del triangulo");
let altura = prompt("Ingrese la altura del trangulo");
let radio = prompt("Ingrese el radio del circulo");

console.log("el area del triangulo es: " + (base*altura)/2);

console.log("el area del circulo es: " + (3.14*radio^2));
