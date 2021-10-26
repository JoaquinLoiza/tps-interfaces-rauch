class Avatar {

    constructor(a) {
        this.avatar = a;
        this.active = false;
    }

    keyEvents(e) {
        if(e.keyCode == 32) {
            this.jump();
        } 
        else if(this.active == false) {
            this.active = true;
            this.run();
        }
    }
    
    run(){
        this.clearAnimationValues();
        setTimeout(() => {
            this.avatar.style.animationDuration = ".5s";
            this.avatar.style.animationTimingFunction = "steps(4)";
            this.avatar.style.animationIterationCount = "infinite";
            this.avatar.style.animationName = "run";
        }, 0);
    }

    jump(){
        this.clearAnimationValues();
        setTimeout(() => {    
            this.avatar.style.animationDuration = "1s";
            this.avatar.style.animationTimingFunction = "steps(3)";
            this.avatar.style.animationIterationCount = "none";
            this.avatar.style.animationName = "jump";
        }, 0);
        window.addEventListener("animationend", () => this.run());
    }

    still() {
        this.clearAnimationValues();
        setTimeout(() => {
            this.avatar.style.animationDuration = "1.5s";
            this.avatar.style.animationTimingFunction = "steps(4)";
            this.avatar.style.animationIterationCount = "infinite";
            this.avatar.style.animationName = "still";
        }, 0);
    }

    die(){
        this.clearAnimationValues();
        setTimeout(() => {
            this.avatar.style.animationDuration = "0.5s";
            this.avatar.style.animationTimingFunction = "steps(2)";
            this.avatar.style.animationIterationCount = "none";
            this.avatar.style.animationName = "die";
        }, 0);
    }

    clearAnimationValues(){
        this.avatar.style.animation = "none";
    }
}