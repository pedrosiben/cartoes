function criaCartao(categoria, pergunta, resposta) {
  const container = document.getElementById("container");

  const cartao = document.createElement("article");
  cartao.classList.add("cartao");

  const elCategoria = document.createElement("div");
  elCategoria.classList.add("categoria");
  elCategoria.textContent = categoria;

  const elPergunta = document.createElement("div");
  elPergunta.classList.add("pergunta");
  elPergunta.textContent = pergunta;

  const elResposta = document.createElement("div");
  elResposta.classList.add("resposta");
  elResposta.textContent = resposta;

  cartao.appendChild(elCategoria);
  cartao.appendChild(elPergunta);
  cartao.appendChild(elResposta);

  container.appendChild(cartao);
}

criaCartao("Português", "Qual é o sinônimo da palavra feliz?", "Alegre.");
criaCartao("Matemática", "valor de x na equação x + 3 = 7?", "x = 4.");
criaCartao("Geografia", "Qual é o maior oceano do mundo?", "Oceano Pacífico.");
