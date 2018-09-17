const express = require('express');

let app = express();

app.get('', (req, res) => { // URL com express

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá</h1>');

});

app.get('/users', (req,res) => {

    res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users:[{
                id: 1,
                name: 'Lucas',
                email: 'lucaschangkahl@gmail.com'
            }]
        });
});

app.listen(3000, '127.0.0.1', () =>{

    console.log('Servidor Rodando');

});

