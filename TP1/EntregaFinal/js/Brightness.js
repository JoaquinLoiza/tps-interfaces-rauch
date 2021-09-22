class Brightness extends Hsv{
    constructor(context, imagenData, value){
        super(context, imagenData);
        this.value = value;
    }

    apply() {
        let widthScale = (this.context.canvas.clientWidth / 2 - this.imagenData.width / 2);
        let heightScale = (this.context.canvas.clientHeight / 2 - this.imagenData.height / 2);

        for(let x = 0; x < this.imagenData.width; x++) {
            for(let y = 0; y < this.imagenData.height; y++) {
                
                let pixel = super.getPixel(this.imagenData, x, y);
                let hsv = super.rgbToHsv(pixel.r, pixel.g, pixel.b);
                let rgb = super.hsvToRgb(hsv.h, hsv.s, hsv.v + 80);

                super.setPixel(this.imagenData, x, y, rgb.r, rgb.g, rgb.b, pixel.a);
            }
        }
        this.context.putImageData(this.imagenData, widthScale, heightScale);
    }
}