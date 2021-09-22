class Brightness extends Hsv{
    constructor(context, imagenData, quantity){
        super(context, imagenData, quantity);
    }

    apply() {
        let widthScale = (this.context.canvas.clientWidth / 2 - this.imagenData.width / 2);
        let heightScale = (this.context.canvas.clientHeight / 2 - this.imagenData.height / 2);

        for(let x = 0; x < this.imagenData.width; x++) {
            for(let y = 0; y < this.imagenData.height; y++) {
                
                let pixel = super.getPixel(this.imagenData, x, y);
                let hsv = super.rgbToHsv(pixel.r, pixel.g, pixel.b);
                let hsvV = hsv.v + parseInt(this.quantity);
                let rgb = super.hsvToRgb(hsv.h, hsv.s, hsvV);

                super.setPixel(this.imagenData, x, y, rgb.r, rgb.g, rgb.b, pixel.a);
            }
        }
        this.context.putImageData(this.imagenData, widthScale, heightScale);
    }
}