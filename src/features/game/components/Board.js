import React from 'react';
import Square from './Square';

import '../../../styles/Board.css';

export default function Board() {
  const board = [];
  for (let row = 0; row < 18; row++) {
    board.push([]);
    for (let col = 0; col < 10; col++) {
      board[row].push(<Square key={`${col}${row}`} color="0" />);
    }
  }

  return (
    <div className="board-container">
      <div className="board">{board}</div>
    </div>
  );
}
