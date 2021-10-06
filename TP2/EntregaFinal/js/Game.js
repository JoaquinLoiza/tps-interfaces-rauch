class Game {
    constructor(ctx, board, tokensPlayer1, tokensPlayer2) {
        this.ctx = ctx;
        this.board = board; 
        this.tokensPlayer1 = tokensPlayer1;
        this.tokensPlayer2 = tokensPlayer2;
        //this.time = time;
        this.player1 = 1;
        this.player2 = 2;
    }

    tokensDraw() {
        let widthContainerTokens = this.ctx.canvas.width /4;
        let posX = widthContainerTokens*3; 
        let x = 0;
        let y = 0;
        let margin = 18;
        for(let t of this.tokensPlayer1){
            t.draw(x, y);
            y = y+margin;
        }
        x = posX;
        y = 0;
        for(let t of this.tokensPlayer2){
            t.draw(x, y);
            y = y+margin;
        } 
    }
}