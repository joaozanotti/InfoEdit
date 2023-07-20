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
            var divContainerMateria = document.createElement("div");
            divContainerMateria.className = "materia-container";

            var img = document.createElement("img")
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

            var button = document.createElement("input");
            button.type = "button";
            button.value = "Excluir";
            button.id = "btExcluir" + i;
            button.addEventListener("click", excluir);

            divContainerMateria.appendChild(img);
            divConteudoMateria.appendChild(h1);
            divConteudoMateria.appendChild(h3);
            divConteudoMateria.appendChild(button);

            divContainerMateria.appendChild(divConteudoMateria);

            outMaterias.appendChild(divContainerMateria);
        }
    }
}

function cliqueTitulo() {
    outMaterias.innerHTML = "";

    var idClicado = this.id;
    var idAtual = idClicado.substring(7);

    var divMateria = document.createElement("div");
    divMateria.className = "noticia-container";

    var h1 = document.createElement("h1");
    h1.innerHTML = vetTitulo[idAtual];
    h1.className = "noticia-titulo";

    var img = document.createElement("img");
    img.src = "../imagens/ImagensNoticias/" + vetImagens[idAtual];
    img.className = "noticia-imagem";

    var texto = document.createElement("article");
    texto.innerHTML = vetTexto[idAtual];
    texto.className = "noticia-texto"

    var h3 = document.createElement("h3");
    h3.innerHTML = vetAutor[idAtual];
    h3.className = "noticia-autor";

    var button = document.createElement("input");
    button.type = "button";
    button.value = "Excluir";
    button.id = "btExcluir" + idAtual;
    button.addEventListener("click", excluir);

    divMateria.appendChild(h1);
    divMateria.appendChild(img);
    divMateria.appendChild(texto);
    divMateria.appendChild(h3);
    divMateria.appendChild(button);

    outMaterias.appendChild(divMateria);
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