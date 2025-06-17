// Função que troca a imagem do projeto ao clicar
function trocarImagem(elemento) {
  // Pega a tag <img> dentro do projeto clicado
  const img = elemento.querySelector("img");

  // Pega o caminho atual da imagem (src)
  const srcAtual = img.getAttribute("src");

  // Verifica se a imagem atual termina com "a.jpg"
  if (srcAtual.includes("a.jpg")) {
    // Troca para a versão "b"
    img.setAttribute("src", srcAtual.replace("a.jpg", "b.jpg"));
  } else {
    // Troca para a versão "a"
    img.setAttribute("src", srcAtual.replace("b.jpg", "a.jpg"));
  }
}