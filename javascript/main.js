const outMaterias = document.getElementById("outMaterias");

for (var i = 0; i < vetTitulo.length; i++) {

  var divMateria = document.createElement("div");
  divMateria.className = "materia";

  var img = document.createElement("img");
  img.src = "../imagens/ImagensNoticias/" + vetImagens[i];
  img.className = "materia-imagem";

  var h3 = document.createElement("h3");

  var link = document.createElement("a");
  link.href = "noticia" + (i+1) + ".html";
  link.innerHTML = vetTitulo[i];
  
  h3.appendChild(link);

  var h6 = document.createElement("h6");
  h6.innerHTML = vetAutor[i];
  h6.className = "autor";

  divMateria.appendChild(img);
  divMateria.appendChild(h3);
  divMateria.appendChild(h6);

  outMaterias.appendChild(divMateria);
}