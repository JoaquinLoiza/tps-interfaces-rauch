class Blur extends Filter{
    constructor(context, imagenData, copy){
        super(context, imagenData);
        this.copy = copy;
    }

    apply(){
        let nearsX, nearsY, sumR, sumG, sumB, d, pixel;
        for(let x = 0; x < this.imagenData.width; x++) {
            for(let y = 0; y < this.imagenData.height; y++) {
                nearsX = [x-1, x, x+1, x-1, x, x+1, x-1, x, x+1];
                nearsY = [y-1, y-1, y-1, y, y ,y, y+1, y+1, y+1];

                sumR = 0;
                sumG = 0;
                sumB = 0; 

                d = 0; 
                for(let i = 0; i<nearsX.length; i++){
                    if(!(nearsX[i]<0 || nearsY[i]<0 || nearsX[i]>this.imagenData.width-1 || nearsY[i]>this.imagenData.height-1)){
                        pixel = super.getPixel(this.imagenData, nearsX[i], nearsY[i]);
                        sumR += pixel.r;
                        sumG += pixel.g;
                        sumB += pixel.b;
                        d++;
                    }
                }
                super.setPixel(this.copy, x, y, sumR/d, sumG/d, sumB/d, 255);
            }
        }
        this.context.putImageData(this.copy, super.getPositionX(), super.getPositionY());
    }
}