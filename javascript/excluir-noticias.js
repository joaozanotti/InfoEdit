const inPesquisaExcluir = document.getElementById("inPesquisaExcluir");
const btPesquisaExcluir = document.getElementById("btPesquisaExcluir");
const outMaterias = document.getElementById("outMaterias");
const btExcluir = document.getElementById("btExcluir");

//CRIANDO BOTAO PARA ACESSO DA FUNCION DE PESQUISAR;
btPesquisaExcluir.addEventListener("click", pesquisarExcluir);

function pesquisarExcluir() {

    var pesquisaTitulo = (inPesquisaExcluir.value).toUpperCase();// TRANSFORMANDO TUDO EM MAIÚSCULO

    outMaterias.innerHTML = "";

    if (inPesquisaExcluir.value == "") {

        alert("Digite um título.");
        inPesquisaExcluir.focus();
        outMaterias.innerHTML = "";


        //CRIANDO UMA ESTRUTURA DE REPETIÇÁO PARA PESQUISAR 
    } else {
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

                //MOSTRANDO OS TITULOS DA MATERIA E DANDO UM ID PARA ELES;
                var titulo = document.createElement("h1");
                titulo.className = "materia-titulo";
                titulo.innerHTML = vetTitulo[i];
                titulo.id = "noticia" + i;
                titulo.addEventListener("click", cliqueTituloExcluir);

                //MOSTRANDO NOME DO AUTOR;
                var autor = document.createElement("h3");
                autor.innerHTML = vetAutor[i];
                autor.className = "materia-autor";

                //CRIANDO BOTÃO DE EXCLUIR COM ID; 
                var button = document.createElement("input");
                button.type = "button";
                button.value = "Excluir";
                button.id = "btExcluir" + i;
                button.className = "materia-button";
                button.addEventListener("click", excluirDados);

                //JUNTANDO IMG/TITULO/AUTOR/BUTTON EM "divConteudoMateria" PARA EXIBIR AS NOTICIAS;
                divContainerMateria.appendChild(img);
                divConteudoMateria.appendChild(titulo);
                divConteudoMateria.appendChild(autor);
                divConteudoMateria.appendChild(button);

                divContainerMateria.appendChild(divConteudoMateria);

            //EXIBINDO AS NOTICIAS;
            outMaterias.appendChild(divContainerMateria);
        }
    }
}
    //FUNCTION INCIADA AO CLICK NO TITULO DA MATERIA 
function cliqueTituloExcluir() {
    outMaterias.innerHTML = "";

    var idClicado = this.id;    
    var idAtual = idClicado.substring(7);

    //ESTILIZAÇÃO DO TEXTO
    var artMaterias = document.createElement("article");
    artMaterias.className = "noticia-container";

    //MOSTRANDO OS TITULOS DA MATERIA;
    var titulo = document.createElement("h1");
    titulo.innerHTML = vetTitulo[idAtual];
    titulo.className = "noticia-titulo";

    //EXIBINDO AS IMAGENS DAS NOTICIAS;
    var img = document.createElement("img");
    img.src = "../imagens/ImagensNoticias/" + vetImagens[idAtual];
    img.className = "noticia-imagem";

    //EXIBINDO O TEXTO DAS NOTICIAS;
    var texto = document.createElement("p");
    texto.innerHTML = vetTexto[idAtual];
    texto.className = "noticia-texto";

    //MOSTRANDO NOME DO AUTOR;
    var autor = document.createElement("h3");
    autor.innerHTML = vetAutor[idAtual];
    autor.className = "noticia-autor";

    //CRIANDO O BOTAO EXCLUIR DENTRO DO CLICK TITULO;
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Excluir";
    button.id = "btExcluir" + idAtual;
    button.className = "noticia-button";
    button.addEventListener("click", excluirDados);

    //JUNTANDO IMG/TITULO/TEXTO/AUTOR/BUTTON EM "divConteudoMateria" PARA EXIBIR AS NOTICIAS;
    artMaterias.appendChild(titulo);
    artMaterias.appendChild(img);
    artMaterias.appendChild(texto);
    artMaterias.appendChild(autor);
    artMaterias.appendChild(button);

    outMaterias.appendChild(artMaterias);
}
}
function excluirDados() {
    var idClicado = this.id; //VERIFICA O ID DO BOTAO,E GUARDA O ID DO BOTAO CLICADO "btExcluir(0 a 5)"
    idAtual = idClicado.substring(9);  //PEGA O CARACTERE DE NUMERO 9 E GUARDA; 

    vetTitulo.splice(idAtual, 1); 
    vetAutor.splice(idAtual, 1);        //SELECIONA O ELEMENTO DENTRO DO VETOR DA POSIÇÃO idAtual E O PROXIMO NUMERO EXCLUI ELE (1);
    vetImagens.splice(idAtual, 1);
    vetTexto.splice(idAtual, 1);

    inPesquisaExcluir.value = "";    // LIMPAS AS NOTICIAS; 
    outMaterias.innerHTML = "Notícia Excluida com sucesso!";// DEPOIS DA NOTICIA EXCLUIDA MENSAGEM; 

}