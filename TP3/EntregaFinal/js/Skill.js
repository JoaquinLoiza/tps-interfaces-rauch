class Skill extends Collision {
    constructor() {
        super();
        this.collision = null;
    }

    setCollision(c) {
        this.collision = c;
    }

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