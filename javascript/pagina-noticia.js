// Referenciando os elementos no documento HTML
const outMaterias = document.getElementById("outMaterias");
const inBuscaAutor = document.getElementById("inBuscaAutor");

// Adicionando o evento de digitar uma tecla no input para acionamento do botão
inBuscaAutor.addEventListener("keyup", buscarAutor);

// Percorrendo o vetor de título inteiro para mostrar todas as notícias
for (var i = 0; i < vetTitulo.length; i++) {

  // Criando os elementos com seus determinados atributos para serem exibidos na página

  // Criando divs para estilização
  var divContainerMateria = document.createElement("div");
  divContainerMateria.className = "materia-container";

  // Criando as imagens das notícias
  var img = document.createElement("img");
  img.src = "../imagens/ImagensNoticias/" + vetImagens[i];
  img.className = "materia-imagem";

  // Criando divs para estilização
  var divConteudoMateria = document.createElement("div");
  divConteudoMateria.className = "materia-conteudo";

  // Criando o título da matéria
  var titulo = document.createElement("h1");
  titulo.className = "materia-titulo";
  titulo.innerHTML = vetTitulo[i];
  // Adicionando um id no título para depois usarmos na função de clique no título
  titulo.id = "noticia" + i;
  titulo.addEventListener("click", cliqueTitulo);

  // Criando nome do autor
  var autor = document.createElement("h3");
  autor.innerHTML = vetAutor[i];
  autor.className = "materia-autor";

  // Colocando img em uma div e o titulo/autor em outra div
  divContainerMateria.appendChild(img);
  divConteudoMateria.appendChild(titulo);
  divConteudoMateria.appendChild(autor);

  // Juntando as duas divs para formatação
  divContainerMateria.appendChild(divConteudoMateria);

  // Exibindo as notícias
  outMaterias.appendChild(divContainerMateria);
}

// Criando a function de pesquisa por autor
function buscarAutor() {
  // Recebendo o texto que o usuário digitou e transformando tudo em maiúsculo
  pesquisaAutor = (inBuscaAutor.value).toUpperCase();
  // Limpando o parágrafo de saída em caso de nova pesquisa
  outMaterias.innerHTML = "";

  // Percorrendo o vetor de autor inteiro
  for (var i = 0; i < vetAutor.length; i++) {

    // Transformando o conteúdo da posição específica do vetor em maiúsculo para se encaixar com a pesquisa
    let autorAux = vetAutor[i].toUpperCase();

    //Verificação de pertencimento das letras preenchidas pelo usuário em algum determinado elemento de um vetor
    if (autorAux.indexOf(pesquisaAutor) >= 0) {

      // Criando os elementos com seus determinados atributos para serem exibidos na página

      // Criando divs para estilização
      var divConteinerMateria = document.createElement("div");
      divConteinerMateria.className = "materia-container";

      // Criando as imagens das notícias
      var img = document.createElement("img");
      img.src = "../imagens/ImagensNoticias/" + vetImagens[i];
      img.className = "materia-imagem";

      // Criando divs para estilização
      var divConteudoMateria = document.createElement("div");
      divConteudoMateria.className = "materia-conteudo";

      // Criando o título da matéria
      var titulo = document.createElement("h1");
      titulo.className = "materia-titulo";
      titulo.innerHTML = vetTitulo[i];
      // Adicionando um id no título para depois usarmos na função de clique no título
      titulo.id = "noticia" + i;
      titulo.addEventListener("click", cliqueTitulo);

      // Criando nome do autor
      var autor = document.createElement("h3");
      autor.innerHTML = vetAutor[i];
      autor.className = "materia-autor";

      // Colocando img em uma div e o titulo/autor em outra div
      divConteinerMateria.appendChild(img);
      divConteudoMateria.appendChild(titulo);
      divConteudoMateria.appendChild(autor);

      // Juntando as duas divs para formatação
      divConteinerMateria.appendChild(divConteudoMateria);

      // Exibindo as notícias
      outMaterias.appendChild(divConteinerMateria);
    }
    // Verificando se nenhuma notícia foi encontrada e exibindo uma mensagem de alerta
    if (outMaterias.innerHTML == "") {
      outMaterias.innerHTML = "Nenhuma matéria encontrada.";
    }
  }
}

// Adicionando uma function de clique no título para mostrar o conteúdo inteiro das matérias
function cliqueTitulo() {
  // Limpando o parágrafo de saída para mostrar apenas o conteúdo da notícia específica
  outMaterias.innerHTML = "";

  // Pegando o elemento inteiro do título que foi clicado e selecionando apenas o id
  var idClicado = this.id;
  // Pegando o sétimo caractere da string do id do título, que será o número
  var idAtual = idClicado.substring(7);

  // Criando os elementos e exibindo a notícia na página usando o id do botão que foi pego acima

  // Criando o article para estilização do texto
  var artMaterias = document.createElement("article");
  artMaterias.className = "noticia-container";

  // Criando o título da matéria
  var titulo = document.createElement("h1");
  titulo.innerHTML = vetTitulo[idAtual];
  titulo.className = "noticia-titulo";

  // Criando a imagem da notícia
  var img = document.createElement("img");
  img.src = "../imagens/ImagensNoticias/" + vetImagens[idAtual];
  img.className = "noticia-imagem";

  // Criando o texto da notícia
  var texto = document.createElement("p");
  texto.innerHTML = vetTexto[idAtual];
  texto.className = "noticia-texto";

  // Criando o nome do autor
  var autor = document.createElement("h3");
  autor.innerHTML = vetAutor[idAtual];
  autor.className = "noticia-autor";

  // Juntando todos os elementos no artigo
  artMaterias.appendChild(titulo);
  artMaterias.appendChild(img);
  artMaterias.appendChild(texto);
  artMaterias.appendChild(autor);

  // Exibindo o artigo na página
  outMaterias.appendChild(artMaterias);
}