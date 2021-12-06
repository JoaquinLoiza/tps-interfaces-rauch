let help = document.getElementById("help");
help.addEventListener("click", () => {
    document.querySelector(".help").style.visibility = "visible";
    setTimeout(1000, closeHelp); 
});