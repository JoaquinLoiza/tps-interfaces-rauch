'use strict'

let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
let width = myCanvas.width;
let height = myCanvas.height;
let imageData = ctx.createImageData(width, height);
let inputFile = document.getElementById('inputFile');
let isMouseDown = false;
let isPencil = false;
let isRubber = false;
document.getElementById('pencil').addEventListener("click", drawPencil);
document.getElementById('rubber').addEventListener("click", drawRubber);
myCanvas.addEventListener('mousedown', () => { isMouseDown = true; });
myCanvas.addEventListener('mousemove', mouseMove);
myCanvas.addEventListener('mouseup', () => { isMouseDown = false;});

inputFile.onchange = cargarImg => {
    //Falta borrar el canvas al cargar una nueva imagen
    let imageUpload = cargarImg.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageUpload);
    reader.onload = r => {
        let image = new Image();
        image.src = r.target.result;
        image.onload = function () {
            let img = new ImageUpload(ctx, image);
            img.draw();
        }
    }
}

function mouseMove(e){
    if(isMouseDown && (isPencil || isRubber) ) {
        drawStroke(e.layerX, e.layerY);
    }
}

function drawStroke(x, y){
    let color = document.getElementById('color').value;
    let size = document.getElementById('inputSize').value;
    let point = new Tool(ctx, size);
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