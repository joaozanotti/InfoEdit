const outMaterias = document.getElementById("outMaterias");

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
