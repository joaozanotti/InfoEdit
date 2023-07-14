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
}

var idAtual;

function inserirDados() {
    formEditar.style.display = "block";
    var idClicado = this.id;
    idAtual = idClicado.substring(8);

    inTitulo.value = vetTitulo[idAtual];
    inTexto.value = vetTexto[idAtual];
    inAutor.value = vetAutor[idAtual];
}

btEnviar.addEventListener("click", editar);

function editar() {
    if (vetTitulo[idAtual] == inTitulo.value && vetTexto[idAtual] == inTexto.value && vetAutor[idAtual] == inAutor.value) {
        alert("Realize alguma edição.");

    } else {
        vetTitulo[idAtual] = inTitulo.value;
        vetTexto[idAtual] = inTexto.value;
        vetAutor[idAtual] = inAutor.value;
        formEditar.style.display = "none";
        outMaterias.innerHTML = "Notícia alterada com sucesso!";
        inPesquisaEditar.value = "";
    }
}