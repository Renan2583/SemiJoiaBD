const express = require('express');

const InicioController = require('../controllers/InicioController');

const exiberouter = express.Router();

let ctrl = new InicioController();

exiberouter.get('/', ctrl.inicioView); //inicio da pagina
exiberouter.post('/cadastro', ctrl.inicio); //rota para o cadastro



module.exports = exiberouter;