// Initialize an array to store game state
const state = Array(9);

// Var for which turn it is
let turn = 'X'

// Var to track if the game has been won yet or not
let won = false;

// Func for changing turns
function changeTurn() {
  turn = turn == 'X' ? 'O' : 'X';
  document.getElementById('currentTurn').innerHTML = turn;
}

// Handles resetting the game
document.getElementById('reset').addEventListener('click', () => {
  state.fill('')
  drawBoard(state)
  document.getElementById('turn').innerHTML = 'Turn: '
  won = false;
});

// Assign board to a variable
const board = document.getElementById('board');

// Initialize start button
const startButton = document.getElementById('start');
startButton.addEventListener('click', () => drawBoard(state));


// function for when a move is made
function move(elem) {
  if (elem.innerHTML || won) return;
  state[elem.id] = turn;
  elem.innerHTML = turn;
  checkWinner();
  if (!won) changeTurn();
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

  let winningCombo = combinations.findIndex(c => {
    return state[c[0]] && state[c[0]] == state[c[1]] && state[c[1]] == state[c[2]];
  })

  if (winningCombo == -1) {
    return
  } else {
    won = true;
    // change color of winning combination
    combinations[winningCombo].forEach(index => {
      document.getElementById(index).style = 'background-color:#72DDF7'
    })
    // announce winner
    document.getElementById('turn').innerHTML = 'The winner is: '
  }
}

``