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

  const [Voted, setVoted] = useState(false);
  

  let username = "Justin";

  const { response, startTimer, counter, sendCounter, handleVote } = useSocketHook();

  useEffect (()=>{
    if (counter <= 0) {
      nextScene(handleVote)
      setVoted(false)
      sendCounter(0, username)
      
    }
  },[counter]);


  const nextScene = (choice) => {
    switch (choice) {
      case 1:
          setScenario({
            description1: 'You open the door and find a key on the floor.',
            choice1: ['Pick up the key'],
            choice2: ['Explore the room further'],
            images: ['/images/image2.jpg', '/images/room.jpg'], 
          });
        break;
      case 2:
        setScenario({
          description1: 'You see a beautiful landscape outside.',
          choice1: ['Go back inside'],
          choice2: ['Jump out the window'],
          images: ['/images/image3.jpg', '/images/window.jpg'], 
        });
        break;
      case 3:
        setScenario({
          description1: 'You now have the key in your inventory.',
          choice1: ['Explore the room further'],
          choice2: [ 'Use the key on the locked chest'],
          images: ['/images/image4.jpg', '/images/chest.jpg'], 
        });
        break;
      case 4:
        setScenario({
          description1: 'You find a mysterious book on the shelf.',
          choice1: ['Read the book'],
          choice2: ['Ignore the book'],
          images: ['/images/image1.jpg', '/images/mysterious-book.jpg'], 
        });
        break;
      case 5:
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

  const handleChoice = (choice) => {
    setVoted(true)
    switch (choice) {
      case 'Open the door':
        sendCounter(1, username);
        
        break;
      case 'Look out the window':
        sendCounter(2,username);
        break;
      case 'Pick up the key':
        sendCounter(3,username);
        break;
      case 'Explore the room further':
        sendCounter(4,username);
        break;
      case 'Use the key on the locked chest':
        sendCounter(5,username);;
        break;
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
            <button disabled ={Voted} onClick={() => handleChoice(choice)}>{choice}</button>
            {response.length !== 0 && 
            response.map((item, index) => (
              <h1>{item.vOne}</h1>  
            ))
        }
          </li>
        ))}
        {scenario.choice2.map((choice, index) => (
          <li key={index}>
            <button disabled ={Voted} onClick={() => handleChoice(choice)}>{choice}</button>
            {response.length !== 0 && 
            response.map((item, index) => (
              <h1>{item.vTwo}</h1>  
            ))
        }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextAdventureGame;