// Video 1:
// var saludo = 'Hola mundo';
// console.log(saludo.substr(0,1) === "H"); // Validación < ES6
// console.log(saludo.startsWith('Hola')); // Validación en ES6
// console.log(saludo.endsWith('mundo')); // Termina con en ES6
// console.log(saludo.indexOf('x')); // Verifica si está en el string, si está devuelve la posición, si no un -1
// console.log(saludo.includes('H')); // Devuelve un booleano si el string contiene ese valor
// console.log(saludo.startsWith('mu', 5)); // verifica si en esa posición está ese caracter
// console.log(saludo.includes('a', 5)); //Verifica si el elemento se encuentra después de x posición

// //Video 2
// let texto = 'Hola';
// console.log(texto.repeat(5)); //Sirve para repetir una variable

// const ESPACIOS = 12;
// let nombres = ['Kiriath', 'Jearim', 'Adame', 'Mendez'];
// let telefonos = ['11223344', '22334455', '33445566', '44556677'];
// for(i in nombres) {
//     let diff = ESPACIOS - nombres[i].length;
//     console.log(nombres[i] + ' '.repeat(diff) + '|' + telefonos[i]);  //Muy usual para agregar cierto número de espacios!
// }

//Video 3
// let nombre = 'Uzi';
// console.log(`Hola, soy ${nombre}`);

// function getName() {
//     return 'Uzi Rodriguez';
// }
// console.log(`Nombre generado por una función: ${getName()}`);

// let multilinea = `hola mundo
// xdxd lmao'
// salto de "linea"`;

// console.log(multilinea);

//Video 4

// function etiqueta(literales, ...sustitciones) {
//     console.log(arguments); //Siempre recibe argumentos :o

//     let resultado = ''

//     console.log(literales); //Es el primer elemento de arguments, que son los textos
//     console.log(sustitciones); //Son las variables en la expresión formada por backtips

//     for(let i = 0; i < sustitciones.length; i++) {
//         resultado += literales[i];
//         resultado += sustitciones[i];
//     }
//     return resultado;
// }

// let unidades = 5;
//     costo_unitario = 10;

// let mensaje = etiqueta`${unidades} lapices cuestan ${unidades * costo_unitario} pesos`; //Ejecutar un métoto al formarse un string con backtips

// console.log(mensaje);

// let mensaje2 = String.raw`Hola mundo \nMundo\\`; // PAra imprimir el BS con sentencias de escape
// console.log(mensaje2);

let numero = 10;
console.log(numero.startsWith(1));

