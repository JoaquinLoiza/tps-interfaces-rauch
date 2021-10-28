class Avatar {

    constructor(a) {
        this.avatar = a;
    }

    //Setea los valores para que el avatar corra
    run(){
        this.clearAnimationValues();
        setTimeout(() => {
            this.avatar.style.animationDuration = ".5s";
            this.avatar.style.animationTimingFunction = "steps(6)";
            this.avatar.style.animationIterationCount = "infinite";
            this.avatar.style.animationName = "run";
        }, 0);
    }

    //Setea los valores para que el avatar salte
    jump(){
        this.clearAnimationValues();
        setTimeout(() => {    
            this.avatar.style.animationDuration = "1.5s";
            this.avatar.style.animationTimingFunction = "steps(3)";
            this.avatar.style.animationIterationCount = "none";
            this.avatar.style.animationName = "jump";
        }, 0);
        this.avatar.addEventListener("animationend", () => this.run());
    }

    //Setea los valores para que el avatar quede en reposo
    still() {
        this.clearAnimationValues();
        setTimeout(() => {
            this.avatar.style.animationDuration = "1.5s";
            this.avatar.style.animationTimingFunction = "steps(4)";
            this.avatar.style.animationIterationCount = "infinite";
            this.avatar.style.animationName = "still";
        }, 0);
    }

    //Setea los valores para que el avatar caiga ante una colisión
    die(){
        this.clearAnimationValues();
        setTimeout(() => {
            this.avatar.style.animationDuration = "0.5s";
            this.avatar.style.animationTimingFunction = "steps(2)";
            this.avatar.style.animationIterationCount = "none";
            this.avatar.style.animationName = "die";
        }, 0);
    }

    //quita las animaciones al avatar
    clearAnimationValues(){
        this.avatar.style.animation = "none";
    }
}