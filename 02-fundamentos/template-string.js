let nombre = 'pepe';
let real = 'kiki lope';

//console.log(`${nombre} ${real}`);

//let nombreCompleto = nombre + ' ' + real;
//let nombreTemplate = `${nombre} ${real}`;

//console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre es: ${getNombre()}`);