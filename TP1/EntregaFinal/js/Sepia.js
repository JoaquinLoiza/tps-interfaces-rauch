class Sepia extends Filter {
    constructor(context, imagenData) {
        super(context, imagenData);
    }

    apply() {
        let widthScale = (this.context.canvas.clientWidth / 2 - this.imagenData.width / 2);
        let heightScale = (this.context.canvas.clientHeight / 2 - this.imagenData.height / 2);
        let pixel, r, g, b, rSep, gSep, bSep;

        for(let x = 0; x < this.imagenData.width; x++) {
            for(let y = 0; y < this.imagenData.height; y++) {
                pixel = super.getPixel(this.imagenData, x, y);
                r = pixel.r;
                g = pixel.g;
                b = pixel.b;
                rSep = ( (r * 0.393) + (g * 0.769) + (b* 0.189) );
                gSep = ( (r * 0.349) + (g * 0.686) + (b* 0.168) );
                bSep = ( (r * 0.272) + (g * 0.534) + (b* 0.131) );
                super.setPixel(this.imagenData, x, y, rSep, gSep, bSep, pixel.a);
            }
        }
        this.context.putImageData(this.imagenData, widthScale, heightScale);
    }
}