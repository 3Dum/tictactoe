// Initialize an array to store game state
const state = ['', '', '', '', '', '', '', '', '']

// Var to which turn it is
let turn = 'X'

// Func for changing turns
function changeTurn() {
  turn = turn == 'X' ? 'O' : 'X';
  document.getElementById('currentTurn').innerHTML = turn;
}

changeTurn();

// Assign board to a variable
const board = document.getElementById('board');

// Initialize start button
const startButton = document.getElementById('start');
startButton.addEventListener('click', () => drawBoard(state));


// function for when a move is made
function move(elem) {
  alert(elem.id);
}

// Draw initial map from game state array
function drawBoard(arr) {
  board.innerHTML = '';
  // Recursively draw squares for each item in the array
  for (let i = 0; i < arr.length; i++) {
    let elem = document.createElement('div');
    elem.classList.add('square');
    elem.setAttribute('id', i)
    elem.innerHTML = 'X';
    elem.addEventListener('click', () => move(elem));
    board.appendChild(elem);
  }
  
  // Add event listeners to each square
}

