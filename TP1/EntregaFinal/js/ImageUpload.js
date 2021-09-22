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

    draw(){
        this.resize();
        const x = this.context.canvas.clientWidth / 2 - this.width / 2;
        const y = this.context.canvas.clientHeight / 2 - this.height / 2;
        this.context.drawImage(this.img, x,y, this.width, this.height);
        //this.context.drawImage(this.img, 0,0, this.width, this.height);
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