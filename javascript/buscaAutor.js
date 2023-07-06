//Referenciando o hltml;
const inBuscaAutor = document.getElementById("inBuscaAutor");
const btHeader = document.getElementById("btHeader");
const artigo = document.getElementById("artigo");


inBuscaAutor.addEventListener("keyup", buscarAutor);

function buscarAutor() {
  pesquisaAutor = (inBuscaAutor.value).toUpperCase();
  outMaterias.innerHTML = "";

  for (var i = 0; i < vetAutor.length; i++) {
    let autorAux = vetAutor[i].toUpperCase();
    if (autorAux.indexOf(pesquisaAutor) >= 0) {

      var divMateria = document.createElement("div");
      divMateria.className = "materia";

      var imgHtml = document.createElement("img");
      imgHtml.src = "../imagens/ImagensNoticias/" + vetImagens[i];
      imgHtml.className = "materia-imagem";


      var h3 = document.createElement("h3");

      var link = document.createElement("a");
      link.href = "noticia" + (i + 1) + ".html";
      link.innerHTML = vetTitulo[i];
      h3.appendChild(link);

      var h6 = document.createElement("h6");
      h6.innerHTML = vetAutor[i];
      h6.className = "autor";


      divMateria.appendChild(imgHtml);
      divMateria.appendChild(h3);
      divMateria.appendChild(h6);

      outMaterias.appendChild(divMateria);
  

    }
  }
}

vetTitulo.addEventListener("click", cliqueTitulo);

function cliqueTitulo() {
  for (var i = 0; i < vetTitulo.length; i++) {

    var divMateria = document.createElement("div");
    divMateria.className = "materia";

    var img = document.createElement("img");
    img.src = "../imagens/ImagensNoticias/" + vetImagens[i];
    img.className = "materia-imagem";

    var h3 = document.createElement("h3");

    var link = document.createElement("a");
    link.href = "noticia" + (i + 1) + ".html";
    link.innerHTML = vetTitulo[i];

    h3.appendChild(link);

    var h6 = document.createElement("h6");
    h6.innerHTML = vetAutor[i];
    h6.className = "autor";

    divMateria.appendChild(img);
    divMateria.appendChild(h3);
    divMateria.appendChild(h6);

    outMaterias.appendChild(divMateria);
  }
}