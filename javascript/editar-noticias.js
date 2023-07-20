const inPesquisaEditar = document.getElementById("inPesquisaEditar");
const btPesquisaEditar = document.getElementById("btPesquisaEditar");
const outMaterias = document.getElementById("outMaterias");
const btEnviar = document.getElementById("btEnviar");
const formEditar = document.getElementById("formEditar");
formEditar.style.display = "none";
//Adicionando evento no botão de pesquisa de notícias na página de edição;
btPesquisaEditar.addEventListener("click", pesquisaEditar);

function pesquisaEditar() {
  var pesquisaTitulo = (inPesquisaEditar.value).toUpperCase(); //Transformando toda a entrada do input em maiúsculo;
  formEditar.style.display = "none"; //Invisibilizando a formatação do layout;
  outMaterias.innerHTML = ""; //Saída de informações;

    //Verificação de entradas;
    if (inPesquisaEditar.value == "") { 
        alert("Digite o título.");
        inPesquisaEditar.focus();
        outMaterias.innerHTML = "";

    } else {
        for (var i = 0; i < vetTitulo.length; i++) {
            let autorAux = vetTitulo[i].toUpperCase(); //Transformando a entrada de palavras em maiúsculo;
            if (autorAux.indexOf(pesquisaTitulo) >= 0) { //Identificação da parte escrita do usuário com o vetor;
                var divMateria = document.createElement("div"); //Caso encontre, é criado elementos no html para alojar o conteúdo;
                divMateria.className = "materia";
    
                var imgHtml = document.createElement("img"); // Inserindo imagem;
                imgHtml.src = "../imagens/ImagensNoticias/" + vetImagens[i];
                imgHtml.className = "materia-imagem";
    
                var h3 = document.createElement("h3"); //Tag para o título;

                h3.innerHTML = vetTitulo[i]; //Colocando o título na tag criada para ele;
                h3.id = "noticia" + i; // adiciona i para saber em que conteúdo do vetor irá mostrar;

                //Adicionando evento ao clicar no título;
                h3.addEventListener("click", cliqueTitulo);
    
                var h6 = document.createElement("h6"); //Tag para autor;

                h6.innerHTML = vetAutor[i]; //Colocando o título na tag criada para ele;
                h6.className = "autor";
    
                var button = document.createElement("input"); //Botão de publicar a edição;

                button.type = "button";
                button.value = "Editar";
                button.id = "btEditar" + i; // adiciona i para saber em que conteúdo do vetor irá mostrar;

                button.addEventListener("click", inserirDados); // Adicionando evento no botão (clicar);
    
                // Colocando partes de uma notícia na mesma caixa;
                divMateria.appendChild(imgHtml);
                divMateria.appendChild(h3);
                divMateria.appendChild(h6);
                divMateria.appendChild(button);
    
                // Expor notícia (img+título+autor);
                outMaterias.appendChild(divMateria);
            }
        }
        if (outMaterias.innerHTML == "") { //Caso a notícia/parte da notícia procurada não está no vetor;

            outMaterias.innerHTML = "Nenhuma matéria encontrada.";
        }
    }
}

var idAtual;

function inserirDados() {
    //Função para editar notícia clicada;
    var idClicado = this.id;
    idAtual = idClicado.substring(8); //Vetor do botão em: "btEditar" + i;

    formEditar.style.display = "block";
    //Colocar o conteúdo de uma notícia nos campos de editar - abre campo de edição;
    inTitulo.value = vetTitulo[idAtual];
    inTexto.value = vetTexto[idAtual];
    inAutor.value = vetAutor[idAtual];
}

btEnviar.addEventListener("click", editar);

function editar() {
    //Verificação se foi alterado algo ou não no campo de edição;
    if (vetTitulo[idAtual] == inTitulo.value && vetTexto[idAtual] == inTexto.value && vetAutor[idAtual] == inAutor.value) {
        alert("Realize alguma edição.");

    } else if (inTitulo.value == "" || inTexto.value == "" || inAutor.value == "") {
        alert("Os dados não podem ser vazios.");

    } else {
        //Após as verificações, concluir a alteração do usuário;
        vetTitulo[idAtual] = inTitulo.value;
        vetTexto[idAtual] = inTexto.value;
        vetAutor[idAtual] = inAutor.value;
        formEditar.style.display = "none";
        inPesquisaEditar.value = "";
        outMaterias.innerHTML = "Notícia alterada com sucesso!";
    }
}

function cliqueTitulo() { //Botão que entra no conteúdo inteiro da notícia no clique do título;
    outMaterias.innerHTML = ""; //Saída de informações;
    formEditar.style.display = "none"; //Tirando a formatação da visibilidade do usuário;

    var idClicado = this.id; //Pegar todo conteúdo do ID do click;
    var idAtual = idClicado.substring(7); //Pega um símbolo selecionado pela posição do nome do id criado para o elemento clicado (título);

    var divMateria = document.createElement("div"); //Caso encontre, é criado elementos no html para alojar o conteúdo;
    divMateria.className = "materia";

    var h3 = document.createElement("h3"); //Tag para o título;
    h3.innerHTML = vetTitulo[idAtual];

    var img = document.createElement("img"); // Inserindo imagem;
    img.src = "../imagens/ImagensNoticias/" + vetImagens[idAtual]; //Mostrar imagem - idAtual é o número da posição dado no nome do id do elemento;
    img.className = "materia-imagem";

    var texto = document.createElement("article");
    texto.innerHTML = vetTexto[idAtual]; //Mostrar texto da notícia;

    var h6 = document.createElement("h6"); // Inserindo autor;
    h6.innerHTML = vetAutor[idAtual]; //Mostrar autor da notícia;
    h6.className = "autor";

    var button = document.createElement("input"); //Botão de publicar a edição;
    button.type = "button";
    button.value = "Editar";
    button.id = "btEditar" + idAtual; // adiciona idAtual para saber em que conteúdo do vetor irá mostrar;
    button.addEventListener("click", inserirDados); // Adicionando evento no botão (clicar);

    // Colocando partes de uma notícia na mesma caixa;
    divMateria.appendChild(h3);
    divMateria.appendChild(img);
    divMateria.appendChild(texto);
    divMateria.appendChild(h6);
    divMateria.appendChild(button);

    // Expor notícia (img+título+autor);
    outMaterias.appendChild(divMateria);
}