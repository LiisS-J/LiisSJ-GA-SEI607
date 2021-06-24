/*
 * Numcell class holds the value and status for each individual cell
 */
class NumSquare {
    constructor(value) {
        this.status = true; 
        this.value = value;
    }
}

/*
 * SquarePosition class holds the position of each div(which column and which row it is)
 */

class SquarePosition {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
}


/*
 * starterGrid is template to how the gameGrid will look like after the gameStarter function runs
 */
let starterGrid = [
    [1,2,3,4,5,6,7,8,9],
    [1,1,1,2,1,3,1,4,1],
    [5,1,6,1,7,1,8,1,9]
];


// Initialized the gameGrid
// Find ways to populate the gameGrid by pushing each cell element into an object. That way, when we click on the 
// numbers, they each hold a value and a status for comparison. It holds all the game data and keeps getting 
// updates as numbers get truned off or new rows are added
let gameGrid = [];

/*
 * This function starts the game by creating a 3x9 grid created by the DOM manipulation 
 *  and using the singleCell and createRow functions. It gets called ONLY when the START or RESET buttons are clicked
 */
function gameStarter() {

    // build out gameGrid by a nested loop that loops over each row in the starterGrid array
    for(let i = 0; i < starterGrid.length; i++){
        gameGrid[i] = [];
        // This loop loops over each number square(singleDiv)
        for(let j = 0; j < starterGrid[i].length; j++) {
            gameGrid[i][j] = new NumSquare(starterGrid[i][j]);
        }
        createRow(i, starterGrid[i]);
    }
    // console.log(gameGrid);
      // for(let i = 0; i < gameGrid.length; i++) {
    //     createRow(i, gameGrid[i]);
    // }
};

/* 
 * Create a function that creates a single div element in the singleRow array 
 */
function singleCell(divIndex, num) {
    const singleDiv = document.createElement('div');
    singleDiv.innerText = num;
    singleDiv.style.border = '1px solid black';
    singleDiv.classList.add('gridCell');
    singleDiv.setAttribute('data-index', divIndex);
    return singleDiv;
}

/* 
 * This function creates a div element that makes up a row in the grid. 
 */
function createRow(rowIndex, rowOfNums) {
    let singleRow = document.createElement('div');
    singleRow.classList.add('gridRow');
    singleRow.setAttribute('data-index', rowIndex);
    /*
     * this part of the function loops over each array element(cell) and appends that element 
     * (while taking it's index into consideration) into the singleRow variable.
     */
    for(let i = 0; i < rowOfNums.length; i++) {
        singleRow.appendChild(singleCell(i, rowOfNums[i]));
    }
    document.querySelector('#main-grid').appendChild(singleRow);
};

/* 
 * This is an event handler that listens to which square is clicked
 */
const squareClick = document.querySelector('#main-grid');
squareClick.addEventListener('click', function(event) {
    console.log(event.target.innerText);
    let squareIdx = event.target.getAttribute('data-index');
    let rowIdx = event.target.parentElement.getAttribute('data-index');
    game.clickedSquares.push(new SquarePosition(rowIdx, squareIdx));
    if (game.clickedSquares.length === 2) {
        matchSeeker();
    }
    // get index of the square and the index of the parent(row)
});

// The game object that tracks which squares are clicked and how many

const game = {
    clickedSquares: []
}
/*
 * This function checks if the two numbers clicked add up to 10 or match in value
 * whenever they click a button, PUSH on clickSquares
 * Creating two variables that hold copies of game.clickedSquares[0]- first clicked num and 
 * game.clickedSquares[1]- second clicked num
 */
function matchSeeker(){
    let sq1 = game.clickedSquares[0];
    let sq2 = game.clickedSquares[1];
    if (gameGrid[sq1.column][sq1.row].value === gameGrid[sq2.column][sq2.row].value) {
        alert('YOU JUST CREATED YOUR FIRST MATCH!');
    }
}

/* 
 * This function clears the main-grid div content to reset the grid
 */
function clearcontent(elementId) {
document.querySelector('#main-grid').innerHTML = "";
}

/* 
 * Connecting the gameStarter function to the START button and the RESET button, along with a clearContent() function
 * that empties the grid and resets the game board.
 */
const startBtn = document.querySelector('#start-btn');

startBtn.addEventListener('click', function() {
    gameStarter();
});

const resetBtn = document.querySelector('#reset-btn');

resetBtn.addEventListener('click', function () {
    clearcontent();
    gameStarter();
});

/*
 * This function loops through pre-set colors that will all serve as optional background colors for the BACKGROUND button
 * Make sure to finish this function!
 */
function bgPicker() {
    const colorArr = ['#e1ded5', '#eddcd2', '#a8dadc', '#FA9BA1', '#669bbc', '#8d99ae'];
    
    return colorArr;
}

/*
 * Connecting the BACKGROUND button to the bgPicker function
 */
const bgBtn = document.querySelector('#bg-btn');

bgBtn.addEventListener('click', function() {
    bgBtn.style.backgroundColor = bgPicker();
});

/*
 * Creating anf connecting the FAST GAME button to the timer button
 * This function starts a timer from a creator's chosen value and counts down from it. It also clears the grid when time runs out.
 * FINISH THIS FUNCTION SO TIME COUNTS DOWN CORRECTLY AND ALERT COMES ON WHEN TIME'S ON 00!
 */

const fastGame = document.querySelector('#fastGame');

fastGame.addEventListener('click', function() {
    
    const startMins = 15;
    let time = startMins * 60;

    const countDownBtn = document.querySelector('#timer');

    setInterval(countDown, 1000);

    function countDown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countDownBtn.innerHTML = `${minutes}: ${seconds}`;
        time--;

        // alert("Time's out! You lost the game!");
    };
});

/*
 * This function covers the matched numbers with a png image to show they are taken
 */
function crossOut(){

}

/*
 * This function creates a new grid from the leftover numbers in each row and listens to the ADD ROWS button click
 */

function newGrid() {
    // use .push() method to push leftoer numbers into arrays that go into the gameGrid array
}

