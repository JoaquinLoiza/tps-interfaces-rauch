class GameToken {
    constructor(ctx, image, sizeToken){
        this.ctx = ctx;
        this.image = image;
        this.sizeToken = sizeToken;

    }

    getSizeToken(){
        return this.sizeToken;
    }

    draw(x, y){
        this.ctx.drawImage(this.image, x, y, this.sizeToken, this.sizeToken);
    }
}