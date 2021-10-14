class Game {
    constructor(ctx, board, tokensPlayer1, tokensPlayer2) {
        this.ctx = ctx;
        this.board = board; 
        this.tokensPlayer1 = tokensPlayer1;
        this.tokensPlayer2 = tokensPlayer2;
        this.player1 = 1;
        this.player2 = 2;
        this.plays = 1;
        this.winner = false;
        this.mousedown = false; 
        //this.time = time;
    }
    
    tokensDraw() {
        let widthContainerTokens = this.ctx.canvas.width /4;
        let heigthContainerTokens = this.ctx.canvas.height;
        let posX = widthContainerTokens*3; 
        let x, y;
        for(let t of this.tokensPlayer1){
            x = Math.random() * (widthContainerTokens - t.getSizeToken());
            y = Math.random() * (heigthContainerTokens - t.getSizeToken());
            t.setPosX(x);
            t.setPosY(y);
            t.draw();
        }
        for(let t of this.tokensPlayer2){
            x = Math.random() * (widthContainerTokens - t.getSizeToken());
            y = Math.random() * (heigthContainerTokens - t.getSizeToken());
            t.setPosX(posX+x);
            t.setPosY(y);
            t.draw();
        }
    }

    playGame(){
        let cells = this.board.getColumns() * this.board.getRows();
        this.tokensDraw();
        
        
        
        //while(this.plays != cells || this.winner !=true){
            this.moveToken(this.getTurn());
            
            //this.plays++;
        //} 
        
         //Si hay ganador volver todas las fichas inactivas para no poder seguir jugando.
         //Al reiniciar el juego volver al estado de activas.
        }
    
    moveToken(player) {
        let token = null;
        let column = null;
        let tokensPlayer;

        if(player == this.player1) {
            tokensPlayer = this.tokensPlayer1;
        } else {
            tokensPlayer = this.tokensPlayer2;
        }

        this.ctx.canvas.addEventListener('mousedown', (e) => {
            this.mousedown = true; 
            for(let t of tokensPlayer){
            //Contemplar que si la ficha ya está en la matriz no dejar seleccionarla.
               if(t.isPointInside(e.layerX, e.layerY)){
                   if(t.getActive() == true) {
                       token = t;
                   }
               }
            }
        });
        
        this.ctx.canvas.addEventListener('mousemove', (e) => {
            if(this.mousedown == true && token != null){
                this.clearCanvas();
                token.setPosX(e.layerX - this.board.getSizeCell() / 2);
                token.setPosY(e.layerY - this.board.getSizeCell() / 2);
                this.board.draw();
                for(let t of this.tokensPlayer1){
                    t.draw();
                }
                for(let t of this.tokensPlayer2){
                    t.draw();
                }
                
                //Verificar columna
                let width = this.ctx.canvas.width;
                let inicioX = width - (width/4)*3;
                let widthBoard = this.board.getColumns()*this.board.getSizeCell(); 
                let x1, x2;

                if(token.getPosX() > inicioX-25 && token.getPosX() < (inicioX-45)+widthBoard){
                    x1 = inicioX;
                    x2 = inicioX + this.board.getSizeCell();
                    for(let i=0; i < this.board.getColumns(); i++){
                        if(e.layerX > x1 && e.layerX < x2){
                            column = i;
                        }
                        x1 = x1 + this.board.getSizeCell();
                        x2 = x2 + this.board.getSizeCell();
                    }
                } else {
                    column = null;
                }
            }
        });

        this.ctx.canvas.addEventListener('mouseup', () => {
            this.mousedown = false;
            if(column != null && token != null){
                //Insertar ficha en Matriz
                this.dropToken(token, column);
            }
            token = null;
        });
    }

    dropToken(token, column) {
        let widthContainerTokens = this.ctx.canvas.width /4;
        let heigthContainerTokens = this.ctx.canvas.height;
        let lengthRow = this.board.getMatrix().length;
        let matrix = this.board.getMatrix();
        let posX = widthContainerTokens*3; 
        let x = Math.random() * (widthContainerTokens - token.getSizeToken());
        let y = Math.random() * (heigthContainerTokens - token.getSizeToken());
        //let x = 0, y = 0;
        let i = lengthRow-1;
        
        while(i>=0 && matrix[i][column].value!=0) {
            i--;
        }

        if (i>-1) {
            matrix[i][column].value = this.getTurn();
            token.setActive(false);
            x=matrix[i][column].posX;
            y=matrix[i][column].posY;
            token.setPosX(x);
            token.setPosY(y);
        } else {
            if(this.getTurn() == 1){
                token.setPosX(x);
                token.setPosY(y);
            } else {
                token.setPosX(x + posX);
                token.setPosY(y);
            }
        }
        
        //Dibujar ficha en su celda
        this.clearCanvas();
        this.board.draw();
        for(let t of this.tokensPlayer1){
            t.draw();
        }
        for(let t of this.tokensPlayer2){
            t.draw();
        }
    }

    getTurn() {
        if(this.plays%2 == 0) {	
            return this.player2;
        }
        else {
            return this.player1;
        }
    }

    clearCanvas() {
        this.ctx.fillStyle = "rgb(255,255,255)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}