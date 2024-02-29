// TextAdventureGame.js
import React, { useState, useEffect } from 'react';
import './Inventory.css';
import Scene from './Scene';
import GameOver from './GameOver';
import './Health.css';
import Inventory from './Inventory';

const TextAdventureGame = () => {
  const [inventory, setInventory] = useState([]);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [health, setHealth] = useState(50);
  const [gameOver, setGameOver] = useState(false);
  const addToInventory = (item) => {
    setInventory((prevInventory) => [...prevInventory, item]);
  };

  const handleChoice = (choiceIndex, damage) => {
    if (gameOver) return;
  
    const choice = scenes[currentSceneIndex].choices[choiceIndex];
    const nextSceneIndex = choice.nextSceneIndex;
  
    // checking if the choice has an item and add it to the inventory
    if (choice.item) {
      if (choice.item === 'Key' && inventory.includes('Key')) {      
        alert('You already have the Key!'); // message indicating that the key is already in the inventory
      } else {
        addToInventory(choice.item);
      }
    }
  
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
    setInventory([]);
  };

  const currentScene = scenes[currentSceneIndex];

  return (
    <div className="game-container">
      <div className="inventory-container">
        <Inventory items={inventory} />
      </div>
      <div className="scene-container">
        {gameOver && <GameOver onRestart={restartGame} />}
        <h3>Room {Math.floor(currentSceneIndex / 4) + 1}</h3>
        <div className="health-container">
          <h2 className={`health ${health <= 30 ? 'low-health' : ''}`}>Health: {health}</h2>
        </div>
        <Scene scene={currentScene} onChoice={handleChoice} />
      </div>

    </div>
  );
};

