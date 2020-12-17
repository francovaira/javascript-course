let objeto = {
    nombre: 'Steven',
    apellido: 'Wilson',
    habilidad: 'Musician',

    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.habilidad}`
    }
};

//console.log(objeto.getNombre());

let { nombre, apellido: primerApellido, habilidad } = objeto; // Puedo cambiar el nombre de la referencia

console.log(nombre, primerApellido, habilidad);