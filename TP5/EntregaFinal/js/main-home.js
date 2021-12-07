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

document.querySelector("#busqueda").addEventListener('keydown', (e) => {
    let text = document.getElementById("busqueda").value;
    if (e.key == 'Enter'){
        window.location.href = "busqueda.html";        
    }
  });










