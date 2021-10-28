class BonusJs extends Skill {

    constructor() {
        super();
        super.setCollision(this.create());
    }

    create() {
        let container = document.querySelector(".container");
        let newDiv = document.createElement("div");
        newDiv.classList.add("bonusJs");
        container.appendChild(newDiv);
        return newDiv;
    }
}