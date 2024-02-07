// Choices.js
import React from 'react';
import './Choices.css';

const Choices = ({ choices, onChoice }) => (
  <ul className="choices-container">
    {choices.map((choice, index) => (
      <li key={index}>
        <button onClick={() => onChoice(index)}>{choice.text}</button>
      </li>
    ))}
  </ul>
);

export default Choices;
