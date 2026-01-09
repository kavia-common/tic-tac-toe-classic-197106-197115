import React from "react";
import Square from "./Square";

/**
 * 3x3 Tic Tac Toe board.
 */

// PUBLIC_INTERFACE
export default function Board({ squares, onPlay, winningLine, isGameOver }) {
  /** Render a board and handle square clicks.
   * @param {{squares: Array<'X'|'O'|null>, onPlay: (index:number) => void, winningLine: number[]|null, isGameOver: boolean}} props
   */
  const handleClick = (index) => {
    onPlay(index);
  };

  return (
    <div className="ttt-board" role="grid" aria-label="Tic Tac Toe board">
      {squares.map((value, idx) => (
        <Square
          key={idx}
          value={value}
          onClick={() => handleClick(idx)}
          isWinningSquare={Boolean(winningLine?.includes(idx))}
          disabled={isGameOver || Boolean(value)}
        />
      ))}
    </div>
  );
}
