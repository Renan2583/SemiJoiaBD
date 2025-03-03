const inicioModel = require('../models/InicioModel');

class InicioController {
    async inicioView(req, res) {
        let listarTudo = new inicioModel();
        listarTudo = await listarTudo.listar();

        res.render('inicio', {lista: listarTudo})
    }
    
    async inicio(req, res) {
        let ok;
        
        if (req.body.nome  && req.body.precocompra && req.body.precovenda && req.body.quant) {
            let cadastrarPeca = new inicioModel();
            cadastrarPeca.nome = req.body.nome;
            cadastrarPeca.fornecedor = req.body.fornecedor;
            cadastrarPeca.precocompra = req.body.precocompra;
            cadastrarPeca.precovenda = req.body.precovenda;
            cadastrarPeca.quant = req.body.quant;

            let resultado = await cadastrarPeca.cadastrar();

            if (resultado) {
                res.send({ ok: true, msg: 'Cadastrado com sucesso!' });
            } else {
                res.send({ ok: false, msg: 'Erro ao cadastrar!' });
            }
    
        }

        

    }

    async listar () {
        let sql = `select * from tb_pecas`;	

        let resultado = await db.ExecutaComando(sql);
        let listaCadastro = [];
        for(let registro of resultado) {
            listaCadastro.push(new inicioModel(
                registro['peca_id'],
                registro['peca_nome'],
                registro['peca_forn'],
                registro['peca_prpg'],
                registro['peca_prvd'],
                registro['peca_qnt']
                
            ));
        }
        return listaCadastro;
    }
}

module.exports = InicioController;