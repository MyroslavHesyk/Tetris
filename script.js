//
//
//
//

const PLAYFIELD_COLUMNS = 10;
const PLAYFIELD_ROWS = 20;
const TETROMINO_NAMES = ['O', 'J'];
const TETROMINOES = {
    'O': [
        [1,1],
        [1,1],
        
    ],
    'J': [
        [1,0,0],
        [1,1,1],
        [0,0,0]
    ]
}
function convertPositionToIndex(row, column){
    return row * PLAYFIELD_COLUMNS + column;
}

let playField;
let tetromino;

function generatePlayField(){
    for(let i=0; i < PLAYFIELD_ROWS * PLAYFIELD_COLUMNS; i++){
        const div = document.createElement('div');
        document.querySelector('.grid').append(div);
    }

    playField =  new Array(PLAYFIELD_ROWS).fill()
                        .map(()=> new Array(PLAYFIELD_COLUMNS).fill(0))
    // console.table(playfield);
    
}


function generateTetramino(){
     // there is we retern figure from index
    const name = TETROMINO_NAMES[0];
    const matrix = TETROMINOES[name];
    //console.log(matrix)
     // console.log(matrix);
    tetromino = {
        name,
        matrix,
        row: 2,
        column: 4
    }
}
generatePlayField()

generateTetramino()



const cells = document.querySelectorAll('.grid div');

function drawPlayField(){
    //cells[15].classList.add('O');
    for(let row=0; row < PLAYFIELD_ROWS ; row++){
        for (let column =0; column < PLAYFIELD_COLUMNS; column++) {
            if(playField[row][column]==0) continue;
            const name = playField[row][column];
            const cellIndex = convertPositionToIndex(
                row, column 
             )
             cells[cellIndex].classList.add(name)
    }
}
}

function drawTetramino(){
    const name = tetromino.name;
    const tetrominoMatrixSize = tetromino.matrix.length;

    for (let row =0; row < tetrominoMatrixSize; row++) {
        for (let column =0; column < tetrominoMatrixSize; column++) {
                if(!tetromino.matrix[row][column]) continue;
                const cellIndex = convertPositionToIndex(
                    tetromino.row + row, 
                    tetromino.column + column
                )
                cells[cellIndex].classList.add(name);
        } //   column
    }  // row
}

//drawPlayField()
//drawTetramino()


function draw(){
    cells.forEach(cell => cell.removeAttribute('class'));
    drawPlayField()
    drawTetramino()
}
draw();
document.addEventListener('keydown', onKeyDown)
function onKeyDown(event){
    switch(event.key){
        case 'ArrowDown':
            moveTetraminoDown()
            break
        case 'ArrowLeft':
            moveTetraminoLeft()
            break
        case 'ArrowRight':
            moveTetraminoRight()
            break
    }
    draw()
}

function moveTetraminoDown(){
    tetromino.row +=1;
}

function moveTetraminoLeft(){
    tetromino.column -=1;
}

function moveTetraminoRight(){
    tetromino.column +=1;
}


