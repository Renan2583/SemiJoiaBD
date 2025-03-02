const inicioModel = require('../models/InicioModel');

class InicioController {
    async inicioView(req, res) {
        res.render('inicio');
    }
    
    async inicio(req, res) {
        let ok;
        
        if (req.body.nome && req.body.fornecedor && req.body.precoproduto && req.body.precovenda && req.body.quant) {
            let cadastrarPeca = new inicioModel();
            cadastrarPeca.nome = req.body.nome;
            cadastrarPeca.fornecedor = req.body.fornecedor;
            cadastrarPeca.precopago = req.body.preco1;
            cadastrarPeca.precovenda = req.body.preco2;
            cadastrarPeca.quant = req.body.quant;

            let resultado = await cadastrarPeca.cadastrar();

            if (resultado) {
                res.send({ ok: true, msg: 'Cadastrado com sucesso!' });
            } else {
                res.send({ ok: false, msg: 'Erro ao cadastrar!' });
            }
    
        }

    }
}

module.exports = InicioController;