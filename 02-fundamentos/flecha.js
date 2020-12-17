// function sumar(a, b) {
//     return a + b;
// }

// Las funciones son equivalentes

// let sumar = (a, b) => {
//     return a + b;
// }

//let sumar = (a, b) => a + b;

//console.log(sumar(10, 20));


// ####################################
// TAREA: Traducir la siguiente funcion a una funcion flecha

// function saludar() {
//     return 'Holis worldis';
// }

//let saludar = () => 'Holis worldis'; // Solucion

//console.log(saludar());

// ######################
// Si la funcion flecha solo tiene un argumento puedo hacer sin parentesis
//let saludar = nombre => `Holis a ${nombre}`

// ####################################


let objeto = {
    nombre: 'Steven',
    apellido: 'Wilson',
    habilidad: 'Musician',

    // Para estos casos la funcion flecha pierde la referencia a el this del objeto actual
    getNombre: () => `${this.nombre} ${this.apellido} - poder: ${this.habilidad}`
}

console.log(objeto.getNombre());