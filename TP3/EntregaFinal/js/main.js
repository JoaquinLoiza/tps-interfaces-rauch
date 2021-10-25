let a = document.querySelector(".avatar");
let avatar =  new Avatar(a);
window.addEventListener("keydown", (e) => avatar.keyEvents(e));
window.addEventListener("keyup", (e) => { 
    avatar.setKeyPress(false);
    avatar.still();
});
