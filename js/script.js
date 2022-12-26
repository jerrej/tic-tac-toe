

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

    return {}
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

displayController.displayGameboardArray();
