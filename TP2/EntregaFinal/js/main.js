let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
//Ancho de la seccion donde se encuentran las fichas. 
//Esta medida nos sirve de referencia para ajustar el canvas en los distintos tipos de juego
let widthContainerTokens = myCanvas.width /4;
//calculamos la medida justa de cada celda para ajustar el tablero al centro del canvas
let sizeCell = (widthContainerTokens*2)/7; 
//Se ajusta el alto del canvas segun el tablero
myCanvas.height = sizeCell * 6;

let color = "red";
let format = "redonda";

//Comienzo
//Inicialmente, el tablero comienza con "4 en linea" por defecto, dando la opcion al jugador de cambiarlo.
document.getElementById("btnInitGame").addEventListener("click", initGame);

let imageCell = new Image();
imageCell.src = "../images/celda.png";


//Instanciamos: Juego, Tablero, Ficha, FichasPlayer1, FichasPlayer2. 
let game = new Game();
let board;
let token;
let tokensPlayer1; //lee del document.getElem.. 
let tokensPlayer2; 



let imageToken = new Image();
imageToken.src = "../images/ficha.png";
imageToken.onload = function () {
    tokensPlayer1=createTokens(color, format);
    tokensPlayer2=createTokens(color, format);
}

//Dibuja el tablero (por defecto 4 en linea) al cargar la pagina
imageCell.onload = function () {
    board = new Board(ctx, imageCell, sizeCell);
    board.draw();
}

function initGame(){
    let valueSelect = document.getElementById("selectGames").value;
    if(valueSelect == 4){
        sizeCell = (widthContainerTokens*2)/7;
        myCanvas.height = sizeCell*6;
        board.setColumns(7);
        board.setRows(6);
        board.setSizeCell(sizeCell);
        board.draw();
        game = new Game(ctx, board, tokensPlayer1, tokensPlayer2);
        game.tokensDraw();
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

function drawRect(){
    ctx.fillStyle = "#FFB9B9"; //Rojo
    ctx.fillRect(0, 0, widthContainerTokens, myCanvas.height);
    ctx.fillStyle = "#FCFFB9"; //Amarillo
    ctx.fillRect(widthContainerTokens*3, 0, widthContainerTokens, myCanvas.height);
}

function createTokens(color, format){
    /*
    if(color == "rojo" && format == "redonda"){
        token = new GameToken(ctx, imagenTokenRoundRed); 
    }
    else if(color == "rojo" && format == "cuadrada"){
        token = new GameToken(ctx, imagenTokenSquareRed);
    }
    */

   let array = new Array();
   
   for(let i = 0; i<21; i++){
        token = new GameToken(ctx, imageToken, sizeCell);
        array.push(token);
    }
    return array;
}

/*let  fichaImg= new Image();
fichaImg.src = "../images/ficha.png";

function drawGamesTokenIzq(){
    let fichasIzq = new Array();
    
    fichaImg.onload = function () {
        let ficha = new GameToken(ctx, fichaImg);
        //si juega con cuatro en linea el array es de 21 fichas 
        for(let i = 0; i<21; i++){
        fichasIzq.push(ficha);
        } 
    }

    console.log(fichasIzq);
}

drawGamesTokenIzq();*/