class Skill extends Collision {
    constructor() {
        super();
        this.collision = null;
    }
    //Setea la colision 
    setCollision(c) {
        this.collision = c;
    }
    //Muestra el bonus
    show(){
        if(this.collision != null) {
            setTimeout(() => {
                this.collision.style.animationDuration = "5s";
                this.collision.style.animationTimingFunction = "linear";
                this.collision.style.animationIterationCount = "normal";
                this.collision.style.animationName = "bonus"
            }, 0);
            this.collision.addEventListener("animationend", () => super.remove());
        }
    }
}