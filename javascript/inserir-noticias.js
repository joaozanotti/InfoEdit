
const inTitulo = document.getElementById("inTitulo");
const inAutor = document.getElementById("inAutor");
const inTexto = document.getElementById("inTexto");

const btadicionar = document.getElementById("btadicionar");

const outMaterias = document.getElementById("outMaterias");

btadicionar.addEventListener("click", adicionar);

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

            var divConteinerMateria = document.createElement("div");
            divConteinerMateria.className = "materia-conteiner";


            var img = document.createElement("img");
            img.src = "../imagens/ImagensNoticias/" + vetImagens[i];
            img.className = "materia-imagem";


            var divConteudoMateria = document.createElement("div");
            divConteudoMateria.className = "materia-conteudo";

            var h1 = document.createElement("h1");
            h1.className = "materia-titulo";

            var link = document.createElement("a");
            link.href = "noticia" + (i + 1) + ".html";
            link.innerHTML = vetTitulo[i];
            link.className = "materia-link";

            h1.appendChild(link);

            var h3 = document.createElement("h3");
            h3.innerHTML = vetAutor[i];
            h3.className = "materia-autor";


            divConteinerMateria.appendChild(img);

            divConteudoMateria.appendChild(h1);
            divConteudoMateria.appendChild(h3);

            divConteinerMateria.appendChild(divConteudoMateria)

            outMaterias.appendChild(divConteinerMateria);
        }
    }
}