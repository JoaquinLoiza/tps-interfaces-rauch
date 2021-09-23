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
let applyB = document.getElementById("brightness");
let applyS = document.getElementById("inputSat");
let x = 0;
let y= 0; 
let r = myCanvas.getBoundingClientRect();

applyB.addEventListener("change", alterBrightness);
applyS.addEventListener("change", alterSaturation);
document.getElementById('btnSepia').addEventListener("click", applySepia);
document.getElementById('btnGrayscale').addEventListener("click", applyGrayscale);
document.getElementById('btnNegative').addEventListener("click", applyNegative);
document.getElementById('btnBinarization').addEventListener("click", applyBinarization);
document.getElementById('pencil').addEventListener("click", drawPencil);
document.getElementById('rubber').addEventListener("click", drawRubber);
myCanvas.addEventListener('mousedown', (e) => {
    if(isPencil || isRubber){
        x = e.clientX - r.left;
        y = e.clientY - r.top;
        isMouseDown = true;
    }

});
myCanvas.addEventListener('mousemove', mouseMove);
myCanvas.addEventListener('mouseup', (e) => { 
    if (isMouseDown === true){
        drawStroke(x, y, e.clientX - r.left, e.clientY - r.top);
        x = 0;
        y = 0;
        isMouseDown = false;
    }
});
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
        drawStroke(x, y, e.clientX - r.left, e.clientY - r.top);
        x = e.clientX - r.left;
        y = e.clientY - r.top;
    }
}

function drawStroke(x1, y1, x2, y2){
    let color = document.getElementById('color').value;
    let size = document.getElementById('inputSize').value;
    let point = new Tool(ctx, size);
    if (isRubber) {
        point.setFill("rgba(255, 255, 255, 255)");
    }
    else {
        point.setFill(color);
    }
    point.draw(x1, y1, x2, y2);
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
    imageU = null;
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

function alterBrightness(){
    if(imageU != undefined){
        imageU.draw();
        let value = applyB.value;
        let imagenData = ctx.getImageData(imageU.getPositionX(), imageU.getPositionY(), imageU.getWidth(), imageU.getHeight());
        let b = new Brightness(ctx, imagenData, value);
        b.apply();
    }
}

function alterSaturation() {
    if(imageU != undefined){
        imageU.draw();
        let value = applyS.value;
        let imagenData = ctx.getImageData(imageU.getPositionX(), imageU.getPositionY(), imageU.getWidth(), imageU.getHeight());
        let b = new Saturation(ctx, imagenData, value);
        b.apply();
    }
}

function applySepia() {
    if(imageU != undefined){
        imageU.draw();
        let imagenData = ctx.getImageData(imageU.getPositionX(), imageU.getPositionY(), imageU.getWidth(), imageU.getHeight());
        let b = new Sepia(ctx, imagenData);
        b.apply();
    } 
}

function applyGrayscale(){
    if(imageU != undefined){
        imageU.draw();
        let imagenData = ctx.getImageData(imageU.getPositionX(), imageU.getPositionY(), imageU.getWidth(), imageU.getHeight());
        let b = new Grayscale(ctx, imagenData);
        b.apply();
    } 
}

function applyNegative(){
    if(imageU != undefined){
        imageU.draw();
        let imagenData = ctx.getImageData(imageU.getPositionX(), imageU.getPositionY(), imageU.getWidth(), imageU.getHeight());
        let b = new Negative(ctx, imagenData);
        b.apply();
    }
}

function applyBinarization(){
    if(imageU != undefined){
        imageU.draw();
        let imagenData = ctx.getImageData(imageU.getPositionX(), imageU.getPositionY(), imageU.getWidth(), imageU.getHeight());
        let b = new Binarization(ctx, imagenData);
        b.apply();
    }
}