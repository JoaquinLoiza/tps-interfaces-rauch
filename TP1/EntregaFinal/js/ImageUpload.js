class ImageUpload {

    constructor(context, image){
        this.context = context;
        this.img = image;
        this.width = image.width;
        this.height = image.height;
    }

    draw(){
        this.resize();
        this.context.drawImage(this.img, 0,0, this.width, this.height);
    }

    resize(){
        let wCanvas = this.context.canvas.clientWidth;
        let hCanvas = this.context.canvas.clientHeight;
        let aspectRatio =(Math.min((wCanvas / this.width), (hCanvas / this.height)));
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