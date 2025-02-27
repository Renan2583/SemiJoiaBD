const Database = require("../utils/database");
const db = new Database();

db.ExecutaComando('SELECT 1', [])
    .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

class inicioModel {
  #id;
  #nome;
  #fornecedor;
  #precopago;
  #precovenda;
  #quant;

  constructor(id, nome, fornecedor, precopago, precovenda, quant) {
    this.#id = id;
    this.#nome = nome;
    this.#fornecedor = fornecedor;
    this.#precopago = precopago;
    this.#precovenda = precovenda;
    this.#quant = quant;
  }

  get id() {
    return this.#id;
  }
  get nome() {
    return this.#nome;
  }
  get fornecedor() {
    return this.#fornecedor;
  }
  get precopago() {
    return this.#precopago;
  }
  get precovenda() {
    return this.#precovenda;
  }
  get quant() {
    return this.#quant;
  }

  set id(value) {
    this.#id = value;
  }

  set nome(value) {
    this.#nome = value;
  }

  set fornecedor(value) {
    this.#fornecedor = value;
  }

  set precopago(value) {
    this.#precopago = value;
  }

  set precovenda(value) {
    this.#precovenda = value;
  }

  set quant(value) {
    this.#quant = value;
  }


  async cadastrar() {
    let sql = 'INSERT INTO tb_pecas (peca_nome, peca_forn, peca_prpg, peca_prvd, peca_qnt) VALUES (?, ?, ?, ?, ?)';
    let valores = [this.#nome, this.#fornecedor, this.#precopago, this.#precovenda, this.#quant];

    console.log("Tentando inserir:", valores); // Verifica os valores antes de salvar

    try {
        let resultado = await db.ExecutaComandoNonQuery(sql, valores);
        console.log("Resultado do banco:", resultado);
        return resultado;
    } catch (error) {
        console.error("Erro ao inserir no banco:", error);
        return { ok: false, msg: "Erro ao cadastrar no banco." };
    }
}

}
  

module.exports = inicioModel;
