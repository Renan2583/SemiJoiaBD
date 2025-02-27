const express = require('express');

const homeRoute = require('./routes/homeRoute');

const expressEjsLayouts = require('express-ejs-layouts');

const app = express();
const path = require('path');

const cors = require('cors');
app.use(cors());  // Permite requisições de qualquer origem



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // Responde com um status 204 (Sem Conteúdo) para evitar erros
});

app.set('view engine', 'ejs');

app.post('/', (req, res) => {
    console.log('Dados recebidos:', req.body); // Verifica se os dados chegam corretamente
    res.json({ ok: true, msg: 'Cadastro realizado com sucesso!' });
});


app.use(express.static(path.join(__dirname, 'public'))); // para o tailwind funcionar
app.use(expressEjsLayouts);

app.use("/", homeRoute);


app.listen(5000, function() {
    console.log("servidor iniciado!");
})