import React, { useState } from 'react';

const TextAdventureGame = () => {
  const [scenario, setScenario] = useState({
    description1: 'Welcome to the most amazing, TOP-rated Escape Text-Based Adventure Game!',
    description2: 'You find yourself locked in a VIRTUAL room, and it is bad; you have to escape the infamous C13 Dungeons',
    choices: ['Open the door', 'Look out the window'],
    images: ['/images/image1.jpg', '/images/landscape.jpg'],
  });

  const handleChoice = (choice) => {
    switch (choice) {
      case 'Open the door':
        setScenario({
          description1: 'You open the door and find a key on the floor.',
          choices: ['Pick up the key', 'Explore the room further'],
          images: ['/images/image2.jpg', '/images/room.jpg'], 
        });
        break;
      case 'Look out the window':
        setScenario({
          description1: 'You see a beautiful landscape outside.',
          choices: ['Go back inside', 'Jump out the window'],
          images: ['/images/image3.jpg', '/images/window.jpg'], 
        });
        break;
      case 'Pick up the key':
        setScenario({
          description1: 'You now have the key in your inventory.',
          choices: ['Explore the room further', 'Use the key on the locked chest'],
          images: ['/images/image4.jpg', '/images/chest.jpg'], 
        });
        break;
      case 'Explore the room further':
        setScenario({
          description1: 'You find a mysterious book on the shelf.',
          choices: ['Read the book', 'Ignore the book'],
          images: ['/images/image1.jpg', '/images/mysterious-book.jpg'], 
        });
        break;
      case 'Use the key on the locked chest':
        setScenario({
          description1: 'The chest opens, revealing a treasure!',
          choices: ['Celebrate your victory', 'Continue exploring'],
          images: ['/images/image2.jpg', '/images/victory.jpg'], 
        });
        break;
      // Add more cases for other choices and scenarios
      default:
        setScenario({
          description1: 'You make a choice, but nothing interesting happens.',
          choices: ['Try again'],
          images: ['/images/default.jpg'], 
        });
    }
  };

  return (
    <div>
      <h2>{scenario.description1}</h2>
      <h1>{scenario.description2}</h1>
      <img src={scenario.images[0]} alt="Scenario Image" style={{ maxWidth: '100%' }} />
      <ul>
        {scenario.choices.map((choice, index) => (
          <li key={index}>
            <button onClick={() => handleChoice(choice)}>{choice}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextAdventureGame;