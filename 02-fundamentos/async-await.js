// let getNombre = async() => {
//     return 'ElReja';
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('SDFNDFKJADFKN');
        }, 3000);
    })
}

let saludo = async() => {
    let nombre = await getNombre();

    return `hello ${nombre}`;
}

saludo().then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log(e);
    });