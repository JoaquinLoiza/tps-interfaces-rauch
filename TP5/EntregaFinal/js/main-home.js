'use strict';

let iconInicio = document.querySelector(".bi-house-door");
window.onload = function() {
    iconInicio.classList.add("borde-icono");
};

let likeDislike = document.querySelectorAll(".like-dislike");

for (let i=0; i < likeDislike.length; i++){
    likeDislike[i].addEventListener("click", function(){
        likeDislike[i].childNodes[1].classList.toggle("icono_ocultar");
        likeDislike[i].childNodes[3].classList.toggle("icono_ocultar");
    });
}

let btnsSeguir = document.querySelectorAll(".boton-seguir");

for (let i=0; i < btnsSeguir.length; i++){
    btnsSeguir[i].addEventListener("click", function(){

        if(btnsSeguir[i].innerHTML == "Seguir") {
            btnsSeguir[i].innerHTML = "Seguido";
            btnsSeguir[i].style.backgroundColor="#AAAAAA";
        } else {
            btnsSeguir[i].innerHTML = "Seguir";
            btnsSeguir[i].style.backgroundColor="#A4CC79";
        }
    });
}