const express = require('express');
const homeRoute = require('./routes/homeRoute');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();
const path = require('path');
const HomeRoute = require('./routes/homeRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views','/views');

let homeRota=new homeRoute();
app.use("/",HomeRoute);

const server = app.listen('5000', function() {
    console.log('Servidor iniciando..');
});