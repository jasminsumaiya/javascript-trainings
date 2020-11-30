

function myFunction(row, col, cell){
    // 4 x 4
    var outputRow = (cell % col); 
    var outputCol = math.ceil(cell/col);

    return outputRow + 'x' + outputCol;
    
}
var grid = myFunction(8, 6, 22);
console.log(grid);