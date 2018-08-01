//Video 13 Parámetros opcionales

// function saludo(mensaje = 'Hola mundo', tiempo = 1500) {
//     //mensaje = mensaje || 'Hola mundo'; // ES5 expression, parámetro si no venía
//     mensaje = (typeof mensaje !== 'undefined')? mensaje : 'Hola mundo 2'; // Si es diferente de undefined, meustra mensaje, si no muestra 'hola mundo'


//     setTimeout(function() {
//         console.log(mensaje);
//     }, tiempo);
// }

// saludo();

// // Recibe una funcion como parámetro opcional, tambien pueden ser objetos o arreglos
// function saludar(fn = fnTemporal) {
//     console.log(typeof fn);
//     fn();
// }

// function fnTemporal() {
//     console.log('Saludo desde FN temporal');
// }

// saludar();

//Video 14 arguments

// function sumar(a,b) {
//     console.log(arguments); //Arguments recibe todos los argumentos así no vengan declarados en la lista de argumentos de la funcion en  el código
// }
// sumar(1,2, 'Uzi', {a:1, b:2});

// function sumar(a = 1, b = 2) {
//     console.log(arguments); // los argumentos opcionales no aparecen en el objeto arguments
// }
// sumar();

//Video 15 parametros rest

// function addStudents() {
//     console.log(arguments);
//     for(var i = 1; i < arguments.length; i++) {
//         arguments[0].push(arguments[i]);
//     }

//     return arguments[0];
// }

// var studentsArr = ['Fernando'];
// var studentsArr2 = addStudents(studentsArr, 'Maria', 'Pedro', 'Susana', 'Juan');
// console.log(studentsArr2); //En es5 tenemos que hacer uso de arguments para poder aseguerar que tenemos todos los parámaetros 

// function addStudents(arrStudents, ...students) {
//     for(let i = 1; i < students.length; i++) { 
//         arrStudents.push(students[i]); //en es6 obtenemos justamente los parámetros que estén de más para jugar con ellos dentro de la función
//     }
//     return arrStudents;
// }

// let studentsArr = ['Fernando'];
// let studentsArr2 = addStudents(studentsArr, 'Maria', 'Pedro', 'Susana', 'Juan');
// console.log(studentsArr2);

// //Video 17 restricciones en  los p rest
// function splitNames(..nombres, apellidos) {
//     //anything - No permite agregar como primer parámetro un rest
// }


//Video 18 operador spread
// var num1 = 10;
//     num2 = 30;
// var max = Math.max(num1, num2);
// console.log(max); // Pero... cómo mandarle un arreglo?

// var numeros = [1,4,6,7,19,40];
// var maxim = Math.max.apply(Math, numeros);
// console.log(maxim); //En es5 tenemos esto para mandar el arrelgo pero es medio confuso XD

// var maximoes6 = Math.max(...numeros);
// console.log(maximoes6); // En es6 pasamos cada valor como parámetro rápidamente y sin sintaxis raras

// //Video 19
// let persona = {
//     nombre: 'Uzi',
//     edad: 21
// }
// let persona2 = {...persona}; //No está referenciado, sino que se tocan independientemente todas las propiedades, som nuevos entes
// persona2.nombre = 'Jonadab';
// console.log(persona, persona2);

//Video 20

// let person1 = {
//     nombre: 'Kiriath',
//     edad: 21
// }

// let person2 = {
//     nombre: 'Uzi',
//     edad: 21,
//     address: 'Av las Torres',
//     developer: true
// }

// person1 = {
//     ...person2,
//     ...person1
// } //Copia de un objeto sin modificar las propiedades que tenía inicialmente

// console.log(person1, person2);

//Video 21 Spread vs Rest
function saludoRest(saludo, ...nombres) {
    for(i in nombres) {
        console.log(`${saludo} ${nombres[i]}`);
    }
}

function saludoSpread(saludo, ...nombres) {
    console.log(`Qué hay, ${saludo} ${nombres}`);
}

saludoRest('Hola', 'Uzi', 'Jonadab', 'Kiriath', 'Jearim');
let personas = ['Kiriath', 'Jearim', 'Adame', 'Mendez'];
saludoSpread(personas);

let partes = ['Brazos', 'Piernas'];
let cuerpo = ['Cabeza', 'cuello', ...partes, 'pies', 'dedos'];
 console.log(cuerpo);
