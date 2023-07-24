// Referenciando os elementos no documento HTML
const inPesquisaEditar = document.getElementById("inPesquisaEditar");
const btPesquisaEditar = document.getElementById("btPesquisaEditar");
const outMaterias = document.getElementById("outMaterias");
const formEditar = document.getElementById("formEditar");
const btEnviar = document.getElementById("btEnviar");
var idAtual;

// Inicializando a página com o formulário de edição oculto
formEditar.style.display = "none";

// Adicionando os eventos para executar as functions desejadas
btPesquisaEditar.addEventListener("click", pesquisaEditar);
btEnviar.addEventListener("click", editarDados);

// Criando a function de pesquisa por título
function pesquisaEditar() {

    // Recebendo o texto que o usuário digitou e transformando em maiúsculo
    var pesquisaTitulo = (inPesquisaEditar.value).toUpperCase();

    // Ocultando o fomulário de edição e limpando as matérias em um caso de nova pesquisa
    formEditar.style.display = "none";
    outMaterias.innerHTML = "";

    // Verificando se o usuário digitou algo ou não
    if (inPesquisaEditar.value == "") {
        alert("Digite o título.");
        inPesquisaEditar.focus();
        outMaterias.innerHTML = "";

    // Se tiver digitado, o código continua
    } else {
        // Percorrendo o vetor de título
        for (var i = 0; i < vetTitulo.length; i++) {

            // Transformando o conteúdo da posição específica do vetor em maiúsculo para se encaixar com a pesquisa
            let autorAux = vetTitulo[i].toUpperCase();

            //Verificação de pertencimento das letras preenchidas pelo usuário em algum determinado elemento de um vetor
            if (autorAux.indexOf(pesquisaTitulo) >= 0) {

                // Criando os elementos com seus determinados atributos para serem exibidos na página

                // Criando divs para estilização
                var divContainerMateria = document.createElement("div");
                divContainerMateria.className = "materia-container";

                // Criando as imagens das notícias
                var img = document.createElement("img");
                img.src = "../imagens/ImagensNoticias/" + vetImagens[i];
                img.className = "materia-imagem";

                // Criando divs para estilização
                var divConteudoMateria = document.createElement("div");
                divConteudoMateria.className = "materia-conteudo";

                // Criando o título da matéria
                var titulo = document.createElement("h1");
                titulo.className = "materia-titulo";
                titulo.innerHTML = vetTitulo[i];
                // Adicionando um id no título para depois usarmos na função de clique no título
                titulo.id = "noticia" + i;
                titulo.addEventListener("click", cliqueTituloEditar);

                // Criando nome do autor
                var autor = document.createElement("h3");
                autor.innerHTML = vetAutor[i];
                autor.className = "materia-autor";

                // Criando botão de editar
                var button = document.createElement("input");
                button.type = "button";
                button.value = "Editar";
                // Adicionando um id no botão para depois usarmos na função de editar dados
                button.id = "btEditar" + i;
                button.className = "materia-button";
                button.addEventListener("click", inserirDados);

                // Colocando img em uma div e o titulo/autor/button em outra div
                divContainerMateria.appendChild(img);
                divConteudoMateria.appendChild(titulo);
                divConteudoMateria.appendChild(autor);
                divConteudoMateria.appendChild(button);

                // Juntando as duas divs para formatação
                divContainerMateria.appendChild(divConteudoMateria);

                // Exibindo as notícias
                outMaterias.appendChild(divContainerMateria);

            }
        }
        // Verificando se nenhuma notícia foi encontrada e exibindo uma mensagem de alerta
        if (outMaterias.innerHTML == "") {
            outMaterias.innerHTML = "Nenhuma matéria encontrada.";
        }
    }
}

// Criando a function de clicar no título e entrar na notícia
function cliqueTituloEditar() {

    // Limpando o campo de saída e ocultando o formulário de edição
    outMaterias.innerHTML = "";
    formEditar.style.display = "none";

    // Pegando o elemento inteiro do título que foi clicado e selecionando apenas o id
    var idClicado = this.id;
    // Pegando o sétimo caractere da string do id do título, que será o número
    idAtual = idClicado.substring(7);

    // Criando os elementos e exibindo a notícia na página usando o id do botão que foi pego acima

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

    var autor = document.createElement("h3");
    autor.innerHTML = vetAutor[idAtual];
    autor.className = "noticia-autor";

    // Criando o botão de editar
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Editar";
    // Adicionando um id no botão para depois usarmos na função de editar dados
    button.id = "btEditar" + idAtual;
    button.className = "noticia-button";
    button.addEventListener("click", inserirDados);

    // Juntando todos os elementos no artigo
    artMaterias.appendChild(titulo);
    artMaterias.appendChild(img);
    artMaterias.appendChild(texto);
    artMaterias.appendChild(autor);
    artMaterias.appendChild(button);

    // Exibindo o artigo na página
    outMaterias.appendChild(artMaterias);
}

// Criando a function para editar notícia clicada
function inserirDados() {
    
    // Pegando o elemento inteiro do botão que foi clicado e selecionando apenas o id
    var idClicado = this.id;
    // Pegando o oitavo caractere da string do id do botão, que será o número
    idAtual = idClicado.substring(8);

    // Exibindo o formulário de edição
    formEditar.style.display = "block";
    //Colocando o conteúdo de uma notícia nos campos de editar com o id que foi pego acima
    inTitulo.value = vetTitulo[idAtual];
    inTexto.value = vetTexto[idAtual];
    inAutor.value = vetAutor[idAtual];
}

// Criando a function que altera os dados nos vetores
function editarDados() {
    // Verificação se foi alterado algo ou não nos campos de edição
    if (vetTitulo[idAtual] == inTitulo.value && vetTexto[idAtual] == inTexto.value && vetAutor[idAtual] == inAutor.value) {
        alert("Realize alguma edição.");

    // Verificação se foi digitado algo ou não nos campos de edição
    } else if (inTitulo.value == "" || inTexto.value == "" || inAutor.value == "") {
        alert("Os dados não podem ser vazios.");

    } else {
        //Após as verificações, selecionar o que o usuário digitou e inserir os textos dentro dos vetores, ainda usando o id que foi pego acima
        vetTitulo[idAtual] = inTitulo.value;
        vetTexto[idAtual] = inTexto.value;
        vetAutor[idAtual] = inAutor.value;
        formEditar.style.display = "none";
        inPesquisaEditar.value = "";
        outMaterias.innerHTML = "Notícia alterada com sucesso!";
    }
}