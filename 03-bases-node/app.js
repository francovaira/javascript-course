// Puedo traer todo lo que exporta ese archivo
//const mult = require('./multiplicar/multiplicar');

let base = 45;


// Lo de abajo seria si hago el require con todo el archivo
/*mult.crearArchivo(base)
    .then((archivo) => console.log(`Archivo creado: ${archivo}`))
    .catch((err) => {
        console.log(`Archivo NO NO NO creado: ${archivo}`);
    });*/

// Puedo traer solo una funcion
const { crearArchivo } = require('./multiplicar/multiplicar');

crearArchivo(base)
    .then((archivo) => console.log(`Archivo creado: ${archivo}`))
    .catch((err) => console.log(err));


//const fs = require('express'); // Se instalara con el npm install
//const fs = require('./miarchivo');