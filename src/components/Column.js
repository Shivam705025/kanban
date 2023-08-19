// src/components/Column.js
import React from "react";
import Card from "./Card";

function Column({ title, tickets }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <Card key={ticket.id} title={ticket.title} priority={ticket.priority} userId={ticket.userId} />
      ))}
    </div>
  );
}

export default Column;
