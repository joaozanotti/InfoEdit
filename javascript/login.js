// Referenciando os elementos no documento HTML
const inSenha = document.getElementById("inSenha");
const btLogin = document.getElementById("btLogin");

// Criando uma constante para ser a senha do login
const senhaFixa = 1234;

// Adicionando o evento de clique no botão
btLogin.addEventListener("click", redirecionar);

function redirecionar() {
    // Recebendo o valor que o usuário digitou
    var senha = Number(inSenha.value);

    // Verificando se a senha que ele digitou é igual ou não à senha fixa do site
    if (senha == senhaFixa) {
        // Se for igual, ele é redirecionado para a página de inserção de notícias
        window.location.href = "inserir-noticias.html";
    } else {
        // Se for diferente, um alerta é apresentado
        alert("Senha incorreta.");
        inSenha.value = "";
        inSenha.focus();
    }
}