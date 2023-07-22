const outMaterias = document.getElementById("outMaterias");

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

  divContainerMateria.appendChild(divConteudoMateria);

  outMaterias.appendChild(divContainerMateria);
}

const inBuscaAutor = document.getElementById("inBuscaAutor");
const btHeader = document.getElementById("btHeader");

inBuscaAutor.addEventListener("keyup", buscarAutor);

function buscarAutor() {
  pesquisaAutor = (inBuscaAutor.value).toUpperCase();
  outMaterias.innerHTML = "";

  for (var i = 0; i < vetAutor.length; i++) {
    let autorAux = vetAutor[i].toUpperCase();
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
      titulo.id = "noticia" + i;
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
  }
}

function cliqueTitulo() {
  outMaterias.innerHTML = "";

  var idClicado = this.id;
  var idAtual = idClicado.substring(7);

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