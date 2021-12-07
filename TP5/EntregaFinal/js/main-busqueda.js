let personas = document.querySelector(".b-personas");
personas.addEventListener("click", showPersons);

function showPersons(){
    document.querySelector(".b-personas").style.backgroundColor = "#544179";
    document.querySelector(".b-personas h1").style.color = "white";
    document.querySelector(".publicaciones").style.visibility = "hidden";
}