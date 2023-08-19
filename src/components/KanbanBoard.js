// src/components/KanbanBoard.js
import React, { useState, useEffect } from "react";
import { fetchTickets, fetchUsers } from "../api";
import Column from "./Column";
import Card from "./Card";
import "./KanbanBoard.css"; // Import CSS file for KanbanBoard

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  useEffect(() => {
    fetchTickets().then((ticketData) => setTickets(ticketData));
    fetchUsers().then((userData) => setUsers(userData));
  }, []);

  const groupedTickets = {};
  tickets.forEach((ticket) => {
    const groupValue = grouping === "user" ? ticket.userId : ticket[grouping];
    if (!groupedTickets[groupValue]) {
      groupedTickets[groupValue] = [];
    }
    groupedTickets[groupValue].push(ticket);
  });

  const sortedGroups = Object.keys(groupedTickets).sort();
  sortedGroups.forEach((groupKey) => {
    groupedTickets[groupKey].sort((a, b) => a[sorting] - b[sorting]);
  });

  return (
    <div className="kanban-board">
      <div className="options">
        <select
          value={grouping}
          onChange={(e) => setGrouping(e.target.value)}
        >
          <option value="status">By Status</option>
          <option value="user">By User</option>
          {/* Add more grouping options */}
        </select>
        <select
          value={sorting}
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
          {/* Add more sorting options */}
        </select>
      </div>
      {sortedGroups.map((groupKey) => (
        <Column key={groupKey} title={groupKey} tickets={groupedTickets[groupKey]} />
      ))}
    </div>
  );
}

export default KanbanBoard;
