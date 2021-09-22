class ImageUpload {

    constructor(context, image){
        this.context = context;
        this.img = image;
        this.width = image.width;
        this.height = image.height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getPositionX() {
       return (this.context.canvas.clientWidth / 2 - this.width / 2);
    }

    getPositionY() {
        return (this.context.canvas.clientHeight / 2 - this.height / 2);
    }

    draw(){
        this.resize();
        let x = (this.context.canvas.clientWidth / 2 - this.width / 2);
        let y = (this.context.canvas.clientHeight / 2 - this.height / 2);
        this.context.drawImage(this.img, x, y, this.width, this.height);
    }

    resize(){
        const wCanvas = this.context.canvas.clientWidth;
        const hCanvas = this.context.canvas.clientHeight;
        const aspectRatio =(Math.min((wCanvas / this.width), (hCanvas / this.height)));
        this.setWidth(this.width * aspectRatio);
        this.setHeight(this.height * aspectRatio);
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }
}