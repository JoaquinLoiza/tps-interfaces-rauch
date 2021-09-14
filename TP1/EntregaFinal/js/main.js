'use strict'

let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
let width = myCanvas.width;
let height = myCanvas.height;
let imageData = ctx.createImageData(width, height);
let btnPencil = document.getElementById('pencil');
//btnPencil.addEventListener("click", drawPencil);

let isMouseDown = false;
let stroke = [];

myCanvas.addEventListener('mousedown', () => {
    isMouseDown = true;
});
myCanvas.addEventListener('mousemove', (e) => {
    if(isMouseDown) {
        drawStroke(e.layerX, e.layerY);
    }
});
myCanvas.addEventListener('mouseup', () => {
    isMouseDown = false;
});


function drawStroke(x, y){
    let point = new Tool(ctx, 4, "rgba(128,0,34,255)");
    stroke.push(point);
    for(let i = 0; i < stroke.length; i++) {
        stroke[i].draw(x, y);
    }
}

