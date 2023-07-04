var vetTitulo = [
    "Homem paraplégico volta a andar após receber implantes no cérebro em técnica pioneira",
    "3 áreas em que a inteligência artificial já está melhorando nossas vidas",
    "O único restaurante do mundo que serve carne cultivada em laboratório",
    "Por que ainda não é possível fazer um transplante de cérebro",
    "A radical influência da tecnologia no sono das pessoas",
    "'Meninas no limite' por que as adolescentes sofrem mais com problemas causados por redes sociais"
];

var vetAutor = [
    "Pallab Ghosh",
    "Jean Tyler",
    "Nick Marsh",
    "Jannette Rodríguez Pallares",
    "Catherine Coveney e Eric L. Hsu",
    "Ángel Bermúdez"
];

var vetTexto = [
    "Um homem paraplégico conseguiu andar simplesmente pensando nisso graças a implantes cerebrais eletrônicos, uma tecnologia da medicina que, segundo ele, mudou sua vida...",
    "O que a inteligência artificial gera de fascínio, gera também de medo...",
    "Parece frango, tem cheiro de frango e gosto de frango. Eu jamais imaginaria que o pedaço de carne que está na minha frente não veio de uma fazenda...",
    "Gostaria de convidar você a fazer uma viagem ao passado...",
    "Dos monitores de sono até os medicamentos para ficar acordado, o século 21 vem trazendo um conjunto de novas tecnologias capaz de alterar radicalmente a forma como dormimos...",
    "Alguns dizem que é uma emergência de saúde pública — e os números certamente indicam que algo está acontecendo..."
];

var campoPesquisa = document.getElementById("campoPesquisa");
var botaoHeader = document.getElementById("botaoHeader");


botaoHeader.addEventListener("click", buscar);

function buscar() {

    if (campoPesquisa.value = "") {

        alert("8");

    }
    else {
        for (var i = 0; i < vetAutor.length; i++) {
            if (vetAutor[i] == campoPesquisa) {
                var divMateria = document.createElement("div");
                divMateria.className = "materia";

                var img = document.createElement("img");
                img.src = "./IMG_S/ImagensNoticias/noticia" + (i + 1) + ".png";
                img.className = "materia-imagem";

                var h3 = document.createElement("h3");

                var link = document.createElement("a");
                link.href = "./Noticias/" + vetTitulo[i] + ".html";
                link.innerHTML = vetTitulo[i];

                h3.appendChild(link);

                var h6 = document.createElement("h6");
                h6.innerHTML = vetAutor[i];
                h6.className = "autor";

                divMateria.appendChild(img);
                divMateria.appendChild(h3);
                divMateria.appendChild(h6);

                outmaterias.appendChild(divMateria);
            }
            else {

            }

        }
    }

}