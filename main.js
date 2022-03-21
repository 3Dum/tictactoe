const state = Array(9);
let turn = 'X'
let gameOver = false;
let turnCounter = 0;

function changeTurn() {
  turn = turn == 'X' ? 'O' : 'X';
  document.getElementById('currentTurn').textContent = turn;
}

const startButton = document.getElementById('start');
startButton.addEventListener('click', () => drawBoard(state));

const board = document.getElementById('board');

document.getElementById('reset').addEventListener('click', () => {
  state.fill('')
  drawBoard(state)
  document.getElementById('turn').textContent = 'Turn: '
  document.getElementById('currentTurn').textContent = turn;
  gameOver = false;
  turnCounter = 0;
});

// function for when a move is made
function move(elem) {
  if (gameOver) return;
  state[elem.id] = turn;
  elem.innerHTML = turn;
  turnCounter++;
  checkWinner();
  if (!gameOver) changeTurn();
}

// draw initial map from game state array
function drawBoard(arr) {
  board.innerHTML = '';
  // recursively draw squares for each item in the array
  for (let i = 0; i < arr.length; i++) {
    let elem = document.createElement('div');
    elem.classList.add('square');
    elem.setAttribute('id', i)
    elem.addEventListener('click', () => move(elem), {once: true});
    board.appendChild(elem);
  }
}

function checkWinner() {
  // a array of all possible winning combinations
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

  // checks each combination against the board's state
  let winningCombo = combinations.findIndex(c => {
    return state[c[0]] && state[c[0]] == state[c[1]] && state[c[1]] == state[c[2]];
  })

  if (winningCombo == -1) {
    if (turnCounter > 8) {
      gameOver = true;
      let allSquare = document.querySelectorAll('.square');
      allSquare.forEach(node => node.style.backgroundColor = '#FFEE93');
      document.getElementById('turn').textContent = 'Stale Mate!'
      document.getElementById('currentTurn').textContent = '';
    }
    return
  } else {
    gameOver = true;
    // change color of winning combination
    combinations[winningCombo].forEach(index => {
      document.getElementById(index).style.backgroundColor = '#72DDF7';
    })
    // announce winner
    document.getElementById('turn').textContent = 'The winner is: '
  }
}
