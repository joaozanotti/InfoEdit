const inTitulo = document.getElementById("inTitulo");
const inAutor = document.getElementById("inAutor");
const inTexto = document.getElementById("inTexto");

const btAdicionar = document.getElementById("btAdicionar");
const outMaterias = document.getElementById("outMaterias");

btAdicionar.addEventListener("click", adicionarDados);

var indice;
function adicionarDados() {
    outMaterias.textContent = "";
    //VERIFICAÇÃO DE DADOS DE ENTRADA;
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

        indice = vetTitulo.length - 1; //Definir o indice da matéria inserida usando o comando length;
        var divContainerMateria = document.createElement("div");
        divContainerMateria.className = "materia-container";

        var img = document.createElement("img");
        img.src = "../imagens/ImagensNoticias/" + vetImagens[indice];
        img.className = "materia-imagem";

        var divConteudoMateria = document.createElement("div");
        divConteudoMateria.className = "materia-conteudo";

        var titulo = document.createElement("h1");
        titulo.className = "materia-titulo";
        titulo.innerHTML = vetTitulo[indice];
        titulo.id = "noticia" + indice;
        titulo.addEventListener("click", cliqueTituloAdicionar);

        var autor = document.createElement("h3");
        autor.innerHTML = vetAutor[indice];
        autor.className = "materia-autor";

        divContainerMateria.appendChild(img);
        divConteudoMateria.appendChild(titulo);
        divConteudoMateria.appendChild(autor);

        divContainerMateria.appendChild(divConteudoMateria);

        outMaterias.appendChild(divContainerMateria);
    }
}

function cliqueTituloAdicionar() {
    outMaterias.innerHTML = "";

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

    artMaterias.appendChild(titulo);
    artMaterias.appendChild(img);
    artMaterias.appendChild(texto);
    artMaterias.appendChild(autor);

    outMaterias.appendChild(artMaterias);
}