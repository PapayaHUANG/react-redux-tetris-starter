import React from 'react';
import Square from './Square';
import '../../../styles/NextBlock.css';

export default function NextBlock() {
  const box = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const blockToDisplay = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <Square key={`${row}${col}`} color={square} />;
    });
  });

  return <div className="next-block">{blockToDisplay}</div>;
}
