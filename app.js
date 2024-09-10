// All DOM Elements
const player1card = document.getElementById('player1');
const player2card = document.getElementById('player2');
const message = document.getElementById('message');
const boxes = document.getElementsByClassName('boxes');

//home page elements
const homePage = document.getElementsByClassName('homepage')[0]; // Access first element
// two player game page
const twoPlayerGamePage = document.getElementsByClassName('twoplayerpage')[0]; // Access first element

// button two player
const twoPlayer = document.getElementById('twoPlayer');

// onclick event on twoplayergamepage
twoPlayer.addEventListener('click', () => {
  homePage.style.display = 'none'; // Hide the home page
  twoPlayerGamePage.style.display = 'block'; // Show the two-player game page
});

// Initial values
let board = [null, null, null, null, null, null, null, null, null];
let currentPlayer = 1;
let winner = null;

// All Functions
// Toggle current player

const togglePlayer = () => {
  if (winner === null) {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    message.innerText = `Player ${currentPlayer} turn`;
    console.log(`Player ${currentPlayer} turn`);
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

// Update board / box on user click
const updateBoard = () => {
  board.forEach((value, index) => {
    // console.log('board in updateboard', board);
    console.log('value', value);

    if (value !== null) {
      // console.log('box', document.getElementById(`${index}`));
      document.getElementById(`${index}`).innerHTML =
        value === 1
          ? '<i class="limegreen fa-solid fa-check"></i>'
          : '<i class="tomato fa-regular fa-circle"></i>';
    }
  });
};

// win sequence function
const winSequence = (location1, location2, location3) => {
  console.log(
    board[location1] === currentPlayer &&
      board[location2] === currentPlayer &&
      board[location3] === currentPlayer
  );

  return (
    board[location1] === currentPlayer &&
    board[location2] === currentPlayer &&
    board[location3] === currentPlayer
  );
};

const checkWinner = () => {
  if (winSequence(0, 1, 2)) {
    // first row
    winner = currentPlayer;
    message.innerText = `Player ${currentPlayer} Won.`;
    return;
  }
  if (winSequence(3, 4, 5)) {
    // second row
    winner = currentPlayer;
    message.innerText = `Player ${currentPlayer} Won.`;
    return;
  }
  if (winSequence(6, 7, 8)) {
    // third row
    winner = currentPlayer;
    message.innerText = `Player ${currentPlayer} Won.`;
    return;
  }
  if (winSequence(0, 3, 6)) {
    // first column
    winner = currentPlayer;
    message.innerText = `Player ${currentPlayer} Won.`;
    return;
  }
  if (winSequence(1, 4, 7)) {
    // second column
    winner = currentPlayer;
    message.innerText = `Player ${currentPlayer} Won.`;
    return;
  }
  if (winSequence(2, 5, 8)) {
    // third column
    winner = currentPlayer;
    message.innerText = `Player ${currentPlayer} Won.`;
    return;
  }
  if (winSequence(0, 4, 8)) {
    // r1c1 r2c2 r3c3
    winner = currentPlayer;
    message.innerText = `Player ${currentPlayer} Won.`;
    return;
  }
  if (winSequence(2, 4, 6)) {
    //r1c3 r2c2 r3c1
    winner = currentPlayer;
    message.innerText = `Player ${currentPlayer} Won.`;
    return;
  }
};

// check show match draw function

const checkDraw = () => {
  let nullValues = 0;
  board.forEach((value) => {
    if (value === null) {
      nullValues++;
    }
  });
  console.log('Board null values', nullValues);

  if (nullValues === 0 && winner === null) {
    message.innerText = `Match Draw`;
    console.log('Match Draw');
  }
};

// All Event Listeners
// 1 - Event Listener to listen clicks on boxes on board
Array.from(boxes).forEach((box) => {
  box.addEventListener('click', (e) => {
    if (!box.classList.contains('checked') && winner === null) {
      box.classList.add('checked');
      board[parseInt(box.id)] = currentPlayer;
      updateBoard();
      checkWinner();
      togglePlayer();
      checkDraw();
    }
  });
});
