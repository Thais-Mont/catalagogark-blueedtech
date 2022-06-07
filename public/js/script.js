let imgBanner = document.getElementById('banner');
const closeMessage = document.querySelector('#close');
const mensagem = document.querySelector('#mensagem');

closeMessage.addEventListener("click", function (){
  messagem.style.display = "none";
});

setTimeout(() => {
  messagem.style.display = "none";
}, 5000);

function slide1(){
  imgBanner.src="./img-banner/imagem01.jpg";
  setTimeout("slide2()", 5000);
  }
  
  function slide2(){
    imgBanner.src="./img-banner/imagem03.jpg";
    setTimeout("slide1()", 5000);
  }
  
