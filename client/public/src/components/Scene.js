// Scene.js
import React from 'react';
import ScenarioImage from './ScenarioImage';
import Choices from './Choices';
import ScenarioDescription from './ScenarioDescription'; // Import the new component
import './Scene.css';

const Scene = ({ scene, onChoice }) => (
  <div className="scene-container">
    <ScenarioDescription description={scene.description} />
    <ScenarioImage image={scene.image} />
    <Choices choices={scene.choices} onChoice={onChoice} />
  </div>
);

export default Scene;
