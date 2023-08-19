// src/components/Card.js
import React from "react";
import "./Card.css"; // Import the corresponding CSS file

function Card({ title, priority, userId }) {
  let priorityClassName = "";

  if (typeof priority === "string") {
    priorityClassName = priority.toLowerCase();
  } else {
    // Handle cases where priority is a number
    if (priority === 1) {
      priorityClassName = "urgent";
    } else if (priority === 2) {
      priorityClassName = "high";
    } else if (priority === 3) {
      priorityClassName = "medium";
    } else if (priority === 4) {
      priorityClassName = "low";
    }
    else if (priority === 0) {
      priorityClassName = "low";
    }
  }

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className={`priority-label ${priorityClassName}`}>
        Priority: {priority}
      </div>
      <div className="user-info">
        <div className="user-profile">
          <span className="user-initial">{userId.charAt(0)}</span>
        </div>
        <span className="user-id">User: {userId}</span>
      </div>
    </div>
  );
}

export default Card;
