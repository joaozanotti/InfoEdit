
// adicionar noticia

const intituloNoticia = document.getElementById("intituloNoticia");
const inautorNoticia = document.getElementById("inautorNoticia");
const inconteudoNoticia = document.getElementById("inconteudoNoticia");
const btadicionar = document.getElementById("btadicionar");

btadicionar.addEventListener("click", adicionar);

function adicionar() {

    var tituloAdicionado = intituloNoticia.value;
    var autorAdicionado = inautorNoticia.value;
    var conteudoAdicionado = inconteudoNoticia.value;


    if (intituloNoticia.value == "") {

        alert("escreva um titulo valido para a noticia.");
        intituloNoticia.value = "";
        intituloNoticia.focus();

    }
    else if (inautorNoticia.value == "") {

        alert("escreva um autor valido para esta noticia.");
        inautorNoticia.value = "";
        inautorNoticia.focus();

    }
    else if (inconteudoNoticia.value == "") {

        alert("ecreva um conteudo valido para a materia.");
        inconteudoNoticia.value = "";
        inconteudoNoticia.focus();

    }
    else {

        vetTitulo.push(tituloAdicionado);
        vetAutor.push(autorAdicionado);
        vetTexto.push(conteudoAdicionado);

        outMaterias.textContent = ""

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