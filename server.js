const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');

const homeRoute = require('./routes/homeRoute');

const app = express();
const path = require('path');

const cors = require('cors');
app.use(cors());  // Permite requisições de qualquer origem

app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // Responde com um status 204 (Sem Conteúdo) para evitar erros
});



app.use(express.json());


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.set("layout", "./layout.ejs");
app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: true }));



app.use("/", homeRoute);

app.post('/cadastro', (req, res) => {
    console.log('Dados recebidos:', req.body); // Verifica se os dados chegam corretamente
    res.json({ ok: true, msg: 'Cadastro realizado com sucesso!' });
});


app.use(express.static(path.join(__dirname, 'public'))); // para o tailwind funcionar
app.use(expressEjsLayouts);




app.listen(5000, function() {
    console.log("servidor iniciado!");
})