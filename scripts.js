// Movie buttons
let total = 0;

function addOne(button) {
    if (button.classList.contains("seen")) {
        // Uncheck
        total--;
        button.classList.remove("seen");
        button.innerText = "Seen it";
    } else {
        // Check
        total++;
        button.classList.add("seen");
        button.innerText = "Unseen";
    }

    document.getElementById("total").innerHTML = total;
}

// Tic Tac Toe
const board = document.getElementById("board");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "Lincoln";
let gameState = Array(9).fill(null);
let gameActive = true;

const images = {
  Lincoln: "img/dog1.png",
  Octavia: "img/dog2.png"
};

function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let combo of wins) {
    const [a,b,c] = combo;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      statusText.textContent = `${gameState[a]} wins!`;
      gameActive = false;
      return;
    }
  }

  if (!gameState.includes(null)) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
  }
}

function handleClick(index, cell) {
  if (!gameActive || gameState[index]) return;

  gameState[index] = currentPlayer;

  const img = document.createElement("img");
  img.src = images[currentPlayer];
  cell.appendChild(img);

  checkWinner();

  if (gameActive) {
    currentPlayer = currentPlayer === "Lincoln" ? "Octavia" : "Lincoln";
    statusText.textContent = `${currentPlayer}'s turn`;
  }
}

function createBoard() {
  board.innerHTML = "";
  gameState = Array(9).fill(null);
  gameActive = true;
  currentPlayer = "Lincoln";
  statusText.textContent = `${currentPlayer}'s turn`;

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => handleClick(i, cell));
    board.appendChild(cell);
  }
}

resetBtn.addEventListener("click", createBoard);

// Initialize game
createBoard();