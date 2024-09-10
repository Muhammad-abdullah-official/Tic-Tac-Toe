// All DOM Elements
const player1card = document.getElementById('player1');
const player2card = document.getElementById('player2');
const message = document.getElementsByClassName('message');
const boxes = document.getElementsByClassName('boxes');

console.log(boxes);

// Initial values
let currentPlayer = 1;
let winner = null;
let board = [null, null, null, null, null, null, null, null, null];

// All Functions
// Toggle current player

const togglePlayer = () => {
  if (winner === null) {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    message.innerText = `Player ${currentPlayer} turn`;
  }
  if (currentPlayer === 1) {
    player1card.classList = '';
    player2card.classList = 'disable';
  }
  if (currentPlayer === 2) {
    player2card.classList = '';
    player1card.classList = 'disable';
  }
};
