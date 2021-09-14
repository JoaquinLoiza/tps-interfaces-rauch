class Tool {
    constructor(context, radius, fill) {
        this.context = context;
        this.radius = radius;
        this.fill = fill;
    }

    setFill(fill){
        this.fill = fill;
    }

    setSize(radius){
        this.radius = radius;
    }

    draw(x, y){
        this.context.fillStyle = this.fill;
        this.context.beginPath();
        this.context.arc(x, y, this.radius, 0, 2*Math.PI);
        this.context.fill();
        this.context.closePath(); 
    }
}