document.addEventListener('DOMContentLoaded', function () {
  const botoesEditar = document.querySelectorAll('.EditProdbutton');
  const formEditar = document.getElementById('EditFormProd');

  const inputId = document.getElementById('id');
  const inputNome = document.getElementById('nomeeditproduto');
  const inputCategoria = document.getElementById('categoriaEditProduto');
  const inputImagem = document.getElementById('imagemeditproduto');
  const inputDescricao = document.getElementById('descriçãoeditproduto');
  const inputPreco = document.getElementById('precoeditproduto');
  const inputQuantidade = document.getElementById('quantidadeeditproduto');

  let linhaAtual = null;

  botoesEditar.forEach(botao => {
    botao.addEventListener('click', function () {
      const linha = this.closest('tr');

      const id = linha.children[0].textContent;
      const nome = linha.children[1].textContent;
      const categoria = linha.children[2].textContent;
      const imagem = linha.children[3].querySelector('img').getAttribute('src');
      const descricao = linha.children[4].textContent;
      const preco = linha.children[5].textContent;
      const quantidade = linha.children[6].textContent;

      inputId.value = id;
      inputNome.value = nome;
      inputCategoria.value = categoria;
      inputImagem.value = imagem;
      inputDescricao.value = descricao;
      inputPreco.value = preco;
      inputQuantidade.value = quantidade;

      linhaAtual = linha;
    });
  });

  formEditar.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!linhaAtual) return;

    const nome = inputNome.value;
    const categoria = inputCategoria.value;
    const imagem = inputImagem.value;
    const descricao = inputDescricao.value;
    const preco = inputPreco.value;
    const quantidade = inputQuantidade.value;

    linhaAtual.children[1].textContent = nome;
    linhaAtual.children[2].textContent = categoria;
    linhaAtual.children[3].querySelector('img').setAttribute('src', imagem);
    linhaAtual.children[4].textContent = descricao;
    linhaAtual.children[5].textContent = preco;
    linhaAtual.children[6].textContent = quantidade;

    const offcanvasEl = document.getElementById('OffCanvasEdit');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    offcanvas.hide();

    linhaAtual = null;
  });
});
