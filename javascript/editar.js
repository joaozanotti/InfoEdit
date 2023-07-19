const inPesquisaEditar = document.getElementById("inPesquisaEditar");
const btPesquisaEditar = document.getElementById("btPesquisaEditar");
const outMaterias = document.getElementById("outMaterias");
const btEnviar = document.getElementById("btEnviar");
const formEditar = document.getElementById("formEditar");
formEditar.style.display = "none";

btPesquisaEditar.addEventListener("click", pesquisaEditar);

function pesquisaEditar() {
  var pesquisaTitulo = (inPesquisaEditar.value).toUpperCase();
  outMaterias.innerHTML = "";

    for (var i = 0; i < vetTitulo.length; i++) {
        let autorAux = vetTitulo[i].toUpperCase();
        if (autorAux.indexOf(pesquisaTitulo) >= 0) { //Identificação da parte escrita do usuário com o vetor;
            var divMateria = document.createElement("div"); //Caso encontre, é criado elementos no html;
            divMateria.className = "materia";

            var imgHtml = document.createElement("img") // Expor parte da notícia (img, título e autor);
            imgHtml.src = "../imagens/ImagensNoticias/" + vetImagens[i]; 
            imgHtml.className = "materia-imagem";

            var h3 = document.createElement("h3");

            var link = document.createElement("a"); // Expor parte da notícia (img, título e autor);
            link.href = "noticia" + (i + 1) + ".html";
            link.innerHTML = vetTitulo[i];
            h3.appendChild(link);

            var h6 = document.createElement("h6"); // Expor parte da notícia (img, título e autor);
            h6.innerHTML = vetAutor[i];
            h6.className = "autor";

            var button = document.createElement("input"); //Botão de publicar a edição;
            button.type = "button";
            button.value = "Editar";
            button.id = "btEditar" + i;
            button.addEventListener("click", inserirDados);

            divMateria.appendChild(imgHtml);
            divMateria.appendChild(h3);
            divMateria.appendChild(h6);
            divMateria.appendChild(button);

            outMaterias.appendChild(divMateria);
        }
    }
    if (outMaterias.innerHTML == "") {
        outMaterias.innerHTML = "Nenhuma matéria encontrada.";
    }
}

var idAtual;

function inserirDados() {
    var idClicado = this.id;
    idAtual = idClicado.substring(8);

    formEditar.style.display = "block";
    inTitulo.value = vetTitulo[idAtual];
    inTexto.value = vetTexto[idAtual];
    inAutor.value = vetAutor[idAtual];
}

btEnviar.addEventListener("click", enviar);

function enviar() {
    if (vetTitulo[idAtual] == inTitulo.value && vetTexto[idAtual] == inTexto.value && vetAutor[idAtual] == inAutor.value) {
        alert("Realize alguma edição.");

    } else if (inTitulo.value == "" || inTexto.value == "" || inAutor.value == "") {
        alert("Os dados não podem ser vazios.");

    } else {
        vetTitulo[idAtual] = inTitulo.value;
        vetTexto[idAtual] = inTexto.value;
        vetAutor[idAtual] = inAutor.value;
        formEditar.style.display = "none";
        inPesquisaEditar.value = "";
        outMaterias.innerHTML = "Notícia alterada com sucesso!";
    }
}