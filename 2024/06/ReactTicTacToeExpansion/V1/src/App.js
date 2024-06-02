import { useState } from 'react';

function Square({value, onSquareClick, winningSquare}) {
    let squareHighlightCSS = '';
    if (winningSquare) {
        squareHighlightCSS = 'square-red-border'
    }

    return (
        /* className="square {squareHighlightCSS}" */
        <button className={"square " + squareHighlightCSS}
                onClick={onSquareClick}>
            {value}
        </button>
    )
}

function Board({xIsNext,  squares, onPlay, currentMove}) {

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner.next;
    } else if (squares.length === 9 && currentMove === 9) {
        status = "Draw";
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i) {

        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        const nextValue = xIsNext ? 'X' : 'O';

        nextSquares[i] = nextValue;
        onPlay(nextSquares, i);
    }

/*
stolen from
    * https://stackoverflow.com/questions/41667346/react-create-nested-components-with-loops/56307545#56307545
    * and modified
    const board = [0,1,2].map(outerIndex => {
        return (
            <div className="board-row">
                {[0,1,2].map(innerIndex => {
                    const item = 3*outerIndex + innerIndex;
                    return <Square key={item} value={squares[item]} onSquareClick={() => handleClick(item)}></Square>
                })}
            </div>
        );
    })
*/

/*
This works; sort of my way
    const board = [1,2,3].map((outerItem, outerIndex) => {
        let description;
        function createRow(innerItem, innerIndex) {
            debugger;
            const squareIndex = 3 * outerItem + innerItem;
            return <Square key={squareIndex} value={squares[squareIndex]} onSquareClick={() => handleClick(squareIndex)}></Square>
        }

        description = <div className="board-row" key={outerItem}>
            {
                [0,1,2].map(createRow)
            }
        </div>
        return description;
    });
*/

    const board = squares.map((outerItem, outerIndex, tempSquares) => {
        const NUMBER_OF_COLUMNS = 3;
        let description;
        if( ((outerIndex+1) % NUMBER_OF_COLUMNS) === 0) {
            let startIndex = outerIndex - (outerIndex % NUMBER_OF_COLUMNS);
            const innerArray = tempSquares.slice(startIndex, outerIndex+1);
            /* Note to self: I was having a big problem with displays because of duplicate key indexes on the top row */
            description = <div className="board-row" key={outerIndex}>
                {
                    innerArray.map((innerItem, innerIndex) => {
                        const squareIndex = startIndex + innerIndex;
                        const winningSquare = winner?.lines.some((winnerValue) => {
                            if (squareIndex === winnerValue) { return true}
                        })
                        return <Square key={squareIndex} value={squares[squareIndex]} onSquareClick={() => handleClick(squareIndex)} winningSquare={winningSquare}></Square>
                    })
                }
            </div>
        }
        return description;
    });

    return (
        <>
            <div className="status">{status}</div>
            {board}
{/*
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
            </div>
*/}
        </>
    )
}

export default function Game() {
//    const [xIsNext, setXIsNext] = useState(true);
//    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [forwardDirection, setForwardDirection] = useState(true);
    const [history, setHistory] = useState([
        {
            moveNumber: 0,
            squares: Array(9).fill(null),
            position: null
        }
    ])
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove]?.squares;

    function handlePlay(nextSquares, currentMoveIndex) {
        const nextMove = {
            moveNumber: currentMove + 1,
            squares: nextSquares,
            // this isn't right; currentMove is the number of the move unrelated to the location of the click
            position: {
                x: (currentMoveIndex % 3)+1,
                y: Math.floor(currentMoveIndex / 3)+1
            }
        }
        const nextHistory = [...history.slice(0, currentMove + 1), nextMove];
        //
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
    }

    function jumpTo(requestedMove) {
        const nextMove = history.findIndex((history) => history.moveNumber === requestedMove);
        setCurrentMove(nextMove)
    }

    const moves = history.map((square, historyIndex, historyArray) => {
        let description;
        let squareToDisplay = square;
        if (!forwardDirection) {
            debugger;
            const reversedIndex = historyArray.length - historyIndex -1;
            squareToDisplay = historyArray[reversedIndex];
        }


        const move = squareToDisplay.moveNumber;
        //
        let location = '';
        if (square.position) {
            location = `(${square.position?.x}, ${square.position?.y})`;
        }
        if (move === currentMove) {
            description = `You are at Move # ${move} ${location}`;
        } else {
            if (move > 0) {
                description = `Go to Move # ${move} ${location}`;
            } else {
                description = 'Go to Game Start';
            }
            description = <button onClick={() => jumpTo(move)}>{description}</button>;
        }
        return (
            <li key={move}>
                {description}
            </li>
        )
    })

    function onReverseMoveDisplayRequest() {
        console.log('reversed moves');
        setForwardDirection(!forwardDirection);

        /*
        const nextHistory = [...history.reverse()];
        setHistory(nextHistory);
        debugger;
        setCurrentMove(nextHistory.length-currentMove);
//        jumpTo(nextHistory.length-currentMove);
*/
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove}/>
            </div>
            <div className="game-info">
                <button onClick={onReverseMoveDisplayRequest}>Reverse Move Display</button>
                <ol>{moves}</ol>
            </div>
        </div>

    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                lines: lines[i],
                next: squares[a]
            };
//            return squares[a];
        }
    }
    return null;
}
