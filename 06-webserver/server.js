const express = require('express');
const app = express();
const port = 3000;

// Puedo hacer que se invoque un HTML externo.
// Trabaja con el GET en la ruta "/"
app.use(express.static(__dirname + '/public'));

// Cuando el path sea "/" se hará un metodo GET
app.get('/', (req, res) => {
    //res.send('Hello Worldis :)');

    let out = {
        name: 'Framkitu',
        age: 25,
        url: req.url
    };

    res.send(out);
})

app.get('/data', (req, res) => {
    res.send('ACCEDIENDO AL DATIN');
})

app.listen(port, () => {
    console.log('listening on ' + port);
});