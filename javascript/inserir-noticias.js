// Referenciando os elementos no documento HTML
const inTitulo = document.getElementById("inTitulo");
const inAutor = document.getElementById("inAutor");
const inTexto = document.getElementById("inTexto");
const btAdicionar = document.getElementById("btAdicionar");
const outMaterias = document.getElementById("outMaterias");

// Adicionando o evento de clique no botão para adicionar os dados
btAdicionar.addEventListener("click", adicionarDados);

// Criando a function para adicionar os dados
function adicionarDados() {
    // Limpando o parágrafo de saída para mostrar apenas a notícia que o usuário acabou de inserir
    outMaterias.innerHTML = "";

    // Verificando se o usuário preencheu todos os campos
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
        // Se estiver tudo preenchido, ele pega os textos que o usuário digitou e guarda em variáveis
        var tituloAdicionado = inTitulo.value;
        var autorAdicionado = inAutor.value;
        var conteudoAdicionado = inTexto.value;

        // Adicionando os textos que o usuário digitou na última posição dos vetores
        vetTitulo.push(tituloAdicionado);
        vetAutor.push(autorAdicionado);
        vetTexto.push(conteudoAdicionado);

        // Pegando o número total de elementos do vetor e diminuindo 1 para conseguirmos usar como índice (Exemplo: se tiverem 7 elementos, ele pega o número 7 e diminui 1, ficando com o número 6, que é o valor da última posição do vetor nesse caso)
        var indice = vetTitulo.length - 1;

        // Criando os elementos e exibindo a notícia na página usando o número da última posição que foi pego acima

        // Criando divs para estilização
        var divContainerMateria = document.createElement("div");
        divContainerMateria.className = "materia-container";

        // Criando as imagens das notícias
        var img = document.createElement("img");
        img.src = "../imagens/ImagensNoticias/" + vetImagens[indice];
        img.className = "materia-imagem";

        // Criando divs para estilização
        var divConteudoMateria = document.createElement("div");
        divConteudoMateria.className = "materia-conteudo";

        // Criando o título da matéria
        var titulo = document.createElement("h1");
        titulo.className = "materia-titulo";
        titulo.innerHTML = vetTitulo[indice];
        // Adicionando um id no título para depois usarmos na função de clique no título
        titulo.id = "noticia" + indice;
        titulo.addEventListener("click", cliqueTituloAdicionar);

        // Criando nome do autor
        var autor = document.createElement("h3");
        autor.innerHTML = vetAutor[indice];
        autor.className = "materia-autor";

        // Colocando img em uma div e o titulo/autor em outra div
        divContainerMateria.appendChild(img);
        divConteudoMateria.appendChild(titulo);
        divConteudoMateria.appendChild(autor);

        // Juntando as duas divs para formatação
        divContainerMateria.appendChild(divConteudoMateria);

        // Exibindo as notícias
        outMaterias.appendChild(divContainerMateria);
    }
}

// Adicionando uma function de clique no título para mostrar o conteúdo inteiro das matérias
function cliqueTituloAdicionar() {
    // Limpando o parágrafo de saída para mostrar apenas o conteúdo da notícia específica
    outMaterias.innerHTML = "";

    // Pegando o elemento inteiro do título que foi clicado e selecionando apenas o id
    var idClicado = this.id;
    // Pegando o sétimo caractere da string do id do título, que será o número
    var idAtual = idClicado.substring(7);

    // Criando os elementos e exibindo a notícia na página usando o id do título que foi pego acima

    // Criando o article para estilização do texto
    var artMaterias = document.createElement("article");
    artMaterias.className = "noticia-container";

    // Criando o título da matéria
    var titulo = document.createElement("h1");
    titulo.innerHTML = vetTitulo[idAtual];
    titulo.className = "noticia-titulo";

    // Criando a imagem da notícia
    var img = document.createElement("img");
    img.src = "../imagens/ImagensNoticias/" + vetImagens[idAtual];
    img.className = "noticia-imagem";

    // Criando o texto da notícia
    var texto = document.createElement("p");
    texto.innerHTML = vetTexto[idAtual];
    texto.className = "noticia-texto";

    // Criando o nome do autor
    var autor = document.createElement("h3");
    autor.innerHTML = vetAutor[idAtual];
    autor.className = "noticia-autor";

    // Juntando todos os elementos no artigo
    artMaterias.appendChild(titulo);
    artMaterias.appendChild(img);
    artMaterias.appendChild(texto);
    artMaterias.appendChild(autor);

    // Exibindo o artigo na página
    outMaterias.appendChild(artMaterias);
}