let a = document.querySelector(".avatar");
let avatar =  new Avatar(a);

window.addEventListener("keydown", (e) => avatar.keyEvents(e));

window.onload = () => avatar.still();

