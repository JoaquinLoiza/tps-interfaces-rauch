'use strict'

let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
let width = myCanvas.width;
let height = myCanvas.height;
let imageData = ctx.createImageData(width, height);
let btnPencil = document.getElementById('pencil');
btnPencil.addEventListener("click", drawPencil);
let btnRubber = document.getElementById('rubber');
btnRubber.addEventListener("click", drawRubber);
let color = "rgba(0,0,0,255)";
let isMouseDown = false;
let stroke = [];
let isPencil = false;
let isRubber = false;

myCanvas.addEventListener('mousedown', () => {
    isMouseDown = true;
});
myCanvas.addEventListener('mousemove', mouseMove);
myCanvas.addEventListener('mouseup', () => {
    isMouseDown = false;
});

function mouseMove(e, color){
    if(isMouseDown && (isPencil || isRubber) ) {
        drawStroke(e.layerX, e.layerY, color);
    }
}

function drawStroke(x, y, color){
    let point = new Tool(ctx, 4, color);
    
    if (isRubber) {
        point.setFill("rgba(255, 255, 255, 255)");
    }

    point.draw(x, y);
}

function drawPencil(){
    isPencil = true;
    isRubber = false;
}

function drawRubber(){
    isPencil = false;
    isRubber = true;
}

