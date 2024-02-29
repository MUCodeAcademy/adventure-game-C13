// Inventory.js
import React from 'react';

const Inventory = ({ items }) => {
  return (
    <div className="inventory-container">
      <h3>Inventory:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
