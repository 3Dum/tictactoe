// Initialize an array to store game state
const state = ['', '', '', '', '', '', '', '', '']

// Initialize start button
const startButton = document.getElementById('start');
startButton.addEventListener('click', drawBoard);

// Assign board to a variable
const board = document.getElementById('board');

// Draw initial map from game state array
function drawBoard(arr) {
  board.innerHTML = '';
  // Recursively draw squares for each item in the array
  state.forEach(item => {
    let elem = document.createElement('div');
    elem.classList.add('square');
    elem.innerHTML = 'HI';
    board.appendChild(elem);
  })
  
  // Add event listeners to each square
}

