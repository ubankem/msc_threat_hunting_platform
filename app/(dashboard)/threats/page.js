import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Orders = () => {
  return (
   
      <div className="orders-container">
        <h2>Cyber Threats Monitoring</h2>
        <div className="orders-buttons">
          <button className="orders-button active">ONGOING THREATS (0)</button>
          <button className="orders-button">DETECTED THREATS (0)</button>
        </div>
        <div className="orders-empty">
          <FaShoppingCart className="orders-icon" />
          <p>No Threats available</p>
          <p>All detected threats will be saved here.</p>
          <button className="shopping-button">START MONITORING</button>
        </div>
      </div>
  );
};

export default Orders;
