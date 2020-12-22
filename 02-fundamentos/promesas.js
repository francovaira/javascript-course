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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

        // Es importante asegurarnos que se llama el callback una sola vez 
        // dentro de una funcion
        if (!empleadoDB) {
            reject(`No existe el empleado con id ${id}`)
        } else {
            resolve(empleadoDB);
        }

    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontro un SALARIO para ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                id: empleado.id,
                salario: salarioDB.salario
            });
        }
    });
}

// Promesas encadenadas
getEmpleado(3).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`Salario de ${resp.nombre} es ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    });

/*getEmpleado(3).then(empleado => {
    console.log(`Empleado de DB`, empleado);

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${empleado.nombre} es de ${resp.salario}`);
    }, err => console.log(err));
}, err => console.log(err));*/