const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor ingresado no es un numero'); // El reject y el resolve no terminan la ejecucion
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += base * i + `\r\n`;
        }

        // Para crear archivos en otro directorio es necesario que
        // el directorio ya exista
        fs.writeFile(`tabla-del-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-del-${base}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo: crearArchivo
}