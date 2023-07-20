const inPesquisaEditar = document.getElementById("inPesquisaEditar");
const btPesquisaEditar = document.getElementById("btPesquisaEditar");
const outMaterias = document.getElementById("outMaterias");
const btEnviar = document.getElementById("btEnviar");
const formEditar = document.getElementById("formEditar");
formEditar.style.display = "none";

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
                button.value = "Editar";
                button.id = "btEditar" + i;
                button.addEventListener("click", inserirDados);
    
                divContainerMateria.appendChild(img);
                divConteudoMateria.appendChild(h1);
                divConteudoMateria.appendChild(h3);
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

function cliqueTitulo() {
    outMaterias.innerHTML = "";
    formEditar.style.display = "none";

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
    texto.className = "noticia-texto";

    var h3 = document.createElement("h3");
    h3.innerHTML = vetAutor[idAtual];
    h3.className = "noticia-autor";

    var button = document.createElement("input");
    button.type = "button";
    button.value = "Editar";
    button.id = "btEditar" + idAtual;
    button.addEventListener("click", inserirDados);

    divMateria.appendChild(h1);
    divMateria.appendChild(img);
    divMateria.appendChild(texto);
    divMateria.appendChild(h3);
    divMateria.appendChild(button);

    outMaterias.appendChild(divMateria);
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

btEnviar.addEventListener("click", editar);

function editar() {
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