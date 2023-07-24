// Referenciando os elementos no documento HTML
const inPesquisaExcluir = document.getElementById("inPesquisaExcluir");
const btPesquisaExcluir = document.getElementById("btPesquisaExcluir");
const outMaterias = document.getElementById("outMaterias");
const btExcluir = document.getElementById("btExcluir");

// Adicionando evento de clique no botão para acionamento da function de pesquisa
btPesquisaExcluir.addEventListener("click", pesquisarExcluir);

// Criando a function de pesquisa por título
function pesquisarExcluir() {
    // Recebendo o texto que o usuário digitou e transformando em maiúsculo
    var pesquisaTitulo = (inPesquisaExcluir.value).toUpperCase();

    // Limpando o parágrafo de saída em caso de nova pesquisa
    outMaterias.innerHTML = "";

    // Verificando se o usuário digitou algo ou não
    if (inPesquisaExcluir.value == "") {
        alert("Digite um título.");
        inPesquisaExcluir.focus();
        outMaterias.innerHTML = "";
 
    } else {
        // Criando a estrutura de repetição para percorrer o vetor de título
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
                titulo.addEventListener("click", cliqueTituloExcluir);

                // Criando nome do autor
                var autor = document.createElement("h3");
                autor.innerHTML = vetAutor[i];
                autor.className = "materia-autor";

                // Criando botão de excluir
                var button = document.createElement("input");
                button.type = "button";
                button.value = "Excluir";
                // Adicionando um id no botão para depois usarmos na função de excluir dados
                button.id = "btExcluir" + i;
                button.className = "materia-button";
                button.addEventListener("click", excluirDados);

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
            // Verificando se nenhuma notícia foi encontrada e exibindo uma mensagem de alerta
            if (outMaterias.innerHTML == "") {
                outMaterias.innerHTML = "Nenhuma matéria encontrada.";
            }
        }
    }
}

// Criando a function de clicar no título e entrar na notícia
function cliqueTituloExcluir() {
    // Limpando o campode saída
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

    // Criando o botão de excluir
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Excluir";
    // Adicionando um id no botão para depois usarmos na função de excluir dados
    button.id = "btExcluir" + idAtual;
    button.className = "noticia-button";
    button.addEventListener("click", excluirDados);

    // Juntando todos os elementos no artigo
    artMaterias.appendChild(titulo);
    artMaterias.appendChild(img);
    artMaterias.appendChild(texto);
    artMaterias.appendChild(autor);
    artMaterias.appendChild(button);

    // Exibindo o artigo na página
    outMaterias.appendChild(artMaterias);
}

function excluirDados() {
    // Pegando o elemento inteiro do botão que foi clicado e selecionando apenas o id
    var idClicado = this.id;
    // Pegando o nono caractere da string do id do botão, que será o número
    idAtual = idClicado.substring(9);

    // Seleciona o elemento dentro do vetor usando o idAtual e o próximo número seleciona quantos elementos a serem excluídos;
    vetTitulo.splice(idAtual, 1);
    vetAutor.splice(idAtual, 1);        
    vetImagens.splice(idAtual, 1);
    vetTexto.splice(idAtual, 1);

    // Limpa o input de pesquisa das notícias
    inPesquisaExcluir.value = "";
    // Exibe uma mensagem de confirmação ao usuário
    outMaterias.innerHTML = "Notícia Excluida com sucesso!";

}