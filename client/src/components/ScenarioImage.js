// ScenarioImage.js
import React from 'react';
import './ScenarioImage.css';

const ScenarioImage = ({ image, maxWidth, maxHeight }) => (
  <div className="image-container">
    <img
      src={image}
      alt="Scenario Image"
      style={{
        maxWidth,
        maxHeight,
      }}
      className="scenario-image"
    />
  </div>
);

export default ScenarioImage;