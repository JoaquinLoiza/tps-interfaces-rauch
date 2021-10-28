class Game {
    constructor(avatar, background) { 
        this.avatar = avatar;
        this.background = background;
        this.active = false;
        this.lives = 3;
        this.timmer = new Timmer(this);
    }
    //trae el valor de las vidas
    getLives() {
        return this.lives;
    }
    //trae el estado del juego
    getActive(){
        return this.active;
    }
    //Setea el estado del juego
    setActive(value) {
        this.active = value;
    }
    //Setea el valor de las vidas
    setLives(n){
        if(this.lives < 5 && n > 0) {
            this.lives = this.lives+n;
        } else if(n < 0){
            this.lives = this.lives+n;
        }
    }

    //Eventos
    keyEvents(e) {
        if(e.keyCode == 32 && this.active == true) {
            this.avatar.jump();
        } 
        else if(this.active == false) {
            document.querySelector(".welcome").style.visibility = "hidden";
            this.initGame();
        }
    }

    //Inicio del juego
    initGame() {
        this.active = true;
        this.timmer.start();
        this.showLives();
        this.avatar.run();
        this.background.moveGround();
        
        setInterval(() => {
            if(this.active == true) {
                let enemy = new EnemyClasic();
                enemy.show();
            }
        }, 4000);

        setInterval(() => {
            if(this.active == true) {
                let enemy = new EnemyStrong();
                enemy.show();
            }
        }, 13000);

        setInterval(() => {
            if(this.active == true) {
                let bonusJs = new BonusJs();
                bonusJs.show();
            }
        }, 7000);
    }

    //detecta si hay una colision 
    detectCollision(){
        let avatarPosition = document.querySelector(".avatar").getBoundingClientRect();
        let avatarW = avatarPosition.left + avatarPosition.width;
        let avatarH = avatarPosition.top + avatarPosition.height;

        //Detecta si se superponen las áreas con el bug
        if(document.querySelector(".bugClasic") != null){
            this.detectCollisionWithElement(".bugClasic", -1, avatarW, avatarH, avatarPosition);
        }
        //Detecta si se superponen las áreas con el bug strong
        if(document.querySelector(".bugStrong") != null){
            this.detectCollisionWithElement(".bugStrong", -2, avatarW, avatarH, avatarPosition); 
        }

        //Detecta si se superponen las áreas con el BonusJS
        if(document.querySelector(".bonusJs") != null){
           this.detectCollisionWithElement(".bonusJs", 1, avatarW, avatarH, avatarPosition);
        }
    }

    detectCollisionWithElement(e, v, aW, aH, aP) {
        let elementPosition = document.querySelector(e).getBoundingClientRect();
        let eW = elementPosition.left + elementPosition.width;
        let eH = elementPosition.top + elementPosition.height;
        
        if(aP.left <= eW && aW >= elementPosition.left && aH >= elementPosition.top && aP.top <= eH){
            let container = document.querySelector(".container");
            if(v==1){
                document.querySelector(e).style.animationDuration = "1s";
                document.querySelector(e).style.animationName = "getBonus";
            } else {
                container.removeChild(document.querySelector(e));
                this.avatar.die();
                document.querySelector(".avatar").addEventListener("animationend", () => this.avatar.run() );

            }
            this.setLives(v);
            this.showLives();
        }
    }
    //muestra las vidas
    showLives(){
        let lives = document.querySelector(".lives");
        let string = "";
        for(let i=1; i<= this.lives; i++){
            string += "💛";
        }
        lives.innerHTML = string;
    }

    //setea los valores de las animaciones cuando termina el juego
    gameOver(){
        let alert = document.querySelector(".alert");
        this.setActive(false);
        this.background.stop();
        this.avatar.clearAnimationValues();
        alert.innerHTML = "Perdiste 😥";
        document.querySelector(".msj").style.visibility = "visible";
        document.querySelector(".button").addEventListener("click", () => location.reload());
        this.avatar.still();
    }
    //setea los valores de las animaciones cuando gano
    winner(){
        let alert = document.querySelector(".alert");
        this.setActive(false);
        this.avatar.still();
        this.background.stop();
        this.avatar.clearAnimationValues();
        alert.innerHTML = "Ganaste 😎";
        document.querySelector(".msj").style.visibility = "visible";
        document.querySelector(".button").addEventListener("click", () => location.reload());
    }
}