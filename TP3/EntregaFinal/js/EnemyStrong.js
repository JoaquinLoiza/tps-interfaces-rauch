class EnemyStrong extends Collision{
    constructor() {
        super();
        this.collision = this.create();
    }

    //Crea el elemento bugStrong
    create() {
        let container = document.querySelector(".container");
        let newDiv = document.createElement("div");
        newDiv.classList.add("bugStrong");
        container.appendChild(newDiv);
        return newDiv;
    }

    //Setea los valores para que el enemigo se mueva
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