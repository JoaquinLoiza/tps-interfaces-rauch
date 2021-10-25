class Avatar {
    constructor(a) {
        this.avatar = a;
        this.keyPress = false;
    }

    setKeyPress(value) {
        this.keyPress = value;
    }

    keyEvents(e) {
        if(e.keyCode == 38 && this.keyPress == false) {
            this.setKeyPress(true);
            this.jump();
        } 
        else if(e.keyCode == 39 && this.keyPress == false) {
            this.setKeyPress(true);
            this.run();
        }
    }
    
    jump(){
        this.clearAnimationValues();
        setTimeout(() => {    
            this.avatar.style.animationDuration = "0.7s";
            this.avatar.style.animationTimingFunction = "steps(3)";
            this.avatar.style.animationIterationCount = "none";
            this.avatar.style.animationName = "jump";
        }, 0);
        this.still();
    }

    still() {
        this.clearAnimationValues();
        setTimeout(() => {
            this.avatar.style.animationDuration = ".8s";
            this.avatar.style.animationTimingFunction = "steps(4)";
            this.avatar.style.animationIterationCount = "infinite";
            this.avatar.style.animationName = "still";
        }, 3000);
    }

    run(){
        this.clearAnimationValues();
        setTimeout(() => {
            this.avatar.style.animationDuration = "1s";
            this.avatar.style.animationTimingFunction = "steps(4)";
            this.avatar.style.animationIterationCount = "infinite";
            this.avatar.style.animationName = "run";
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