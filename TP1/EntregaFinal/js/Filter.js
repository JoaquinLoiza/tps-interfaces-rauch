class Filter {
    constructor(context, imagenData) {
        this.context = context;
        this.imagenData = imagenData;
    }

    getPixel(imagenData, x, y){
        let index = (x + y * imagenData.width) * 4;

        let pixel = {
            r : imagenData.data[index + 0],
            g : imagenData.data[index + 1],
            b : imagenData.data[index + 2],
            a : imagenData.data[index + 3]
        }

        return pixel;
    }

    setPixel(imagenData,x, y, r, g, b, a){
        let index = (x + y * imagenData.width) * 4;
        imagenData.data[index + 0] = r;
        imagenData.data[index + 1] = g;
        imagenData.data[index + 2] = b;
        imagenData.data[index + 3] = a;
    }
}