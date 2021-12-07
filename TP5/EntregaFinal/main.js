let help = document.getElementById("help");
help.addEventListener("click", () => {
    document.querySelector(".help").style.visibility = "visible";
});

function setStyleDiv(){
    document.querySelector(".seleccionar-chat").style.backgroundColor = "rgb(235 235 235)";
    document.querySelector(".active-chat1").style.color = "black";
    document.querySelector(".active-chat2").style.color = "black";
    document.querySelector(".input-c").style.backgroundColor = "white";
}



