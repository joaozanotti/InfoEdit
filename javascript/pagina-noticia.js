const outMaterias = document.getElementById("outMaterias"); //Armazena as matérias já percorridas;

for (var i = 0; i < vetTitulo.length; i++) {

  var divContainerMateria = document.createElement("div");
  divContainerMateria.className = "materia-container";

  var img = document.createElement("img");
  img.src = "../imagens/ImagensNoticias/" + vetImagens[i];
  img.className = "materia-imagem";

  var divConteudoMateria = document.createElement("div");
  divConteudoMateria.className = "materia-conteudo";

  var titulo = document.createElement("h1");
  titulo.className = "materia-titulo";
  titulo.innerHTML = vetTitulo[i];
  titulo.id = "noticia" + i;
  titulo.addEventListener("click", cliqueTitulo);

  var autor = document.createElement("h3");
  autor.innerHTML = vetAutor[i];
  autor.className = "materia-autor";

  divContainerMateria.appendChild(img);
  divConteudoMateria.appendChild(titulo);
  divConteudoMateria.appendChild(autor);

  divContainerMateria.appendChild(divConteudoMateria); //o container é para guardar o conteudo, por questão de estilização;

  outMaterias.appendChild(divContainerMateria); //Apresenta matéria de um vetor percorrida;
}

const inBuscaAutor = document.getElementById("inBuscaAutor"); //Campo de preenchimento de pesquisa;

inBuscaAutor.addEventListener("keyup", buscarAutor); //keyup- TOQUE NO TECLADO;

function buscarAutor() {
  pesquisaAutor = (inBuscaAutor.value).toUpperCase();
  outMaterias.innerHTML = "";

  for (var i = 0; i < vetAutor.length; i++) {
    let autorAux = vetAutor[i].toUpperCase();

    //Verificação de pertencimento das letras preenchidas pelo usuário em algum determinado elemento de um vetor;
    if (autorAux.indexOf(pesquisaAutor) >= 0) {

      var divConteinerMateria = document.createElement("div");
      divConteinerMateria.className = "materia-container";

      var img = document.createElement("img");
      img.src = "../imagens/ImagensNoticias/" + vetImagens[i];
      img.className = "materia-imagem";

      var divConteudoMateria = document.createElement("div");
      divConteudoMateria.className = "materia-conteudo";

      var titulo = document.createElement("h1");
      titulo.className = "materia-titulo";
      titulo.innerHTML = vetTitulo[i];
      titulo.id = "noticia" + i; // Nome da id + a posição (i) - que mais abaixo é usado para encontrar a posição do título clicado através da 'substring' - 8 letras/nº são de 0 a 7 no vetor.
      titulo.addEventListener("click", cliqueTitulo);

      var autor = document.createElement("h3");
      autor.innerHTML = vetAutor[i];
      autor.className = "materia-autor";

      divConteinerMateria.appendChild(img);
      divConteudoMateria.appendChild(titulo);
      divConteudoMateria.appendChild(autor);

      divConteinerMateria.appendChild(divConteudoMateria);

      outMaterias.appendChild(divConteinerMateria);
    }
    // Verificando se nenhuma notícia foi encontrada e exibindo uma mensagem de alerta
    if (outMaterias.innerHTML == "") {
      outMaterias.innerHTML = "Nenhuma matéria encontrada.";
    }
  }
}

function cliqueTitulo() {
  outMaterias.innerHTML = "";

  var idClicado = this.id;
  var idAtual = idClicado.substring(7); // pois o vetor começa do 0 - 8 letras/nº são de 0 a 7 no vetor.

  var artMaterias = document.createElement("article");
  artMaterias.className = "noticia-container";

  var titulo = document.createElement("h1");
  titulo.innerHTML = vetTitulo[idAtual];
  titulo.className = "noticia-titulo";

  var img = document.createElement("img");
  img.src = "../imagens/ImagensNoticias/" + vetImagens[idAtual];
  img.className = "noticia-imagem";

  var texto = document.createElement("p");
  texto.innerHTML = vetTexto[idAtual];
  texto.className = "noticia-texto";

  var autor = document.createElement("h3");
  autor.innerHTML = vetAutor[idAtual];
  autor.className = "noticia-autor";

  artMaterias.appendChild(titulo);
  artMaterias.appendChild(img);
  artMaterias.appendChild(texto);
  artMaterias.appendChild(autor);

  outMaterias.appendChild(artMaterias);
}