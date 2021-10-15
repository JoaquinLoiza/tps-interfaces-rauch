class Game {
    constructor(ctx, board, tokensPlayer1, tokensPlayer2, game) {
        this.ctx = ctx;
        this.board = board; 
        this.tokensPlayer1 = tokensPlayer1;
        this.tokensPlayer2 = tokensPlayer2;
        this.game = game;
        this.player1 = 1;
        this.player2 = 2;
        this.plays = 1;
        this.winner = false;
        this.mousedown = false; 
        this.token = null;
        this.columnSelect = null;
        this.gameStarted = false;
        this.notification = document.getElementById("notificationEvents");
    }
    // funcion para setear el numero de jugada
    setPlays(n) {
        this.plays = this.plays + n;
    }

    // funcion que dibuja las fichas de cada jugador
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

    // funcion que da inicio al juego
    playGame(){
        this.tokensDraw();
        this.gameStarted = true;
        this.notification.innerHTML = `El juego ha comenzado! es turno del jugador ${this.getTurn()}`;
    }

    // funcion para detectar si estoy dentro de ficha y poder moverla
    selectToken(e){
        this.mousedown = true;
        let tokensPlayer = null;

        if(this.gameStarted) {
        //definimos el turno del jugador
            if(this.getTurn() == 1) {
                tokensPlayer = this.tokensPlayer1;
            } else {
                tokensPlayer = this.tokensPlayer2;
            }

        //contemplamos si esta el mouse dentro de una ficha, para luego moverla
            for(let t of tokensPlayer){
                if(t.isPointInside(e.layerX, e.layerY)){
                    if(t.getActive() == true) {
                        this.token = t;
                    }
                }
            }
        }
    }

    //funcion para mover una ficha dentro del tablero
    moveToken(e) {
        if(this.mousedown == true && this.token != null){
            this.clearCanvas();
            //Se setea los valores de x e y. 
            this.token.setPosX(e.layerX - this.board.getSizeCell() / 2);
            this.token.setPosY(e.layerY - this.board.getSizeCell() / 2);
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
    
            if(this.token.getPosX() > inicioX-25 && this.token.getPosX() < (inicioX-45)+widthBoard){
                x1 = inicioX;
                x2 = inicioX + this.board.getSizeCell();
                for(let i=0; i < this.board.getColumns(); i++){
                    if(e.layerX > x1 && e.layerX < x2){
                        this.columnSelect = i;
                    }
                    x1 = x1 + this.board.getSizeCell();
                    x2 = x2 + this.board.getSizeCell();
                }
            } else {
                this.columnSelect = null;
            }
        }
    }

    //funcion para soltar la ficha dentro del tablero
    dropToken(){
        this.mousedown = false;
        let dropToken = false;
        if(this.columnSelect != null && this.token != null){
        //Se tira la ficha 
        dropToken = this.dropTokenInColumn();
        //Si la ficha se ubico correctamente...
            if(dropToken){
                this.checkWinner();
                if(this.winner != true){
                    this.setPlays(1);
                    this.notification.innerHTML = "Es turno del jugador "+this.getTurn();
                } else {
                    this.notification.innerHTML = "Ganó el jugador "+this.getTurn();
                    this.deactivateTokens();
                }
            }
        }
        this.token = null;
        this.columnSelect = null;
    }

    // funcion para desactivar las fichas cuando hay un ganador
    deactivateTokens() {
        for(let t of this.tokensPlayer1){
            t.setActive(false);
        }
        for(let t of this.tokensPlayer2){
            t.setActive(false);
        }
    }

    // funcion para volver a cargar la matriz con ceros y volver a activar las fichas para una nueva partida
    resetValues() {
        let matrix = this.board.getMatrix();

        for(let t of this.tokensPlayer1){
            t.setActive(true);
        }
        for(let t of this.tokensPlayer2){
            t.setActive(true);
        }

        //Vaciar matriz
        for(let row of matrix) {
            for(let element of row) {
                element.value = 0;
            }
        }
    }

    // funcion para soltar una ficha y que se coloque en una columna correctamente
    dropTokenInColumn() {
        let widthContainerTokens = this.ctx.canvas.width /4;
        let heigthContainerTokens = this.ctx.canvas.height;
        let lengthRow = this.board.getMatrix().length;
        let matrix = this.board.getMatrix();
        let posX = widthContainerTokens*3; 
        let x = Math.random() * (widthContainerTokens - this.token.getSizeToken());
        let y = Math.random() * (heigthContainerTokens - this.token.getSizeToken());
        let dropToken = false;
        let i = lengthRow-1;
        
        while(i>=0 && matrix[i][this.columnSelect].value!=0) {
            i--;
        }

        if (i>-1) {
            matrix[i][this.columnSelect].value = this.getTurn();
            this.token.setActive(false);
            dropToken = true;
            x=matrix[i][this.columnSelect].posX;
            y=matrix[i][this.columnSelect].posY;
            this.token.setPosX(x);
            this.token.setPosY(y);
        } else {
            if(this.getTurn() == 1){
                this.token.setPosX(x);
                this.token.setPosY(y);
            } else {
                this.token.setPosX(x + posX);
                this.token.setPosY(y);
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
        return dropToken;
    }

    // funcion que nos indica a que jugador le toca jugar
    getTurn() {
        if(this.plays%2 == 0) {	
            return this.player2;
        }
        else {
            return this.player1;
        }
    }

    // funcion para saber si hay un ganador, cuando el juegador suelta la ficha 
    checkWinner(){
        if(this.verifyVertically() || this.verifyHorizontally() || this.verifyDiagonalRigth() || this.verifyDiagonalLeft()){
            this.winner = true;
        }
    }

    // funcion que verifica si hay 4/5/6 en linea verticalmente
    verifyVertically(){
        let lengthRow = this.board.getRows();
        let lengthCol = this.board.getColumns();
        let matrix = this.board.getMatrix();
        let countP1 = 1;
        let countP2 = 1;
        let winner = false;

        for(let c = lengthCol -1; c > -1; c--){
            for(let r = lengthRow -1; r > -1; r--){
                if(r-1 != -1 && (matrix[r][c].value == 1) && (matrix[r][c].value == matrix[r-1][c].value)){
                    countP1++;
                }
                if(r-1 != -1 && (matrix[r][c].value == 2) && (matrix[r][c].value == matrix[r-1][c].value)){
                    countP2++;
                }
            }

            if(countP1 != this.game) {
                countP1 = 1;
            } else {
                winner = true;
            }

            if(countP2 != this.game) {
                countP2 = 1;
            } else {
                winner = true;
            }
        }

        return winner;
    }

    // funcion que verifica si hay 4/5/6 en linea horizontalmente
    verifyHorizontally() {
        let lengthRow = this.board.getRows();
        let lengthCol = this.board.getColumns();
        let matrix = this.board.getMatrix();
        let countP1 = 1;
        let countP2 = 1;
        let winner = false;

        for(let r = lengthRow -1; r > -1; r--){
            for(let c = lengthCol -1; c > -1; c--){
                if(c-1 != -1 && (matrix[r][c].value == 1) && (matrix[r][c].value == matrix[r][c-1].value)){
                    countP1++;
                }
                if(c-1 != -1 && (matrix[r][c].value == 2) && (matrix[r][c].value == matrix[r][c-1].value)){
                    countP2++;
                }
            }

            if(countP1 != this.game) {
                countP1 = 1;
            } else {
                winner = true;
            }

            if(countP2 != this.game) {
                countP2 = 1;
            } else {
                winner = true;
            }
        }

        return winner;
    }

    // funcion que verifica si hay 4/5/6 en linea en diagonal a la derecha
    verifyDiagonalRigth() {
        let lengthRow = this.board.getRows();
        let lengthCol = this.board.getColumns();
        let matrix = this.board.getMatrix();
        let countP1 = 1;
        let countP2 = 1;
        let winner = false;
        let row, col;

        for(let r = 0; r < lengthRow; r++){
            for(let c = 0; c < lengthCol; c++){
                row = r;
                col = c;
                while(row < lengthRow && col < lengthCol){
                    if((row+1 != lengthRow &&  col+1 != lengthCol) && matrix[row][col].value == 1 && matrix[row][col].value == matrix[row+1][col+1].value){
                        countP1++;
                    }
                    if((row+1 != lengthRow &&  col+1 != lengthCol) && matrix[row][col].value == 2 && matrix[row][col].value == matrix[row+1][col+1].value){
                        countP2++;
                    }
                    row++;
                    col++;
                }

                if(countP1 != this.game) {
                    countP1 = 1;
                } else {
                    winner = true;
                }
    
                if(countP2 != this.game) {
                    countP2 = 1;
                } else {
                    winner = true;
                }
            }
        }    

        return winner;
    }

    // funcion que verifica si hay 4/5/6 en linea en diagonal a la izquierda
    verifyDiagonalLeft() {
        let lengthRow = this.board.getRows();
        let lengthCol = this.board.getColumns();
        let matrix = this.board.getMatrix();
        let countP1 = 1;
        let countP2 = 1;
        let winner = false;
        let row, col;

        for(let r = 0; r < lengthRow; r++){
            for(let c = lengthCol -1; c > -1; c--){
                row = r;
                col = c;
                while(row < lengthRow && col > -1){
                    if((row+1 != lengthRow &&  col-1 != -1) && matrix[row][col].value == 1 && matrix[row][col].value == matrix[row+1][col-1].value){
                        countP1++;
                    }
                    if((row+1 != lengthRow &&  col-1 != -1) && matrix[row][col].value == 2 && matrix[row][col].value == matrix[row+1][col-1].value){
                        countP2++;
                    }
                    row++;
                    col--;
                }

                if(countP1 != this.game) {
                    countP1 = 1;
                } else {
                    winner = true;
                }
    
                if(countP2 != this.game) {
                    countP2 = 1;
                } else {
                    winner = true;
                }
            }
        }    

        return winner;
    }

    // funcion para borrar todo el canvas
    clearCanvas() {
        this.ctx.fillStyle = "rgb(255,255,255)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}