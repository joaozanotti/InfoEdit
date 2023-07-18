// login

const inSenha = document.getElementById("inSenha");
const btLogin = document.getElementById("btLogin");

const senhaFixa = 1234;

btLogin.addEventListener("click", redirecionar);

// adicionar noticia

const intituloNoticia = document.getElementById("intituloNoticia");
const inautorNoticia = document.getElementById("inautorNoticia");
const inconteudoNoticia = document.getElementById("inconteudoNoticia");
const btadicionar = document.getElementById("btadicionar");

intituloNoticia.style.display = "none";
inautorNoticia.style.display = "none";
inconteudoNoticia.style.display = "none";
btadicionar.style.display = "none";

// login

function redirecionar() {

    var senha = Number(inSenha.value);

    if (senha == senhaFixa) {

        intituloNoticia.style.display = "block";
        inautorNoticia.style.display = "block";
        inconteudoNoticia.style.display = "block";
        btadicionar.style.display = "block";

        
        btadicionar.addEventListener("click", adicionar);

    } else {
        alert("Senha incorreta.");
        inSenha.value = "";
        inSenha.focus();
    }
}

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