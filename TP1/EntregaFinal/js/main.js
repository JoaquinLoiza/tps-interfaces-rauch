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
let isMouseDown = false;
let isPencil = false;
let isRubber = false;

let picker = document.getElementById('color');

myCanvas.addEventListener('mousedown', () => {
    isMouseDown = true;
});
myCanvas.addEventListener('mousemove', mouseMove);
myCanvas.addEventListener('mouseup', () => {
    isMouseDown = false;
});

function mouseMove(e){
    if(isMouseDown && (isPencil || isRubber) ) {
        drawStroke(e.layerX, e.layerY);
    }
}

function drawStroke(x, y){
    let color = picker.value;
    let point = new Tool(ctx, 4);
    if (isRubber) {
        point.setFill("rgba(255, 255, 255, 255)");
    }
    else {
        point.setFill(color);
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