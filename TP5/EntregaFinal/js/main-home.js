'use strict';

let elDiv = document.getElementById("div_principal");
elDiv.addEventListener("click", setStyleDiv, false);

function setStyleDiv(){
    document.querySelector(".seleccionar-chat").style.backgroundColor = "rgb(235 235 235)";
    document.querySelector(".active-chat1").style.color = "black";
    document.querySelector(".active-chat2").style.color = "black";
    document.querySelector(".input-c").style.backgroundColor = "white";
}

let iconomsj = document.getElementById("icono-msj");
iconomsj.addEventListener("click", () => {
    document.querySelector(".bi-house-door").style.border = "none";
});

