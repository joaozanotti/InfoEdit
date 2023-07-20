const inTitulo = document.getElementById("inTitulo");
const inAutor = document.getElementById("inAutor");
const inTexto = document.getElementById("inTexto");

const btAdicionar = document.getElementById("btAdicionar");
const outMaterias = document.getElementById("outMaterias");

btAdicionar.addEventListener("click", adicionar);

function adicionar() {

    outMaterias.textContent = "";

    if (inTitulo.value == "") {

        alert("Escreva um título válido para a notícia.");
        inTitulo.value = "";
        inTitulo.focus();

    }
    else if (inAutor.value == "") {

        alert("Escreva um autor válido para esta notícia.");
        inAutor.value = "";
        inAutor.focus();

    }
    else if (inTexto.value == "") {

        alert("Ecreva um conteúdo válido para a matéria.");
        inTexto.value = "";
        inTexto.focus();

    }
    else {

        var tituloAdicionado = inTitulo.value;
        var autorAdicionado = inAutor.value;
        var conteudoAdicionado = inTexto.value;

        vetTitulo.push(tituloAdicionado);
        vetAutor.push(autorAdicionado);
        vetTexto.push(conteudoAdicionado);

        for (var i = 0; i < vetTitulo.length; i++) {

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

            divContainerMateria.appendChild(img);
            divConteudoMateria.appendChild(h1);
            divConteudoMateria.appendChild(h3);

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
    divMateria.className = "";

    var h3 = document.createElement("h3");
    h3.innerHTML = vetTitulo[idAtual];

    var img = document.createElement("img");
    img.src = "../imagens/ImagensNoticias/" + vetImagens[idAtual];
    img.className = "";

    var texto = document.createElement("article");
    texto.innerHTML = vetTexto[idAtual];

    var h6 = document.createElement("h6");
    h6.innerHTML = vetAutor[idAtual];
    h6.className = "";

    divMateria.appendChild(h3);
    divMateria.appendChild(img);
    divMateria.appendChild(texto);
    divMateria.appendChild(h6);

    outMaterias.appendChild(divMateria);
}