const Database = require("../utils/database");
const db = new Database();

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
    let sql = 'inser into pecas (peca_nome, peca_forn, peca_prpg, peca_prvd, peca_qnt)values (?, ?, ?, ?, ?)';
    let valores = [this.#nome, this.#fornecedor, this.#precopago, this.#precovenda, this.#quant];
    let resultado = await db
    .ExecutaComandoNonQuery(sql, valores);
    return resultado;
  }
}

module.exports = inicioModel;
