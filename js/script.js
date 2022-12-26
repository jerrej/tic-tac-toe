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


    return { getField, setField, board }
})();

const displayController = (() => {


    const displayGameboard = () => {
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                console.log(gameBoard.getField(x,y));
            }
        }
    };

    const displayGameboardArray = () => [
        console.log(gameBoard.board)
    ];

    return { displayGameboard, displayGameboardArray }
})();

const Player = (sign) => {
    let
}

displayController.displayGameboard();
displayController.displayGameboardArray();