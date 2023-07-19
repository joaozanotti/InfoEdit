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
                var divMateria = document.createElement("div");
                divMateria.className = "materia";
    
                var imgHtml = document.createElement("img")
                imgHtml.src = "../imagens/ImagensNoticias/" + vetImagens[i];
                imgHtml.className = "materia-imagem";
    
                var h3 = document.createElement("h3");
                h3.innerHTML = vetTitulo[i];
                h3.id = "noticia" + i;
                h3.addEventListener("click", cliqueTitulo);
    
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
        if (outMaterias.innerHTML == "") {
            outMaterias.innerHTML = "Nenhuma matéria encontrada.";
        }
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

function cliqueTitulo() {
    outMaterias.innerHTML = "";
    formEditar.style.display = "none";

    var idClicado = this.id;
    var idAtual = idClicado.substring(7);

    var divMateria = document.createElement("div");
    divMateria.className = "materia";

    var h3 = document.createElement("h3");
    h3.innerHTML = vetTitulo[idAtual];

    var img = document.createElement("img");
    img.src = "../imagens/ImagensNoticias/" + vetImagens[idAtual];
    img.className = "materia-imagem";

    var texto = document.createElement("article");
    texto.innerHTML = vetTexto[idAtual];

    var h6 = document.createElement("h6");
    h6.innerHTML = vetAutor[idAtual];
    h6.className = "autor";

    var button = document.createElement("input");
    button.type = "button";
    button.value = "Editar";
    button.id = "btEditar" + idAtual;
    button.addEventListener("click", inserirDados);

    divMateria.appendChild(h3);
    divMateria.appendChild(img);
    divMateria.appendChild(texto);
    divMateria.appendChild(h6);
    divMateria.appendChild(button);

    outMaterias.appendChild(divMateria);
}