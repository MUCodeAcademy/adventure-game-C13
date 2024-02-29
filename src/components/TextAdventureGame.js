import React, { useState } from 'react';
import Timer from '../Sockets/Timer Function';
import VoteHandler from '../Sockets/VoteHandler Function';
import useSocketHook from '../Sockets/useSocket';
import { useEffect } from 'react';

const TextAdventureGame = () => {
  const [scenario, setScenario] = useState({
    description1: 'Welcome to the most amazing, TOP-rated Escape Text-Based Adventure Game!',
    description2: 'You find yourself locked in a VIRTUAL room, and it is bad; you have to escape the infamous C13 Dungeons',
    choice1: ['Open the door'],
    choice2: [ 'Look out the window'],
    images: ['/images/image1.jpg', '/images/landscape.jpg'],
  });

  let username = "Justin";

  const { response, startTimer, counter, sendCounter } = useSocketHook();

  const handleChoice = (choice) => {
    switch (choice) {
      case 'Open the door':
        sendCounter(choice, username);
        if (counter == 10 ) {
          break;
        } else {
          setScenario({
            description1: 'You open the door and find a key on the floor.',
            choice1: ['Pick up the key'],
            choice2: ['Explore the room further'],
            images: ['/images/image2.jpg', '/images/room.jpg'], 
          });
        }
        break;
      case 'Look out the window':
        setScenario({
          description1: 'You see a beautiful landscape outside.',
          choice1: ['Go back inside'],
          choice2: ['Jump out the window'],
          images: ['/images/image3.jpg', '/images/window.jpg'], 
        });
        break;
      case 'Pick up the key':
        setScenario({
          description1: 'You now have the key in your inventory.',
          choice1: ['Explore the room further'],
          choice2: [ 'Use the key on the locked chest'],
          images: ['/images/image4.jpg', '/images/chest.jpg'], 
        });
        break;
      case 'Explore the room further':
        setScenario({
          description1: 'You find a mysterious book on the shelf.',
          choice1: ['Read the book'],
          choice2: ['Ignore the book'],
          images: ['/images/image1.jpg', '/images/mysterious-book.jpg'], 
        });
        break;
      case 'Use the key on the locked chest':
        setScenario({
          description1: 'The chest opens, revealing a treasure!',
          choice1: ['Celebrate your victory'],
          choice2: ['Continue exploring'],
          images: ['/images/image2.jpg', '/images/victory.jpg'], 
        });
        break;
      // Add more cases for other choices and scenarios
      default:
        setScenario({
          description1: 'You make a choice, but nothing interesting happens.',
          choice1: ['Try again'],
          images: ['/images/default.jpg'], 
        });
    }
  };

  return (
    <div>
      {counter > 0 &&
        <h1>{counter}</h1>
      }
      <h2>{scenario.description1}</h2>
      <h1>{scenario.description2}</h1>
      <img src={scenario.images[0]} alt="Scenario Image" style={{ maxWidth: '100%' }} />
      <ul>
        {scenario.choice1.map((choice, index) => (
          <li key={index}>
            <button onClick={() => handleChoice(choice)}>{choice}</button>
          </li>
        ))}
        {scenario.choice2.map((choice, index) => (
          <li key={index}>
            <button onClick={() => handleChoice(choice)}>{choice}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextAdventureGame;