class GameToken {
    constructor(ctx, idPlayer, image, sizeToken){
        this.ctx = ctx;
        this.idPlayer = idPlayer;
        this.image = image;
        this.sizeToken = sizeToken;
        this.posX = 0;
        this.posY = 0;
        this.active = true;
    }
    //devuleve pos de X
    getPosX(){
        return this.posX;
    }
    //devuelve pos de Y
    getPosY(){
        return this.posY; 
    }
    //setea pos de X
    setPosX(x){
        this.posX = x;
    }
    //setea pos de Y
    setPosY(y){
        this.posY = y;
    }
    //devuelve id del jugador
    getIdPlayer(){
        return this.idPlayer;
    }
    //devuelve tamaño de celda
    getSizeToken(){
        return this.sizeToken;
    }
    //devuelve estado de la ficha
    getActive() {
        return this.active;
    }
    //setea la actividad
    setActive(state) {
        this.active = state;
    }
    //dibuja la ficha
    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.sizeToken, this.sizeToken);
    }
    //funcion para verficar si estamos adentro de una ficha
    isPointInside(x, y){
        return !(x<this.posX || x > this.posX + this.sizeToken || 
                y < this.posY || y>this.posY + this.sizeToken);
    }
}