'use strict'

let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
let width = myCanvas.width;
let height = myCanvas.height;
let imageU;
let imageData = ctx.createImageData(width, height);
let inputFile = document.getElementById('inputFile');
let dialog = document.querySelector('.containerDialog');
let isMouseDown = false;
let isPencil = false;
let isRubber = false;

document.getElementById('pencil').addEventListener("click", drawPencil);
document.getElementById('rubber').addEventListener("click", drawRubber);
myCanvas.addEventListener('mousedown', () => { isMouseDown = true; });
myCanvas.addEventListener('mousemove', mouseMove);
myCanvas.addEventListener('mouseup', () => { isMouseDown = false;});
document.getElementById('clear').addEventListener("click", clearCanvas);
document.getElementById('save').addEventListener("click", saveImage);
document.getElementById('blankCanvas').addEventListener("click", () => { 
    dialog.classList.toggle("dialogHidden"); });
document.getElementById('uploadImage').addEventListener("click", () => { 
    inputFile.click(); dialog.classList.toggle("dialogHidden"); });

inputFile.onchange = cargarImg => {
    let imageUpload = cargarImg.target.files[0];
    if(imageUpload != undefined) {
        let reader = new FileReader();
        reader.readAsDataURL(imageUpload);
        reader.onload = r => {
            let image = new Image();
            image.src = r.target.result;
            image.onload = function () {
                clearCanvas();
                imageU = new ImageUpload(ctx, image);
                imageU.draw();
            }
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

function clearCanvas(){
    ctx.clearRect(0, 0, width, height);
}

function saveImage(){
    let link = document.createElement('a');
    let filename = prompt("Guardar como...","");
    link.href = myCanvas.toDataURL("image/png");
    link.download = filename;
    if(filename != null){
        link.click();
    }
}

let aplicar = document.getElementById("apply");
aplicar.addEventListener("click", aplicarFiltro);

function aplicarFiltro (){
    if(imageU != undefined){
        imageU.draw();
        let value = document.getElementById("brightness").value;
        let imagenData = ctx.getImageData(0, 0, imageU.getWidth() , imageU.getHeight());
        let b = new Brightness(ctx, imagenData, value);
        b.apply();
    }
}