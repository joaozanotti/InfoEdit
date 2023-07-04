const inSenha = document.getElementById("inSenha");
const btLogin = document.getElementById("btLogin");
const senhaFixa = 1234;

btLogin.addEventListener("click", redirecionar);

function redirecionar() {
    var senha = Number(inSenha.value);

    if (senha == senhaFixa) {
        window.location.href = "inserir-noticias.html";
    } else {
        alert("Senha incorreta.");
        inSenha.value = "";
        inSenha.focus();
    }   
}