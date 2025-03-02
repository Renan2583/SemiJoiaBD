document.addEventListener("DOMContentLoaded", function () {
  let btnCadastrar = document.getElementById("btnCadastrar");
  btnCadastrar.addEventListener("click", cadastrar);

  function cadastrar() {
      console.log("Função cadastrar() foi chamada");
      

    const nome = document.getElementById("nome");
    const fornecedor = document.getElementById("fornecedor");
    const precoproduto = document.getElementById("preco1");
    const precovenda = document.getElementById("preco2");
    const quant = document.getElementById("quant");

    let obj = {
      nome: nome.value,
      fornecedor: fornecedor.value,
      precoproduto: precoproduto.value,
      precovenda: precovenda.value,
      quant: quant.value,
      };
      console.log("Dados enviados:", obj);

    let stringObj = JSON.stringify(obj);

    fetch("/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringObj,
    })
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        if (r.ok) {
          alert(r.msg);
          window.location.href = "/";
        } else {
          alert(r.msg);
        }
      })
      .catch(function (e) {
        console.error("erro no fatch" + e);
      });
  }
});
