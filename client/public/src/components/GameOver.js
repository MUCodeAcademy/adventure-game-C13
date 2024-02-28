// GameOver.js
import React from 'react';
import Overlay from './Overlay';
import GameOverPopup from './GameOverPopup';

const GameOver = ({ onRestart }) => (
  <Overlay>
    <div className="game-over">
      <GameOverPopup onRestart={onRestart} />
    </div>
  </Overlay>
);

export default GameOver;
