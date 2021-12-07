'use strict';

let iconMensaje = document.querySelector(".bi-envelope");
window.onload = function() {
    iconMensaje.classList.add("borde-icono");
};

let elDiv = document.getElementById("div_principal");
elDiv.addEventListener("click", setStyleDiv, false);

function setStyleDiv(){
    document.querySelector(".seleccionar-chat").style.backgroundColor = "rgb(235 235 235)";
    document.querySelector(".active-chat1").style.color = "black";
    document.querySelector(".active-chat2").style.color = "black";
    document.querySelector(".input-c").style.backgroundColor = "white";
}

let iconohome = document.getElementById("icono-home");
iconohome.addEventListener("click", () => {
    document.querySelector(".bi-envelope").style.border = "none";
});
