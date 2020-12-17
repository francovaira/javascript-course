let empleados = [{
    id: 1,
    nombre: 'Franco',
}, {
    id: 2,
    nombre: 'NeneMalo'
}, {
    id: 3,
    nombre: 'ElReja'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    // Es importante asegurarnos que se llama el callback una sola vez dentro de una funcion
    if (!empleadoDB) {
        callback(`No existe el empleado con id ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}

let getEmpleadoByName = (nombre, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.nombre === nombre)

    // Es importante asegurarnos que se llama el callback una sola vez dentro de una funcion
    if (!empleadoDB) {
        callback(`No existe el empleado con nombre ${nombre}`)
    } else {
        callback(null, empleadoDB.id);
    }
}

//##################################
// Solucion tarea get salario

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No se encontro un salario para ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}


// let getSalario = (empleado, callback) => {
//     let empleadoGet = getEmpleadoByName(empleado, (err, id) => {
//         if (err) {
//             callback(console.log(err));
//         } else {
//             let salarioGet = salarios.find(salario => salario.id === id)
//             if (!salarioGet) {
//                 callback('No se pudo encontrar el salario para id ' + id);
//             } else {
//                 callback(null, `Salario para id ${id} es ${salarioGet.salario}`);
//             }
//         }
//     });
// }

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
});