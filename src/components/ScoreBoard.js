import React from "react";

export default function ScoreBoard({ gameWon, score }) {
  return (
    <div className="score-board">
      {gameWon ? (
        <h2 className="score-board-score winner">🏆YOU WIN🏆</h2>
      ) : (
        <h2 className="score-board-score">SCORE: {score} </h2>
      )}
    </div>
  );
}
