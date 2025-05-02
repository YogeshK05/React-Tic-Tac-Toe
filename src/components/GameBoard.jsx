import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleBoardState(rInd, cInd) {
    setGameBoard((previousBoard) => {
      const updatedBoard = [...previousBoard.map((innerArr) => [...innerArr])];
      updatedBoard[rInd][cInd] = "X";
      return updatedBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rInd) => (
        <li key={rInd}>
          <ol>
            {row.map((playerSymbol, cInd) => (
              <li key={cInd}>
                <button onClick={() => handleBoardState(rInd, cInd)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
