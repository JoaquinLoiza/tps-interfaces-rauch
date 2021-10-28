class EnemyStrong extends Collision{
    constructor() {
        super();
        this.collision = this.create();
    }

    create() {
        let container = document.querySelector(".container");
        let newDiv = document.createElement("div");
        newDiv.classList.add("bugStrong");
        container.appendChild(newDiv);
        return newDiv;
    }

    show(){
        setTimeout(() => {
            this.collision.style.animationDuration = "3.5s";
            this.collision.style.animationTimingFunction = "linear";
            this.collision.style.animationIterationCount = "normal";
            this.collision.style.animationName = "enemyStrong"
        }, 0);
        this.collision.addEventListener("animationend", () => super.remove());
    }
}