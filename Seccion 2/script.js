// let mensaje = "123";
// var mensaje = "hi"; //let no permite que se re defina una variable

// if (1 === 1) {
//     mensaje = "Hola mundo";
// }

// console.log(mensaje);

// let mensaje = "hola";

// if ( true ) {
//     let mensaje = "Que tal"; // Let delimita una variable a un scope
//     console.log(mensaje);
// }

// console.log(mensaje);

// const IMPUESTO_SV = 15.25; //Constantes siempre deben tener valor inicial
// IMPUESTO_SV = 33; // Las constantes no pueden modificarse

// console.log(IMPUESTO_SV);

// const IMPUESTO_SV = 15.25;

// if (true) {
//     const IMPUESTO_SV = 19.75; //Las constantes también viven solo en su contexto
//     console.log(IMPUESTO_SV);
// }

// console.log(IMPUESTO_SV);

// const PERSONA = {
//     nombre: 'Uzi',
//     apellido: 'Rodriguez'
// };

// PERSONA.nombre = 'Jonadab'; // Permite cambiar una propiedad

// console.log(PERSONA);

// const PERSONA = {
//     nombre: 'Uzi',
//     apellido: 'Rodriguez'
// };

// PERSONA = {
//     nombre: 'Jonadab' // No permite modificar el objeto como tal
// }

// console.log(PERSONA);


// for(var i = 0; i <= 10; i++) {

// }

// console.log(i); // Imprime 11 porque el 11 saca del ciclo

// for(let i = 0; i <= 10; i++) {

// }

// console.log(i); // No imprime nada porque la variable no existe en el contexto global

// var funciones = [];

// for (let i = 0; i < 10; i++) {
//     funciones.push(
//         function() {
//             console.log(i); // Usando let dentro de un FOR, se crea siempre una nueva variable
//         }
//     );
// }

// funciones.forEach(
//     function(func) {
//         func();
//     }
// );

let numero = 10;

if(true) {
    let numero = 20;

    while(true) {
        let numero = 20;

        for(let numero = 1; numero < 10; numero++) {
            numero = numero;
        } break;
    }
}

console.log(numero);