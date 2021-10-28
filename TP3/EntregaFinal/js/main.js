let a = document.querySelector(".avatar");
let layers = document.querySelectorAll(".layer");
let avatar =  new Avatar(a);
let background = new Background(layers);
let game = new Game(avatar, background);


window.addEventListener("keydown", (e) => game.keyEvents(e));


window.onload = () => {
    background.moveClouds();
    avatar.still();
};

let gameloop = setInterval(function() {
    game.detectCollision();
    if(game.getLives() == 0){
        clearInterval(gameloop);
        game.gameOver();        
    }
}, 100);

document.querySelector("#avatar").addEventListener("change", () => {
    if(document.querySelector("#avatar").value == 1) {
        document.querySelector(".avatar").style.background = "url('images/Jimena.png') no-repeat";
    } else {
        document.querySelector(".avatar").style.background = "url('images/Nacho.png') no-repeat";
    }
}); 