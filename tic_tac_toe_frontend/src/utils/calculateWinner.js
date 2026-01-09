/**
 * Winner detection utility for Tic Tac Toe.
 * Returns the winner and the indices of the winning line (if any).
 */

// PUBLIC_INTERFACE
export function calculateWinner(squares) {
  /** Determine whether the board contains a winning line.
   * @param {Array<'X'|'O'|null>} squares - length 9 array of marks.
   * @returns {{winner: 'X'|'O'|null, line: number[]|null}}
   */
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (const [a, b, c] of lines) {
    const v = squares[a];
    if (v && v === squares[b] && v === squares[c]) {
      return { winner: v, line: [a, b, c] };
    }
  }

  return { winner: null, line: null };
}
