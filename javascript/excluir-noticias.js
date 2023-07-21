const inPesquisaExcluir = document.getElementById("inPesquisaExcluir");
const btPesquisaExcluir = document.getElementById("btPesquisaExcluir");
const outMaterias = document.getElementById("outMaterias");
const btExcluir = document.getElementById("btExcluir");

//CRIANDO BOTAO PARA ACESSO DA FUNCION DE PESQUISAR;
btPesquisaExcluir.addEventListener("click", pesquisar);

function pesquisar() {
  var pesquisaTitulo = (inPesquisaExcluir.value).toUpperCase();// TRANSFORMANDO TUDO EM MAIÚSCULO
  outMaterias.innerHTML = "";
    for (var i = 0; i < vetTitulo.length; i++) {
        let autorAux = vetTitulo[i].toUpperCase();
        if (autorAux.indexOf(pesquisaTitulo) >= 0) {
            var divContainerMateria = document.createElement("div");
            divContainerMateria.className = "materia-container";

            //EXIBINDO AS IMAGENS DAS NOTICIAS;
            var img = document.createElement("img");
            img.src = "../imagens/ImagensNoticias/" + vetImagens[i];
            img.className = "materia-imagem";

            //CRIANDO DIVS PARA ESTILIZAÇÃO
            var divConteudoMateria = document.createElement("div");
            divConteudoMateria.className = "materia-conteudo";
            
            //MOSTRANDO OS TITULOS DA MATERIA;
            var titulo = document.createElement("h1");
            titulo.className = "materia-titulo";
            titulo.innerHTML = vetTitulo[i];
            titulo.id = "noticia" + i;
            titulo.addEventListener("click", cliqueTitulo);

            //MOSTRANDO NOME DO AUTOR;
            var autor = document.createElement("h3");
            autor.innerHTML = vetAutor[i];
            autor.className = "materia-autor";

            var button = document.createElement("input");
            button.type = "button";
            button.value = "Excluir";
            button.id = "btExcluir" + i;
            button.addEventListener("click", excluir);

            divContainerMateria.appendChild(img);
            divConteudoMateria.appendChild(titulo);
            divConteudoMateria.appendChild(autor);
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

    var titulo = document.createElement("h1");
    titulo.innerHTML = vetTitulo[idAtual];
    titulo.className = "noticia-titulo";

    var img = document.createElement("img");
    img.src = "../imagens/ImagensNoticias/" + vetImagens[idAtual];
    img.className = "noticia-imagem";

    var texto = document.createElement("article");
    texto.innerHTML = vetTexto[idAtual];
    texto.className = "noticia-texto";

    var autor = document.createElement("h3");
    autor.innerHTML = vetAutor[idAtual];
    autor.className = "noticia-autor";

    var button = document.createElement("input");
    button.type = "button";
    button.value = "Excluir";
    button.id = "btExcluir" + idAtual;
    button.addEventListener("click", excluir);

    divMateria.appendChild(titulo);
    divMateria.appendChild(img);
    divMateria.appendChild(texto);
    divMateria.appendChild(autor);
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