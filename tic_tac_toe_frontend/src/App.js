import React, { useMemo, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { calculateWinner } from "./utils/calculateWinner";

const INITIAL_SQUARES = Array(9).fill(null);

// PUBLIC_INTERFACE
function App() {
  /** Main Tic Tac Toe application root component. */
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line: winningLine } = useMemo(
    () => calculateWinner(squares),
    [squares]
  );

  const isBoardFull = useMemo(() => squares.every(Boolean), [squares]);
  const isDraw = !winner && isBoardFull;
  const isGameOver = Boolean(winner) || isDraw;

  const currentPlayer = xIsNext ? "X" : "O";

  // PUBLIC_INTERFACE
  const handlePlay = (index) => {
    /** Attempt to play a move at a given index. */
    if (winner || squares[index]) return;

    const next = squares.slice();
    next[index] = currentPlayer;
    setSquares(next);
    setXIsNext((v) => !v);
  };

  // PUBLIC_INTERFACE
  const handleRestart = () => {
    /** Reset game state to initial. */
    setSquares(INITIAL_SQUARES);
    setXIsNext(true);
  };

  const statusText = winner
    ? `Winner: ${winner}`
    : isDraw
      ? "Draw game"
      : `Turn: ${currentPlayer}`;

  const statusHint = winner
    ? "Game over. Restart to play again."
    : isDraw
      ? "No more moves. Restart to play again."
      : "Select an empty square to place your mark.";

  return (
    <div className="App">
      <main className="ttt-shell">
        <section className="ttt-card" aria-label="Tic Tac Toe game">
          <header className="ttt-header">
            <h1 className="ttt-title">Tic Tac Toe</h1>
            <p className="ttt-subtitle">Two players. One board. First to three wins.</p>
          </header>

          <div className="ttt-status" role="status" aria-live="polite">
            <div className="ttt-status__row">
              <span className="ttt-status__label">Status</span>
              <span
                className={`ttt-status__value${
                  winner ? " ttt-status__value--winner" : ""
                }${isDraw ? " ttt-status__value--draw" : ""}`}
              >
                {statusText}
              </span>
            </div>
            <div className="ttt-status__hint">{statusHint}</div>
          </div>

          <Board
            squares={squares}
            onPlay={handlePlay}
            winningLine={winningLine}
            isGameOver={isGameOver}
          />

          <div className="ttt-actions">
            <button
              type="button"
              className="ttt-btn"
              onClick={handleRestart}
              aria-label="Restart game"
            >
              Restart
            </button>

            <div className="ttt-legend" aria-label="Legend">
              <span className="ttt-pill ttt-pill--x">X</span>
              <span className="ttt-pill ttt-pill--o">O</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
