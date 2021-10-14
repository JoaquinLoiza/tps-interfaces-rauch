class Board {
    constructor(ctx, image, sizeCell){
        this.ctx = ctx;
        this.image = image;
        this.sizeCell = sizeCell;
        this.columns = 7;
        this.rows = 6; 
        this.matrix = this.createMatrix(this.columns, this.rows); 
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
    createMatrix(columns, rows) {
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