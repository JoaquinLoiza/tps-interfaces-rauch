class Board {
    constructor(ctx, image, sizeCell){
        this.ctx = ctx;
        this.image = image;
        this.sizeCell = sizeCell;
        this.columns = 7;
        this.rows = 6; 
        this.matrix = null;
    }
    getSizeCell(){
        return this.sizeCell;
    }

    getColumns(){
        return this.columns;
    }
    getRows() {
        return this.rows;
    }
    getMatrix(){
        return this.matrix;
    }
    setColumns(n){
        this.columns = n;
    }
    
    setRows(n){
        this.rows = n;
    }

    setSizeCell(n){
        this.sizeCell = n;
    }

    //Dibuja el tablero en base a la matriz formada en el constructor. 
    draw(){
        this.matrix = this.createMatrix(this.columns, this.rows); 
        const cellSize = this.sizeCell; // tamaño del celda
        const width = this.ctx.canvas.width;
        const inicioX = width - (width/4)*3; 
        
        let y = 0, x = inicioX;
        for (let row of this.matrix) {
            x = inicioX;
            for (let column of row) {
                column.posX = x;
                column.posY = y;
                this.ctx.drawImage(this.image, x, y, cellSize, cellSize);
                x += cellSize;
            }
            y += cellSize;
        }
    }

    //Crea la matriz y la rellena con ceros para saber que esta vacia
    createMatrix(columns, rows) {
        let matrix = new Array();
        let row;
        let data = {
            value: 0,
            posX: 0,
            posY: 0
        };
        for (let i=0; i<rows; i++) {
	 		row = new Array();
            for(let j=0; j<columns; j++) {
                row.push(data);
            }
            matrix.push(row);
        }
        return matrix;	
    }
}