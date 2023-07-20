const inTitulo = document.getElementById("inTitulo");
const inAutor = document.getElementById("inAutor");
const inTexto = document.getElementById("inTexto");

const btAdicionar = document.getElementById("btAdicionar");
const outMaterias = document.getElementById("outMaterias");

btAdicionar.addEventListener("click", adicionar);

var indice;
function adicionar() {
    outMaterias.textContent = "";

    if (inTitulo.value == "") {
        alert("Escreva um título válido para a notícia.");
        inTitulo.value = "";
        inTitulo.focus();

    } else if (inAutor.value == "") {
        alert("Escreva um autor válido para esta notícia.");
        inAutor.value = "";
        inAutor.focus();

    } else if (inTexto.value == "") {
        alert("Ecreva um conteúdo válido para a matéria.");
        inTexto.value = "";
        inTexto.focus();

    } else {
        var tituloAdicionado = inTitulo.value;
        var autorAdicionado = inAutor.value;
        var conteudoAdicionado = inTexto.value;

        vetTitulo.push(tituloAdicionado);
        vetAutor.push(autorAdicionado);
        vetTexto.push(conteudoAdicionado);

        indice = vetTitulo.length - 1;
        var divContainerMateria = document.createElement("div");
        divContainerMateria.className = "materia-container";

        var img = document.createElement("img");
        img.src = "../imagens/ImagensNoticias/" + vetImagens[indice];
        img.className = "materia-imagem";

        var divConteudoMateria = document.createElement("div");
        divConteudoMateria.className = "materia-conteudo";

        var h1 = document.createElement("h1");
        h1.className = "materia-titulo";
        h1.innerHTML = vetTitulo[indice];
        h1.id = "noticia" + indice;
        h1.addEventListener("click", cliqueTitulo);

        var h3 = document.createElement("h3");
        h3.innerHTML = vetAutor[indice];
        h3.className = "materia-autor";

        divContainerMateria.appendChild(img);
        divConteudoMateria.appendChild(h1);
        divConteudoMateria.appendChild(h3);

        divContainerMateria.appendChild(divConteudoMateria);

        outMaterias.appendChild(divContainerMateria);
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
    texto.className = "noticia-texto";

    var h3 = document.createElement("h3");
    h3.innerHTML = vetAutor[idAtual];
    h3.className = "noticia-autor";

    divMateria.appendChild(h1);
    divMateria.appendChild(img);
    divMateria.appendChild(texto);
    divMateria.appendChild(h3);

    outMaterias.appendChild(divMateria);
}