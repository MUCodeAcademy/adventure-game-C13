// GameOverPopup.js
import React from 'react';
import './GameOverPopup.css'

const GameOverPopup = ({ onRestart }) => {
  return (
    <div className="game-over-popup">
      <h2>GAME OVER</h2>
      <h4>"Wisdom is chasing you, but you are faster!"</h4>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default GameOverPopup;
