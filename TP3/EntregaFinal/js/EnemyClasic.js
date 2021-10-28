class EnemyClasic extends Collision{
    constructor() {
        super();
        this.collision = this.create();
    }
    
    //Crea el elemento bugClasic
    create() {
        let container = document.querySelector(".container");
        let newDiv = document.createElement("div");
        newDiv.classList.add("bugClasic");
        container.appendChild(newDiv);
        return newDiv;
    }
    
    //Setea los valores para que el enemigo se mueva
    show(){
        setTimeout(() => {
            this.collision.style.animationDuration = "4s";
            this.collision.style.animationTimingFunction = "linear";
            this.collision.style.animationIterationCount = "normal";
            this.collision.style.animationName = "enemy";
        }, 0);
        this.collision.addEventListener("animationend", () => super.remove());
    }
}