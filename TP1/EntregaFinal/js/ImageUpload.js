class ImageUpload {

    constructor(context, image){
        this.context = context;
        this.img = image;
        this.width = image.width;
        this.height = image.height;
    }

    draw(){
        this.context.drawImage(this.img, 0,0);
    }

}