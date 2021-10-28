class Collision {
    constructor() {
        this.collision = null;
    }
    remove() {
        let container = document.querySelector(".container");
        container.removeChild(this.collision);
    }
}