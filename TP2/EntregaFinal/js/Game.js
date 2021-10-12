class Game {
    constructor(ctx, board, tokensPlayer1, tokensPlayer2) {
        this.ctx = ctx;
        this.board = board; 
        this.tokensPlayer1 = tokensPlayer1;
        this.tokensPlayer2 = tokensPlayer2;
        this.player1 = 1;
        this.player2 = 2;
        //this.time = time;
        this.mousedown = false; 
    }
    
    tokensDraw() {
        let widthContainerTokens = this.ctx.canvas.width /4;
        let posX = widthContainerTokens*3; 
        let x = 0;
        let y = 0;
        let margin = 18;
        for(let t of this.tokensPlayer1){
            t.setPosX(x);
            t.setPosY(y);
            t.draw();
            y = y+margin;
        }
        x = posX;
        y = 0;
        for(let t of this.tokensPlayer2){
            t.setPosX(x);
            t.setPosY(y);
            t.draw();
            y = y+margin;
        }
    }

    playGame(){
        let ficha = null;     
        this.ctx.canvas.addEventListener('mousedown', (e) => {
            this.mousedown = true; 
            for(let t of this.tokensPlayer2){
               if(t.isPointInside(e.layerX, e.layerY)){
                   ficha = t;
               }
            }
            //console.log(ficha);
        });
        
        this.ctx.canvas.addEventListener('mousemove', (e) => {
            if(this.mousedown == true && ficha != null){
                this.ctx.fillStyle = "rgb(255,255,255)";
                this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                ficha.setPosX(e.layerX - this.board.getSizeCell() / 2);
                ficha.setPosY(e.layerY - this.board.getSizeCell() / 2);
                this.board.draw();
                for(let t of this.tokensPlayer1){
                    t.draw();
                }
                for(let t of this.tokensPlayer2){
                    t.draw();
                }
                ficha.draw();
            }
        });

        this.ctx.canvas.addEventListener('mouseup', (e) => {
            this.mousedown = false;
            ficha = null;
        });
    }
}