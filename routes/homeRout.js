const express = require('express');
const InicioController = require('../controllers/InicioController');

class HomeRoute{
    #router
    get router() {
        return this.#router
    }
   set router(router) {
        this.#router = router
    }
    constructor() {
        this.#router = express.Router();

        let ctrl= new InicioController();
        this.#router.get('/',ctrl.inicioView);


    }
}
module.exports=HomeRoute;