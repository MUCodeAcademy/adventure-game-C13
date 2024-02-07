import React, { useState } from 'react';
import Scene from './Scene';

const TextAdventureGame = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  const handleChoice = (choiceIndex) => {
    const nextSceneIndex = scenes[currentSceneIndex].choices[choiceIndex].nextSceneIndex;
    setCurrentSceneIndex(nextSceneIndex);
  };

  const currentScene = scenes[currentSceneIndex];

  return (
    <div className="scene-container">
      <h1>Room {Math.floor(currentSceneIndex / 5) + 1}</h1>
      <Scene scene={currentScene} onChoice={handleChoice} />
    </div>
  );
};


const scenes = [
  {
    description: 'Scene 1 in Room 1 MAIN <br> "You awaken in a peculiar room. Light filters in through the ceiling window. As you begin to survey your surroundings, you attempt to recall what happened..."',
    image: '/images/mainroom.jpg',
    choices: [
      { text: 'Choice 1 - "Examine the contents of the desk drawer."', nextSceneIndex: 1 },
      { text: 'Choice 2 - "Carefully look under the couch for any hidden items or clues" ', nextSceneIndex: 3 },
      { text: 'Choice 3 - "Take a nap, wait for a miracle."', nextSceneIndex: 2 },
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