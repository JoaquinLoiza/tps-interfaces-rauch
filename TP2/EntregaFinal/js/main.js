let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
//Ancho de la seccion donde se encuentran las fichas. 
//Esta medida nos sirve de referencia para ajustar el canvas en los distintos tipos de juego
let widthContainerTokens = myCanvas.width /4;
//calculamos la medida justa de cada celda para ajustar el tablero al centro del canvas
let sizeCell = (widthContainerTokens*2)/7; 
//Se ajusta el alto del canvas segun el tablero
myCanvas.height = sizeCell * 6;
document.getElementById("btnInitGame").addEventListener("click", initGame);

//Juego
let game;

//Tablero
let board;

// Celdas
let imageCell = new Image();
imageCell.src = "images/celda.png";
imageCell.onload = function () {
    board = new Board(ctx, imageCell, sizeCell);
    board.draw();
}

//Dibuja el tablero (por defecto 4 en linea) al cargar la pagina
function initGame(){
    //Fichas
    let tokensPlayer1; //array de GameToken
    let tokensPlayer2; //array de GameToken

    let tokensJson = defineTokensForEachPlayer();
    //Imagenes de diferentes tipos de fichas
    let imageToken1 = new Image();
    imageToken1.src = tokensJson.p1; 

    let imageToken2 = new Image();
    imageToken2.src = tokensJson.p2;

    let valueSelect = document.getElementById("selectGames").value;

    if(valueSelect == 4){
        sizeCell = (widthContainerTokens*2)/7;
        myCanvas.height = sizeCell*6;
        board.setColumns(7);
        board.setRows(6);
        board.setSizeCell(sizeCell);
        board.draw();

        imageToken1.onload = function() {
            tokensPlayer1 = createTokens(imageToken1, 21, 1);
            imageToken2.onload = function() {
                tokensPlayer2 = createTokens(imageToken2, 21, 2);
                game = new Game(ctx, board, tokensPlayer1, tokensPlayer2);
                game.tokensDraw();
                game.playGame();
            }
        }
        
    }
    else if (valueSelect == 5){
        sizeCell = (widthContainerTokens*2)/8;
        myCanvas.height = sizeCell*7;
        board.setColumns(8);
        board.setRows(7);
        board.setSizeCell(sizeCell);
        board.draw();
    }
    else if (valueSelect == 6){
        sizeCell = (widthContainerTokens*2)/9;
        myCanvas.height = sizeCell*8;
        board.setColumns(9);
        board.setRows(8);
        board.setSizeCell(sizeCell);
        board.draw();
    }
}

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
    //other cases ........
}

function createTokens(imageToken, quantity, id){
    let array = new Array();
   for(let i = 0; i<quantity; i++){
        token = new GameToken(ctx, id, imageToken, sizeCell);
        array.push(token);
    }
    return array;
}