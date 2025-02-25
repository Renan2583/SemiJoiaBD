const express = require('express');

const InicioController = require('../controllers/InicioController');

const router = express.Router();

let ctrl = new InicioController();

router.get('/', ctrl.inicioView);
router.post('/', ctrl.inicio);

module.exports = router;