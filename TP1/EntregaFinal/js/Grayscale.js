class Grayscale extends Filter {
    constructor(context, imagenData){
        super(context, imagenData);
    }

    apply() {
        let widthScale = (this.context.canvas.clientWidth / 2 - this.imagenData.width / 2);
        let heightScale = (this.context.canvas.clientHeight / 2 - this.imagenData.height / 2);
        let pixel, r, g, b, gray;

        for(let x = 0; x < this.imagenData.width; x++) {
            for(let y = 0; y < this.imagenData.height; y++) {
                pixel = super.getPixel(this.imagenData, x, y);
                r = pixel.r;
                g = pixel.g;
                b = pixel.b;
                gray = (r+g+b)/3;
                super.setPixel(this.imagenData, x, y, gray, gray, gray, pixel.a);
            }
        }
        this.context.putImageData(this.imagenData, widthScale, heightScale);
    }
}