class Tool {
    constructor(context, radius) {
        this.context = context;
        this.radius = radius;
        this.fill = 'black';
    }

    setFill(fill){
        this.fill = fill;
    }

    setSize(radius){
        this.radius = radius;
    }

    draw(x1, y1, x2, y2){
        this.context.beginPath();
        this.context.lineCap = 'round';
        this.context.strokeStyle = this.fill;
        this.context.lineWidth = this.radius;
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
        this.context.closePath();
    }
}