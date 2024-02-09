// GameOverPopup.js
import React from 'react';
import './GameOverPopup.css'

const GameOverPopup = ({ onRestart }) => {
  return (
    <div className="game-over-popup">
      <h2>GAME OVER</h2>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default GameOverPopup;
