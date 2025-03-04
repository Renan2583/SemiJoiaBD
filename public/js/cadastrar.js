document.addEventListener("DOMContentLoaded", function () {
  let btnCadastrar = document.getElementById("btnCadastrar");
  btnCadastrar.addEventListener("click", cadastrar);

  function cadastrar() {
      console.log("Função cadastrar() foi chamada");
      

    const nome = document.getElementById("nome");
    const fornecedor = document.getElementById("fornecedor");
    const precocompra = document.getElementById("precocompra");
    const precovenda = document.getElementById("precovenda");
    const quant = document.getElementById("quant");
    const imagem = document.getElementById("imagem").files[0];

    let obj = {
      nome: nome.value,
      fornecedor: fornecedor.value,
      precocompra: precocompra.value,
      precovenda: precovenda.value,
      quant: quant.value,
    };
      console.log("Dados enviados:", obj);

      let formData = new FormData();
      formData.append("dados", JSON.stringify(obj)); // Adiciona os dados como JSON
      formData.append("imagem", imagem); // Adiciona a imagem separadamente
  
      console.log("Enviando:", formData);

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
