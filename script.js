let circulo = document.querySelector(".circulo");
let imagemCopo = document.querySelector(".imagem-copo");

function mudarCor(cor, numeroImagem) {
    circulo.style.backgroundColor = cor;
    imagemCopo.src = "img/img" + numeroImagem + ".png";
}