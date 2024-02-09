// TextAdventureGame.js
import React, { useState, useEffect } from 'react';
import Scene from './Scene';
import GameOver from './GameOver';
import './Health.css';

const TextAdventureGame = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [health, setHealth] = useState(50);
  const [gameOver, setGameOver] = useState(false);

  const handleChoice = (choiceIndex, damage) => {
    if (gameOver) return;

    const choice = scenes[currentSceneIndex].choices[choiceIndex];
    const nextSceneIndex = choice.nextSceneIndex;

    if (choice.damage) {
      const newHealth = Math.max(0, health - choice.damage);
      setHealth(newHealth);

      if (newHealth === 0) {
        setGameOver(true);
      }
    }

    setCurrentSceneIndex(nextSceneIndex);
  };

  const restartGame = () => {
    setHealth(50);
    setGameOver(false);
    setCurrentSceneIndex(0);
  };

  const currentScene = scenes[currentSceneIndex];

  return (
    <div className="scene-container">
      {gameOver && <GameOver onRestart={restartGame} />}

      <h1>Room {Math.floor(currentSceneIndex / 5) + 1}</h1>
      <div className="health-container">
        <h2 className={`health ${health <= 30 ? 'low-health' : ''}`}>Health: {health}</h2>
      </div>
      <Scene scene={currentScene} onChoice={handleChoice} />
    </div>
  );
};

const scenes = [
  {
    description: 'Scene 1 in Room 1 MAIN <br> "You stand in a peculiar room... (your starting scene)',
    image: '/images/mainroom.jpg',
    choices: [
      { text: 'Choice 1 - "Examine the contents of the desk drawer."', nextSceneIndex: 1 },
      { text: 'Choice 2 - "Carefully look under the couch for any hidden items or clues" ', nextSceneIndex: 3 },
      { text: 'Choice 3 - "Take a nap, wait for a miracle. DAMAGE"', nextSceneIndex: 2, damage: 10 }, // deducts 10 health
    ],
  },
  {
    description: 'Scene 2 in Room 1 Watch <br> "A watch... hmmm, I bet this is somehow important."',
    image: '/images/watch.jpg',
    choices: [
      { text: 'GO to Main Room', nextSceneIndex: 0 },
      
    ],
  },
  {
    description: 'Scene 3 in Room 1 DEAD <br> "Still waiting to be found...."',
    image: '/images/skeleton.jpg',
    choices: [
      { text: 'GO to Main Room', nextSceneIndex: 0 },
      
    ],
  },
  {
    description: 'Scene 4 in Room 1 KEY <br> "FOUND IT! That was easy, let\'s get out of here."',
    image: '/images/key.jpg',
    choices: [
      { text: 'GO to Main Room', nextSceneIndex: 0 },
    ],
  },
];


export default TextAdventureGame;