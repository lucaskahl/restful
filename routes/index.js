module.exports = (app) => {

    app.get('', (req, res) => { // URL com express
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Olá</h1>');
    
    });

}