const inPesquisa = document.getElementById("inPesquisa");
const btPesquisa = document.getElementById("btPesquisa");
const outMaterias = document.getElementById("outMaterias");
var button;

btPesquisa.addEventListener("click", pesquisar);

function pesquisar() {
  var pesquisaTitulo = (inPesquisa.value).toUpperCase();
  outMaterias.innerHTML = "";
    for (var i = 0; i < vetTitulo.length; i++) {
        let autorAux = vetTitulo[i].toUpperCase();
        if (autorAux.indexOf(pesquisaTitulo) >= 0) {
            var divMateria = document.createElement("div");
            divMateria.className = "materia";

            var imgHtml = document.createElement("img")
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

            button = document.createElement("input");
            button.type = "button";
            button.value = "Excluir";
            button.id = "btExcluir" + i;
            button.addEventListener("click", excluir);

            divMateria.appendChild(imgHtml);
            divMateria.appendChild(h3);
            divMateria.appendChild(h6);
            divMateria.appendChild(button);

            outMaterias.appendChild(divMateria);
        }
    }
}

function excluir() {
    
}