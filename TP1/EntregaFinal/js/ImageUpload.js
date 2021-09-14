class ImageUpload {
    contructor(src){
        this.src = src;
        this.width = src.width;
        this.height = src.height;
    }

    setWidth(width){
        this.width = width;
    }

    setHeight(height){
        this.height = height;
    }
}