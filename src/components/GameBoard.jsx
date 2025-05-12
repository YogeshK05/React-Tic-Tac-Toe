export default function GameBoard({ onSelectActivePlayer, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleBoardState(rInd, cInd) {
  //   setGameBoard((previousBoard) => {
  //     const updatedBoard = [...previousBoard.map((innerArr) => [...innerArr])];
  //     updatedBoard[rInd][cInd] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectActivePlayer();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rInd) => (
        <li key={rInd}>
          <ol>
            {row.map((playerSymbol, cInd) => (
              <li key={cInd}>
                <button
                  onClick={() => onSelectActivePlayer(rInd, cInd)}
                  disabled={playerSymbol !== null}
                >
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
