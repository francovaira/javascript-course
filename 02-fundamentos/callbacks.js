// setTimeout(() => {
//     console.log('aca dentro');
// }, 3000);


let getUsuarioByID = (id, callback) => {
    let usuario = {
        nombre: 'Franco',
        id: id
    }

    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la DB`) // No ponemos null al principio porque quiero arrojar el error
    } else {
        callback(null, usuario);
    }
}

getUsuarioByID(20, (err, usuario) => { // Lo que hace es llamar a la funcion definida y 

    if (err) {
        return console.log(err);
    }

    console.log('User DB', usuario); // cuando esté el resultado listo, ejecuta esto.
})