var Player;
(function (Player) {
    Player["None"] = "";
    Player["X"] = "X";
    Player["O"] = "O";
})(Player || (Player = {}));
var currentPlayer = Player.X;
var board = Array(9).fill(Player.None);
var winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];
function cellClick(index) {
    if (board[index] === Player.None) {
        board[index] = currentPlayer;
        renderBoard();
        checkWinner();
        currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    }
}
function checkWinner() {
    for (var _i = 0, winningCombinations_1 = winningCombinations; _i < winningCombinations_1.length; _i++) {
        var combination = winningCombinations_1[_i];
        var a = combination[0], b = combination[1], c = combination[2];
        if (board[a] !== Player.None &&
            board[a] === board[b] &&
            board[a] === board[c]) {
            alert("".concat(board[a], " wins!"));
            resetGame();
            return;
        }
    }
    if (!board.includes(Player.None)) {
        alert("It's a draw!");
        resetGame();
    }
}
function resetGame() {
    board = Array(9).fill(Player.None);
    currentPlayer = Player.X;
    renderBoard();
}
function renderBoard() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach(function (cell, index) {
        cell.textContent = board[index];
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var cells = document.querySelectorAll('.cell');
    cells.forEach(function (cell, index) {
        cell.addEventListener('click', function () { return cellClick(index); });
    });
    var resetButton = document.getElementById('resetBtn');
    resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', resetGame);
    renderBoard();
});
