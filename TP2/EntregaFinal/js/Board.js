class Board {
    constructor(ctx, image, sizeCell, columns, rows){
        this.ctx = ctx;
        this.image = image;
        this.sizeCell = sizeCell;
        this.columns = columns;
        this.rows = rows; 
        this.matrix = this.createMatrix(); 
    }
    //devuelve el tamaño de la celda
    getSizeCell(){
        return this.sizeCell;
    }
    //devuelve la cant de columnas
    getColumns(){
        return this.columns;
    }
    //devuelve la cantidad de filas
    getRows() {
        return this.rows;
    }
    //devuleve la matriz
    getMatrix(){
        return this.matrix;
    }
    //setea la matriz
    setMatrix(){
        this.matrix = this.createMatrix();
    }
    //setea las columnas
    setColumns(n){
        this.columns = n;
    }
    //setea las filas
    setRows(n){
        this.rows = n;
    }
    //setea el tamaño de la celda
    setSizeCell(n){
        this.sizeCell = n;
    }

    //Dibuja el tablero en base a la matriz formada en el constructor. 
    draw(){
        const cellSize = this.sizeCell; // tamaño del celda
        const width = this.ctx.canvas.width;
        const inicioX = width - (width/4)*3; 
        let y = 0, x = inicioX;
        for (let row of this.matrix) {
            x = inicioX;
            for (let elemnt of row) {
                this.ctx.drawImage(this.image, x, y, cellSize, cellSize);
                x += cellSize;
            }
            y += cellSize;
        }
    }

    //Crea la matriz y la rellena con ceros para saber que esta vacia
    createMatrix() {
        let columns = this.columns;
        let rows = this.rows;
        const cellSize = this.sizeCell; // tamaño del celda
        const width = this.ctx.canvas.width;
        const inicioX = width - (width/4)*3; 
        let y = 0, x = inicioX;
        
        let matrix = new Array();
        let row;
        for (let i=0; i<rows; i++) {
            row = new Array();
            x = inicioX;
            for(let j=0; j<columns; j++) {
                let data = {
                    value: 0,
                    posX: x,
                    posY: y
                };
                row.push(data);
                this.ctx.drawImage(this.image, x, y, cellSize, cellSize);
                x += cellSize;
            }
            matrix.push(row);
            y += cellSize;
        }
        return matrix;	
    }
}