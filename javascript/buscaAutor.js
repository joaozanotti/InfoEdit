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
      var imgHtml = document.createElement("img");
      imgHtml.src = "../imagens/ImagensNoticias/" + vetImagens[i];
      imgHtml.className = "materia-imagem";

      var h6 = document.createElement("h6");
      h6.innerHTML = vetAutor[i];
      h6.className = "autor";
      outMaterias.appendChild(imgHtml);
      outMaterias.appendChild(h6);

    }
  }


}