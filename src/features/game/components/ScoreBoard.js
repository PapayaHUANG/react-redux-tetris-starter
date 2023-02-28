import React from 'react';

import '../../../styles/ScoreBoard.css';

export default function ScoreBoard() {
  return (
    <div className="score-board">
      <div>Score:0</div>
      <div>Highest Score: 0</div>
      <div className="btn-container">
        <button className="score-board-button">Play</button>
        <button className="score-board-button">Restart</button>
      </div>
    </div>
  );
}
