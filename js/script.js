const playerFactory = (name, sign) => { return { name, sign }; };

const gameBoard = (() => {

    const board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    const getField = (index) => {
        return board[index];
    };

    const setField = (index, sign) => {
        board[index] = sign;
    };

    const reset = () => {
        for (let i = 0; x < board.length(); i++) {
        }
    }

    return {
        getField,
        setField,
        reset,
        board
    }
})();

const gameController = (() => {
    const playerA = playerFactory("Player 1", "O");
    const playerB = playerFactory("Player 2", "X");
    let moveCounter = 1;

    const makeMove = (fieldIndex) => {
        const currentPlayer = getCurrentPlayer();
        gameBoard.setField(fieldIndex, currentPlayer.sign);
        if (checkWinner(fieldIndex)) {
            console.log(currentPlayer.name + " won!")
            gameOver = true;
            return;
        }
        moveCounter++
    }

    const getCurrentPlayer = () => {
        return moveCounter % 2 === 1 ? playerA : playerB;
    };


    const checkWinner = (fieldIndex) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winConditions.some(combination => {
            return combination.every(index => {
                return gameBoard.getField(index) === getCurrentPlayer().sign;
            })
        })
    };

    return {
        makeMove,
        checkWinner,
        playerA,
        playerB
    }
})();

const displayController = (() => {

    const displayGameboardArray = () => [
        console.log(gameBoard.board)
    ];

    return {
        displayGameboardArray
    }
})();

gameController.makeMove(0);
gameController.makeMove(8);
gameController.makeMove(1);
gameController.makeMove(7);
gameController.makeMove(3);
gameController.makeMove(6);
console.log("CHECKING" + gameController.checkWinner(0));
console.log(gameBoard.getField(1))
/*gameController.makeMove(4);
gameController.makeMove(2);
gameController.makeMove(5);
gameController.makeMove(1);*/
displayController.displayGameboardArray();
