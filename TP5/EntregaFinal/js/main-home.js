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
            btnsSeguir[i].innerHTML = "Siguiendo";
            btnsSeguir[i].style.backgroundColor="transparent";
            btnsSeguir[i].style.border = "1px solid #414759";
        } else {
            btnsSeguir[i].innerHTML = "Seguir";
            btnsSeguir[i].style.backgroundColor="#A4CC79";
            btnsSeguir[i].style.border = "none";
        }
    });
}
document.querySelector("#busqueda").addEventListener('keydown', (e) => {
    let text = document.getElementById("busqueda").value;
    if (e.key == 'Enter'){
        window.location.href = "busqueda.html";        
    }
  });

let btnPost = document.getElementById("btnPost");
let fondoBlur = document.getElementById("fondoBlur");
let inputPost = document.getElementById("nuevoPost");
let closeNewPost = document.getElementById("closePost");
let btnAceptarPost = document.getElementById("btnAceptarPost");


btnPost.addEventListener("click", nuevoPost);
closeNewPost.addEventListener("click", nuevoPost);
btnAceptarPost.addEventListener("click", nuevoPost);

function nuevoPost() {
    fondoBlur.classList.toggle("ocultar");
    inputPost.classList.toggle("ocultar");
}












