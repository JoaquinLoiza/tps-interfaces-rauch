class Collision {
    constructor() {
        this.collision = null;
    }

    //Remueve elemento div de la colisión
    remove() {
        let container = document.querySelector(".container");
        container.removeChild(this.collision);
    }
}