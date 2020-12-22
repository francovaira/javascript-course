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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    // Es importante asegurarnos que se llama el callback una sola vez 
    // dentro de una funcion
    if (!empleadoDB) {
        throw new Error(`No existe el empleado con id ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontro un SALARIO para ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            id: empleado.id,
            salario: salarioDB.salario
        };
    }
}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado)

    return `${resp.nombre} cobra ${resp.salario}`;
}

getInformacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));