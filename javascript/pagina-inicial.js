const outMaterias = document.getElementById("outMaterias");

for (var i = 0; i < vetTitulo.length; i++) {

  var divContainerMateria = document.createElement("div");
  divContainerMateria.className = "materia-container";

  var img = document.createElement("img");
  img.src = "../imagens/ImagensNoticias/" + vetImagens[i];
  img.className = "materia-imagem";

  var divConteudoMateria = document.createElement("div");
  divConteudoMateria.className = "materia-conteudo";

  var h1 = document.createElement("h1");
  h1.className = "materia-titulo";
  h1.innerHTML = vetTitulo[i];
  h1.id = "noticia" + i;
  h1.addEventListener("click", cliqueTitulo);

  var h3 = document.createElement("h3");
  h3.innerHTML = vetAutor[i];
  h3.className = "materia-autor";

  divContainerMateria.appendChild(img);
  divConteudoMateria.appendChild(h1);
  divConteudoMateria.appendChild(h3);

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
    
      var h1 = document.createElement("h1");
      h1.className = "materia-titulo";
      h1.innerHTML = vetTitulo[i];
      h1.id = "noticia" + i;
      h1.addEventListener("click", cliqueTitulo);
    
      var h3 = document.createElement("h3");
      h3.innerHTML = vetAutor[i];
      h3.className = "materia-autor";
    
      divConteinerMateria.appendChild(img);
      divConteudoMateria.appendChild(h1);
      divConteudoMateria.appendChild(h3);
    
      divConteinerMateria.appendChild(divConteudoMateria);
    
      outMaterias.appendChild(divConteinerMateria);
    }
  }
}

function cliqueTitulo() {
    outMaterias.innerHTML = "";

    var idClicado = this.id;
    var idAtual = idClicado.substring(7);

    var divMateria = document.createElement("div");
    divMateria.className = "";

    var h3 = document.createElement("h3");
    h3.innerHTML = vetTitulo[idAtual];

    var img = document.createElement("img");
    img.src = "../imagens/ImagensNoticias/" + vetImagens[idAtual];
    img.className = "";

    var texto = document.createElement("article");
    texto.innerHTML = vetTexto[idAtual];

    var h6 = document.createElement("h6");
    h6.innerHTML = vetAutor[idAtual];
    h6.className = "";

    divMateria.appendChild(h3);
    divMateria.appendChild(img);
    divMateria.appendChild(texto);
    divMateria.appendChild(h6);

    outMaterias.appendChild(divMateria);
}