//Video 23 Arrow functions

// var miFuncion = function(valor) {
//     return valor;
// }

// let miFuncio2 = valor => valor;

// console.log(miFuncio2('Uzi')); //Funciones de flecha primer ejemplo

// let sumar = (num1, num2) => num1 + num2;

// console.log(sumar(1,2));

// let sumar2 = () => 'Hola mundo';

// var saludarPersona = function(nombre) {
//     var saludo = 'Hola, ' + nombre;
//     return saludo;
// }

// console.log(saludarPersona('Kiriath'));

// let saludarPersona2 = (nombre) => {
//     let salida = `Hola, ${nombre}`; // Arrow function translate
//     return salida;
// }

// console.log(saludarPersona2('Jearim'));

// var getLibro = function(id) {
//     return {
//         id: id,
//         name: 'Harry Potter'
//     } // Es un probglema generar esto con un arro function
// }

// console.log(getLibro('12345')); 

// var getBook = id => ({
//     id: id,
//     name: 'Dragones del Edén'
// });

// console.log(getBook('56789'));

//Video 24  Funciones anonimas

// let saludo = (nombre => `Hola, ${nombre}`)('Kiriath');
// console.log(saludo);

//Video 25 objeto this
// var manejador = {
//     id: '123',
//     init: function() {
//         document.addEventListener('click', (function(event) {
//             console.log(this);
//             this.clickEnPagina(event.type);
//         }).bind(this), false); //ES5 cambio de contexto, deja de tomar el window y toma el contexto local
//     },

//     clickEnPagina: function(type) {
//         console.log('Manejando ' + type + 'para id: ' + this.id);
//     } 
// };

// manejador.init();

// var manejadores6 = {
//     id: '123',
//     init: function() {
//         document.addEventListener('click', event => this.clickEnPagina(event.type)); //ES5 cambio de contexto, deja de tomar el window y toma el contexto local
//     },

//     clickEnPagina: function(type) {
//         console.log('Manejando ' + type + 'para id: ' + this.id);
//     } 
// };

// manejadores6.init();

//Video 26

// var arreglo = [5,9,12,1,4,98];
// var ordenado = arreglo.sort(function(a,b) {
//     return a - b;
// });
// let ordenadoes6 = arreglo.sort((a,b) => a - b); //Ordenamiento en es6 con arrow function
// console.log(ordenadoes6);

//Video 27
// var restar  = (a, b) => a - b;
// console.log(typeof restar);
// console.log(restar instanceof Function); //Las arrow functions son de tipo function :)

// // var restar2 = new restar(1,2); //No es posible hacer un new on aun AF

// function ejemplo(x,y) {
//     ((a, b) => {
//         console.log(arguments[0]); // Las AR no tienen el objeto arguments, toman el de su padre :o
//     })();
// }

// ejemplo(10, 20);

function parametros() {

    let nombres = ((arguments) => {
        return `${arguments[0]} - ${arguments[1]}`;
    })(arguments)
    console.log(nombres);

}
parametros("Fernando", 31);


