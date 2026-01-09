import React from "react";

/**
 * A single square in the Tic Tac Toe grid.
 */

// PUBLIC_INTERFACE
export default function Square({ value, onClick, isWinningSquare, disabled }) {
  /** Render a clickable square.
   * @param {{value: 'X'|'O'|null, onClick: () => void, isWinningSquare: boolean, disabled: boolean}} props
   */
  const label = value ? `Square: ${value}` : "Square: empty";

  return (
    <button
      type="button"
      className={`ttt-square${isWinningSquare ? " ttt-square--win" : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {value}
    </button>
  );
}
