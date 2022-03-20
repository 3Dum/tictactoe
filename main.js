// Initialize an array to store game state
const state = Array(9);

// Var to which turn it is
let turn = 'X'

// Func for changing turns
function changeTurn() {
  turn = turn == 'X' ? 'O' : 'X';
  document.getElementById('currentTurn').innerHTML = turn;
}

// Handles resetting the game
document.getElementById('reset').addEventListener('click', () => {
  state.fill('')
  drawBoard(state)
});

// Assign board to a variable
const board = document.getElementById('board');

// Initialize start button
const startButton = document.getElementById('start');
startButton.addEventListener('click', () => drawBoard(state));


// function for when a move is made
function move(elem) {
  if (elem.innerHTML) return;
  state[elem.id] = turn;
  elem.innerHTML = turn;
  checkWinner();
  changeTurn();
}

// Draw initial map from game state array
function drawBoard(arr) {
  board.innerHTML = '';
  // Recursively draw squares for each item in the array
  for (let i = 0; i < arr.length; i++) {
    let elem = document.createElement('div');
    elem.classList.add('square');
    elem.setAttribute('id', i)
    elem.addEventListener('click', () => move(elem));
    board.appendChild(elem);
  }
  
  // Add event listeners to each square
}

function checkWinner() {
  const combinations = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];

  if (combinations.some(c => {
    return state[c[0]] && state[c[0]] == state[c[1]] && state[c[1]] == state[c[2]];
  })) {
    alert('win');
  } else return;
}

