class GameToken {
    constructor(ctx, idPlayer, image, sizeToken){
        this.ctx = ctx;
        this.idPlayer = idPlayer;
        this.image = image;
        this.sizeToken = sizeToken;
        this.posX = 0;
        this.posY = 0;
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY; 
    }

    setPosX(x){
        this.posX = x;
    }

    setPosY(y){
        this.posY = y;
    }

    getIdPlayer(){
        return this.idPlayer;
    }

    getSizeToken(){
        return this.sizeToken;
    }

    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.sizeToken, this.sizeToken);
    }
    
    isPointInside(x, y){
        let p_x = this.getPosX - x;
        let p_y = this.getPosY - y;
        console.log(this.image.width);
        console.log(this.image.width/2);
        return Math.sqrt(p_x * p_x + p_y * p_y)<this.image.width/2;
    }
}