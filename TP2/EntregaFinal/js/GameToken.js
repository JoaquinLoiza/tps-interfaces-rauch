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
        return !(x<this.posX || x > this.posX + this.sizeToken || 
                y < this.posY || y>this.posY + this.sizeToken);
    }
}