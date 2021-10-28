class Timmer {
    constructor(game){
        this.game = game;
        this.timmer = null;
        this.startingMinutes = 1;
        this.time = (this.startingMinutes * 60);
    }
    
    //comienza con el conteo
    start(){
        this.timmer = setInterval(() => {     

            const MINUTES = Math.floor(this.time/60);
            let seconds = this.time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;
        
            document.getElementById("timmer").innerHTML= `${MINUTES}:${seconds}`;
            this.time--;
            if(MINUTES == 0 && seconds == '00') {
                clearInterval(this.timmer);
                this.game.winner();
            }
        }, 1000);
    }
}