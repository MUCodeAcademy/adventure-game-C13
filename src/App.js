// App.js
import React, { useState } from 'react';
import TextAdventureGame from './components/TextAdventureGame';

const App = () => {
  const [playerHealth, setPlayerHealth] = useState(100);

  const handleDamage = (amount) => {
    setPlayerHealth((prevHealth) => Math.max(0, prevHealth - amount));
  };

  return (
    <div>
      <h1>Escape C13, your future depends on it!</h1>
      <p>Player Health: {playerHealth}</p>
      <TextAdventureGame onDamage={handleDamage} />
    </div>
  );
};

export default App;
