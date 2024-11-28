const cells = document.querySelectorAll('[data-cell]');
const winnerDisplay = document.getElementById('winner');
let currentPlayer = 'X'; // Start with player X

// Winning combinations for Tic-Tac-Toe
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Function to check for a winner
function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].innerText === currentPlayer &&
            cells[b].innerText === currentPlayer &&
            cells[c].innerText === currentPlayer) {
            return true;
        }
    }
    return false;
}

// Function to handle a cell click
function handleClick(event) {
    const cell = event.target;
    cell.innerText = currentPlayer; // Mark the cell
    cell.classList.add('taken', currentPlayer.toLowerCase()); // Add classes for styling

    // Check for winner
    if (checkWinner()) {
        winnerDisplay.innerText = `Player ${currentPlayer} wins!`;
        cells.forEach(cell => cell.classList.add('taken')); // Disable further clicks
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Attach click event to each cell
cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

// Function to reset the game
function resetGame() {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('taken', 'x', 'o');
    });
    winnerDisplay.innerText = '';
    currentPlayer = 'X';
}
