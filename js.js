var arrayLinkImg = new Array(); //array para manter os links filmes adicionados pelo usuário
var arrayNome = new Array(); //array para manter o nome dos filmes adicionados pelo usuário
var arrayVideo = new Array(); //array para adicionar o video de trailer
var i = 0;
var elementoLink;
var elementoNome;
var elementoVideo;
var elementoListaJogos;

function adicionarJogos() {
    elementoLink = document.getElementById("linkImgJogo").value;
    elementoNome = document.getElementById("nomeJogo").value;
    elementoVideo = document.getElementById("linkVidJogo").value;
    elementoListaJogos = document.getElementById("listaJogos");

    if (elementoLink.endsWith("jpg")) {
        arrayLinkImg.push(elementoLink);
        arrayNome.push(elementoNome);
        arrayVideo.push(elementoVideo);
        document.getElementById("linkImgJogo").value = '';
        document.getElementById("nomeJogo").value = '';
        document.getElementById("linkVidJogo").value = '';
    } else {
        alert("Só é possível adicionar imagens com formato jpg, jpeg, png");
    }

    mostrarJogos();
}

function removerJogo(i) {
    arrayLinkImg.splice(arrayLinkImg.indexOf(i), 1);
    arrayNome.splice(arrayNome.indexOf(i), 1);
    arrayVideo.splice(arrayVideo.indexOf(i), 1);

    mostrarJogos();
}

function mostrarJogos() {
    elementoListaJogos.innerHTML = ''; //"reinicia" o função de mostrar
    for (i = 0; i < arrayLinkImg.length; i++) {
        elementoListaJogos.innerHTML += `<p class=textoDasImagens><a href="${arrayVideo[i]}" target="_blank"><img src="${arrayLinkImg[i]}"><\a> ${arrayNome[i]}<br>
  <button id="removerJogo" onClick="removerJogo(i)">Remover jogo</button><\p>`;
    }
}


