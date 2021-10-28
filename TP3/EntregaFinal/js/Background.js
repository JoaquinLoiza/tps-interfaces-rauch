class Background {
    constructor(layers){
        this.layers = layers;
    }
    
    moveClouds(){
        let times = ["80s", "70s", "60s", "55s"];
        setTimeout(() => {
            for(let i=1; i<=4; i++){
                this.layers[i].style.animationDuration = times[i-1];
                this.layers[i].style.animationTimingFunction = "linear";
                this.layers[i].style.animationIterationCount = "infinite";
                this.layers[i].style.animationName = "moveBackground";
            }
        }, 0);
    }
    
    moveGround(){
        let times = ["50s", "40s", "40s", "35s", "25s", "15s"];
        setTimeout(() => {
            for(let i=5; i<=10; i++){
                this.layers[i].style.animationDuration = times[i-5];
                this.layers[i].style.animationTimingFunction = "linear";
                this.layers[i].style.animationIterationCount = "infinite";
                this.layers[i].style.animationName = "moveBackground";
            }
        }, 0);
    }

    stop(){
        for(let i=5; i<=10; i++){
            this.layers[i].style.animation = "none";
        }
    }
} 