let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
let widthContainerTokens = myCanvas.width /4; //Ancho de la seccion donde se encuentran las fichas. Esta medida nos sirve de referencia para ajustar el canvas en los distintos tipos de juego.
let sizeCell = (widthContainerTokens*2)/7; //calculamos la medida justa de cada celda para ajustar el tablero al centro del canvas
myCanvas.height = sizeCell * 6; //se ajusta el alto del canvas segun el tablero
let game = null; 
let board = null;
let imageCell = new Image(); //imagen de la celda del tablero

//FICHAS PARA CADA JUGADOR
let tokensPlayer1; 
let tokensPlayer2; 

let imageToken1 = new Image();
let imageToken2 = new Image();

//BOTONES
let btnInitGame = document.getElementById("btnInitGame");
let btnResetGame = document.getElementById("btnResetGame");

//EVENTOS
btnResetGame.addEventListener("click", resetGame);
btnInitGame.addEventListener("click", initGame);
myCanvas.addEventListener('mousedown', mouseDown, false);

//CARGAR IMAGENES
imageCell.src = "images/celda.png";
imageCell.onload = function () { // una vez cargada la imagen, se dibuja el tablero
    board = new Board(ctx, imageCell, sizeCell, 7, 6);
    board.draw();
}

//TIMMER
let time = document.getElementById("timer");


//FUNCION PARA DEFINIR EL TIPO DE FICHA PARA CADA JUGADOR
function defineTokensForEachPlayer(){
    let typeToken = document.getElementById("selectToken").value;
    
    if(typeToken == 1){
        return {
            p1: "images/ficha1.png",
            p2: "images/ficha2.png"
        }
    } else if (typeToken == 2){
        return {
            p1: "images/ficha3.png",
            p2: "images/ficha4.png"
        }
    }
}

//FUNCION PARA CREAR LAS FICHAS PARA CADA JUGADOR
function createTokens(imageToken, quantity, id){
    let array = new Array();
   for(let i = 0; i<quantity; i++){
        token = new GameToken(ctx, id, imageToken, sizeCell);
        array.push(token);
    }
    return array;
}

//FUNCION PARA DIBUJAR EL TABLERO Y DAR INICIO AL JUEGO, POR DEFECTO EL 4 EN LINEA
function initGame(){
    timmer(time.value);
    let tokensJson = defineTokensForEachPlayer();
    //Imagenes de diferentes tipos de fichas
    imageToken1.src = tokensJson.p1; 
    imageToken2.src = tokensJson.p2;

    let valueSelect = document.getElementById("selectGames").value;

    btnResetGame.disabled = false;

    //SI EL USURIO SELECCIONA 4 EN LINEA
    if(valueSelect == 4){
        sizeCell = (widthContainerTokens*2)/7;
        myCanvas.height = sizeCell*6;
        newGame(7, 6, sizeCell, 7*6/2, 4);
    }
    else if (valueSelect == 5){
        sizeCell = (widthContainerTokens*2)/8;
        myCanvas.height = sizeCell*7;
        console.log("es el juego 5 en linea");
        console.log("columnas 8 y filas 7")
        newGame(8, 7, sizeCell, 8*7/2, 5);
    }
    else if (valueSelect == 6){
        sizeCell = (widthContainerTokens*2)/9;
        myCanvas.height = sizeCell*8;
        newGame(9, 8, sizeCell, 9*8/2, 6);
    }
}

//Funcion la configuracion de tablero seleccionado
function newGame(columns, rows, sizeCell, sumTokensPlayer, typeGame){
    board.setColumns(columns);
    board.setRows(rows);
    board.setSizeCell(sizeCell);
    board.setMatrix();

    imageToken1.onload = function() {
        tokensPlayer1 = createTokens(imageToken1, sumTokensPlayer, 1);
        imageToken2.onload = function() {
            tokensPlayer2 = createTokens(imageToken2, sumTokensPlayer, 2);
            game = new Game(ctx, board, tokensPlayer1, tokensPlayer2, typeGame);
            game.playGame();
            btnInitGame.disabled = true;
        }
    }

}

//FUNCION PARA CHEQUEAR SI ESTOY DENTRO DE UNA FICHA ASI PODER MOVERLA
function mouseDown(e) {
    game.selectToken(e);
    myCanvas.addEventListener('mousemove', mouseMove, false);
    myCanvas.addEventListener('mouseup', mouseUp, false);
    
}

//FUNCION PARA PODER MOVER UNA FICHA DENTRO DEL TABLERO
function mouseMove(e) {
    game.moveToken(e);
}

//FUNCION PARA SOLTAR LA FICHA DENTRO DEL TABLERO
function mouseUp() {
    game.dropToken();
    timmer(time.value);
}

//FUNCION PARA REINICIAR EL JUEGO
function resetGame(){
    game.resetValues();
    game.clearCanvas();
    board.draw();
    game.playGame();
}

//TIMMER POR JUGADA
let raton = null;
let timmer = function (time){
    clearTimeout(raton);
    raton = setTimeout(function(){
        alert("perdiste!! se termino tu tiempo");
        location.reload();
    }, time);
};