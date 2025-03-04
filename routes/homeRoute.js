const express = require('express');



const InicioController = require('../controllers/InicioController');

const homeRouter = express.Router();

let ctrl = new InicioController();

homeRouter.get('/', ctrl.inicioView); //inicio da pagina
homeRouter.post('/cadastro', ctrl.inicio); //rota para o cadastro
homeRouter.get('/exibir', ctrl.exibeView);





module.exports = homeRouter;