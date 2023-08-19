// src/components/Column.js
import React from "react";
import Card from "./Card";
import "./Column.css"; // Import the corresponding CSS file

function Column({ title, tickets }) {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
      </div>
      <div className="column-content">
        {tickets.map((ticket) => (
          <Card key={ticket.id} title={ticket.title} priority={ticket.priority} userId={ticket.userId} />
        ))}
      </div>
    </div>
  );
}

export default Column;
