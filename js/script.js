const playerFactory = (name, sign) => {

    return { name, sign };
};

const gameBoard = (() => {

    const board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const getField = (x, y) => {
        return board[x][y];
    };

    const setField = (x, y, sign) => {
        board[x][y] = sign;
    };

    const reset = () => {
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                board[x][y] = "";
            }
        }
    }

    return { getField, setField, reset, board }
})();

const gameController = (() => {
    const playerA = playerFactory("Player 1", "O");
    const playerB = playerFactory("Player 2", "X");
    let moveCounter = 1;

    const makeMove = (x, y) => {
        const currentPlayer = getCurrentPlayer();
        gameBoard.setField(x, y, currentPlayer.sign);
        if (checkWinner(x,y)) {
            console.log("We won?")
            isOver = true;
            return;
          }
        moveCounter++
    }

    const getCurrentPlayer = () => {
        return moveCounter % 2 === 1 ? playerA : playerB;
    };

    const checkWinner = (x,y) => {
        var winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];

        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                board[x][y] = "";
            }
        }
    };



    return { makeMove, checkWinner }
})();

const displayController = (() => {

    const displayGameboard = () => {
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                console.log(gameBoard.getField(x, y));
            }
        }
    };

    const displayGameboardArray = () => [
        console.log(gameBoard.board)
    ];

    return { displayGameboard, displayGameboardArray }
})();

gameController.makeMove(0, 0);
gameController.makeMove(1, 1);
gameController.makeMove(0, 2);
gameController.makeMove(1, 2);
gameController.makeMove(0, 1);
displayController.displayGameboardArray();
console.log(gameController.checkWinner());