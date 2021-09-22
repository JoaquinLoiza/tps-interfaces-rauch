class Negative extends Filter {
    constructor(context, imagenData){
        super(context, imagenData);
    }

    apply() {
        let widthScale = (this.context.canvas.clientWidth / 2 - this.imagenData.width / 2);
        let heightScale = (this.context.canvas.clientHeight / 2 - this.imagenData.height / 2);
        let pixel, r, g, b;

        for(let x = 0; x < this.imagenData.width; x++) {
            for(let y = 0; y < this.imagenData.height; y++) {
                pixel = super.getPixel(this.imagenData, x, y);
                r = 255 - pixel.r;
                g = 255 - pixel.g;
                b = 255 - pixel.b;
                super.setPixel(this.imagenData, x, y, r, g, b, pixel.a);
            }
        }
        this.context.putImageData(this.imagenData, widthScale, heightScale);
    }
}