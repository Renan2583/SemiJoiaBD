const express = require('express');
const inicioRouter = require('./routes/homeRout');

const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

let inicioRota=new inicioRouter();
app.use("/",inicioRota.router());

const server = app.listen('5000', function() {
    console.log('Servidor rodando na porta: ' + server.address().port);
});