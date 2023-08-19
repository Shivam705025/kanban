// src/components/Card.js
import React from "react";

function Card({ title, priority, userId }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Priority: {priority}</p>
      <p>User: {userId}</p>
    </div>
  );
}

export default Card;
