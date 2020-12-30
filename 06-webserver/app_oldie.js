const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let out = {
            name: 'Framkitu',
            age: 25,
            url: req.url
        }

        //res.write('Holas tarolas! :)');
        res.write(JSON.stringify(out));
        res.end(); // Es necesario para decir que termino la respuesta
    })
    .listen(8080);