const inPesquisaEditar = document.getElementById("inPesquisaEditar");
const btPesquisaEditar = document.getElementById("btPesquisaEditar");

const outMaterias = document.getElementById("outMaterias");

const formEditar = document.getElementById("formEditar");
const btEnviar = document.getElementById("btEnviar");

formEditar.style.display = "none";

//Adicionando evento no botão de pesquisa de notícias na página de edição;
btPesquisaEditar.addEventListener("click", pesquisaEditar);

function pesquisaEditar() {

    var pesquisaTitulo = (inPesquisaEditar.value).toUpperCase();

    formEditar.style.display = "none";
    outMaterias.innerHTML = "";

    if (inPesquisaEditar.value == "") {

        alert("Digite o título.");
        inPesquisaEditar.focus();
        outMaterias.innerHTML = "";

    } else {
        for (var i = 0; i < vetTitulo.length; i++) {

            let autorAux = vetTitulo[i].toUpperCase();

            if (autorAux.indexOf(pesquisaTitulo) >= 0) {

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
                titulo.addEventListener("click", cliqueTituloEditar);

                var autor = document.createElement("h3");
                autor.innerHTML = vetAutor[i];
                autor.className = "materia-autor";

                var button = document.createElement("input");
                button.type = "button";
                button.value = "Editar";
                button.id = "btEditar" + i;
                button.className = "materia-button";
                button.addEventListener("click", inserirDados);

                divContainerMateria.appendChild(img);
                divConteudoMateria.appendChild(titulo);
                divConteudoMateria.appendChild(autor);
                divConteudoMateria.appendChild(button);

                divContainerMateria.appendChild(divConteudoMateria);

                outMaterias.appendChild(divContainerMateria);

            }
        }
        if (outMaterias.innerHTML == "") {
            outMaterias.innerHTML = "Nenhuma matéria encontrada.";
        }
    }
}

function cliqueTituloEditar() {

    outMaterias.innerHTML = "";
    formEditar.style.display = "none";

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

    var button = document.createElement("input");
    button.type = "button";
    button.value = "Editar";
    button.id = "btEditar" + idAtual;
    button.className = "noticia-button";
    button.addEventListener("click", inserirDados);

    artMaterias.appendChild(titulo);
    artMaterias.appendChild(img);
    artMaterias.appendChild(texto);
    artMaterias.appendChild(autor);
    artMaterias.appendChild(button);

    outMaterias.appendChild(artMaterias);
}

var idAtual;

function inserirDados() {
    //Função para editar notícia clicada;
    var idClicado = this.id;
    idAtual = idClicado.substring(8); //Vetor do botão em: "btEditar" + i;

    formEditar.style.display = "block";
    //Colocar o conteúdo de uma notícia nos campos de editar - abre campo de edição;
    inTitulo.value = vetTitulo[idAtual];
    inTexto.value = vetTexto[idAtual];
    inAutor.value = vetAutor[idAtual];
}

btEnviar.addEventListener("click", editarDados);

function editarDados() {
    //Verificação se foi alterado algo ou não no campo de edição;
    if (vetTitulo[idAtual] == inTitulo.value && vetTexto[idAtual] == inTexto.value && vetAutor[idAtual] == inAutor.value) {
        alert("Realize alguma edição.");

    } else if (inTitulo.value == "" || inTexto.value == "" || inAutor.value == "") {
        alert("Os dados não podem ser vazios.");

    } else {
        //Após as verificações, concluir a alteração do usuário;
        vetTitulo[idAtual] = inTitulo.value;
        vetTexto[idAtual] = inTexto.value;
        vetAutor[idAtual] = inAutor.value;
        formEditar.style.display = "none";
        inPesquisaEditar.value = "";
        outMaterias.innerHTML = "Notícia alterada com sucesso!";
    }
}