const scenes = [
  {
    description: 'Index 0 Scene 1 in Room 1 MAIN\nYou wake up to find you are lying on a cot in what appears to be a windowless hospital room. Besides the cot, the room is sparsely furnished with a small desk area and a sink in the corner. \n The last thing you recall is logging into your nightly coding bootcamp zoom meeting and having your instructor announce a special final project. \n As you begin to sit up, you experience a searing pain near your right temple. Instinctively, you reach up to grab your head and notice what feels like a shaved patch and stitches. Reeling from this discovery, you stumble to the mirror overhanging the sink.',
    image: '/images/cot_in_bunker.jpg',
    choices: [
      { text: '"Look in the mirror."', nextSceneIndex: 1},
    ],
  },
  {
    description: 'Index 1 Scene 2 in Room 1 Mirror <br> While your hand grazes over what is indeed a fresh set of stitches you have no memory of receiving, you are distracted by the reflection of a stranger in the mirror. You turn around quickly to see who is behind you, only to find that the room is completely empty. As you turn back to the mirror, you realize this stranger is you. <br /> “What happened to my face?!” you think to yourself. <br />“What?! My face looks fine- but what is with the huge gash on my head!” a voice inside your head replies. <br /> You realize the voice sounds familiar but cannott place it. <br /> “Who are you people? Where is MY face??” another voice inside your head chimes in. <br /> Suddenly, a cheerful voice cuts through the confused chatter in your mind: <br /> “Ahh, good class, you’re awake.” You recognize this voice as that of your coding bootcamp instructor, Justin. Suddenly, you recall having heard the other voices in your zoom classes- they belong to your classmates. <br /> “Welcome to your final project- well, my final project. Today, you are going to help me beta test a special, secret function of the new Neuralink brain chip. One of these chips has been implanted into each of your brains. While your bodies are all safely tucked away in different laboratories throughout the state, your consciousnesses exist here within the body of one student, X, forming a “hive mind” of sorts. <br /> Your task is simple. Together, you must figure out how to guide X out of this laboratory. Along the way, you will face several different possible courses of action. You must all vote as a group, and you may only pursue the course of action decided on by the Hivemind. <br /> Escape the laboratory, and you all pass this course! Don’t escape, and you all will just pass. Like, die. Get it?” <br /> Lets start with a simple choice: what do you want to do now?',
    image: '/images/mirror.jpg',
    choices: [
      { text: 'Option 1: Scream for help.', nextSceneIndex: 2 },
      { text: 'Option 2: Check the door handle.', nextSceneIndex: 4 },
      { text: 'Option 3: Try to remove the brain chip.', nextSceneIndex: 3 }
    ],
  },
  {
    description: 'Index 2 Scene 2 in Room 1, Option 1 You scream as loud as you can for as long as you can. When you have exhausted yourself and pause for breath, Justins voice crackles back over the loudspeaker: <br /> “Did I not mention this laboratory is in an underground bunker? Your shouting can’t even be heard from the next room, much less by anyone at surface level.”',
    image: '/images/wall_speaker.jpg',
    choices: [
      { text: 'Re-evaluate your options.', nextSceneIndex: 1 },
            
    ],
  },
  {
    description: 'Index 3 Scene 2 in Room 1, Option 3 <br> You spot a scalpel on the table and wash it off at the sink, hoping to sterilize it as much as possible. Wincing with the pain, you begin to cut into the wound on your forehead. You immediately pass out from the pain and wake up on the floor.',
    image: '/images/scalpel.jpg',
    choices: [
      { text: 'Re-evaluate your options.', nextSceneIndex: 1 },
    ],
  },
  {
    description: 'Index 4 Scene 2 in Room 1, Option 2 <br> The door is locked, but there is a keypad- you may be able to figure out the access code! But now you have to figure out how many numbers are in the code. <br /> Do you',
    image: '/images/door_handle_with_keypad.jpg',
    choices: [
      { text: 'Option 1: Start pressing random numbers.', nextSceneIndex: 5 },
      { text: 'Option 2: Ask Justin for a clue.', nextSceneIndex: 6 },
    ],
  },
  {
    description: 'Index 5,Scene 3 in Room 1 Option 1 <br> You start pressing random numbers. After you have pressed 4 numbers, a red light turns on, showing that the combination you entered was incorrect. You now know that the code has 4 digits.',
    image: '/images/handle_light.jpg',
    choices: [
      { text: 'Option 1: Continue pressing random numbers, hoping to guess the code correctly.', nextSceneIndex: 7 },
      { text: 'Option 2: Search for clues inside the room.', nextSceneIndex: 9 },
      { text: 'Option 3: Give up and wait to be rescued.', nextSceneIndex: 8 }
    ],
  },
 {
    description: 'Index 6, Scene 3 in Room 1, Option 2 <br> You ask Justin for a clue. He gives you a puzzle to solve. You solve the puzzle. The answer is 4. Justin then tells you this means that there are 4 digits to the combination.',
    image: '/images/speech_bubble.jpg',
    choices: [
      { text: 'Option 1: Press random numbers, hoping to guess the code correctly.', nextSceneIndex: 7 },
      { text: 'Option 2: Search for clues inside the room.', nextSceneIndex: 9 },
      { text: 'Option 3: Give up and wait to be rescued.', nextSceneIndex: 8 },
   ],
  },
  {
    description: 'Index 7, Scene 4 in Room 1, Option 1 <br> After 10 minutes of trying random codes, Justins voice screeches “C’mon, dude, this isn’t working for you. There are 10,000 possible combinations for this code. Think of something else!”',
    image: '/images/wall_speaker.jpg',
    choices: [
      { text: 'Re-evaluate your options.', nextSceneIndex: 5 },
    ],
  },
  {
    description: 'Index 8 Scene 4 in Room 1, Option 3 <br> You do not pass your coding bootcamp. Because it was an online course, no one ever notices that you are missing from campus. [GAME OVER]',
    image: '/images/skeleton.jpg',
    choices: [
    ],
  },
  {
    description: 'Index 9 Scene 4 in Room 1, Option 2 <br> You start to search for clues around the room. Eventually, your eye falls on the pile of papers on the desk. Rifling through them, you notice an empty sudoku with 4 boxes highlighted in different colors. You realize these must correspond to the door code.',
    image: '/images/sudoku.png',
    choices: [
      { text: 'Option 1: Solve the sudoku puzzle.', nextSceneIndex: 1 },
      { text: 'Option 2: Search for other clues.', nextSceneIndex: 1 }
    ],
  },
  // {
  //   description: 'Index 10 Scene 5 in Room 1, Option 1 <br> ',
  //   image: '/images/scalpel.jpg',
  //   choices: [
  //     { text: 'Re-evaluate your options', nextSceneIndex: 1 },
  //   ],
  // },
];

export default TextAdventureGame;