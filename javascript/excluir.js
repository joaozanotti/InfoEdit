const inPesquisaExcluir = document.getElementById("inPesquisaExcluir");
const btPesquisaExcluir = document.getElementById("btPesquisaExcluir");
const outMaterias = document.getElementById("outMaterias");
const btExcluir = document.getElementById("btExcluir");

btPesquisaExcluir.addEventListener("click", pesquisar);

function pesquisar() {
  var pesquisaTitulo = (inPesquisaExcluir.value).toUpperCase();
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

            var button = document.createElement("input");
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
    var idClicado = this.id;
    idAtual = idClicado.substring(9);

    vetTitulo.splice(idAtual , 1);
    vetAutor.splice(idAtual , 1);
    vetImagens.splice(idAtual , 1);
    vetTexto.splice(idAtual , 1);
    
    inPesquisaExcluir.value = "";
    outMaterias.innerHTML = "Notícia Excluida com sucesso!";

}