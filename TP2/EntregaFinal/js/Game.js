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
                
                //Verificar columna
                let width = this.ctx.canvas.width;
                let inicioX = width - (width/4)*3;
                let anchoTablero = this.board.getColumns()*this.board.getSizeCell();
                let altoTablero = this.board.getRows()*this.board.getSizeCell() - this.board.getSizeCell(); 
            
                let x1, x2;
                if(ficha.getPosX() > inicioX && ficha.getPosX() < inicioX+anchoTablero){
                    console.log("estoy adentro del tablero");
                    x1 = inicioX;
                    x2 = inicioX + this.board.getSizeCell();

                    for(let i=1; i<=this.board.getColumns(); i++){
                        if(e.layerX > x1 && e.layerX < x2){
                        console.log("estoy en celda "+ i);
                            ficha.getPosX(x1);
                            ficha.setPosY(altoTablero);
                        }
                        x1 = x1 + this.board.getSizeCell();
                        x2 = x2 + this.board.getSizeCell();
                    }
                }
            }
        });

        this.ctx.canvas.addEventListener('mouseup', (e) => {
            this.mousedown = false;
            ficha = null;
        });
    }
}