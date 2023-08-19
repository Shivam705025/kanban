// src/components/KanbanBoard.js
import React, { useState, useEffect } from "react";
import { fetchTickets, fetchUsers } from "../api";
import Column from "./Column";
import Card from "./Card";
import "./KanbanBoard.css";

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");
  const [displayOptionsVisible, setDisplayOptionsVisible] = useState(false);

  useEffect(() => {
    fetchTickets().then((ticketData) => setTickets(ticketData));
    fetchUsers().then((userData) => setUsers(userData));
  }, []);

  const toggleDisplayOptions = () => {
    setDisplayOptionsVisible(!displayOptionsVisible);
  };

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
      {/* Display Menu */}
      <div className="display-menu">
        <button className="menu-button" onClick={toggleDisplayOptions}>
          Display
        </button>
        <br />
        {displayOptionsVisible && (
          <div className="display-options">
            <div className="options">
              <div className="option">
                <label>Grouping:</label>
                <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                  <option value="status">By Status</option>
                  <option value="user">By User</option>
                  {/* Add more grouping options */}
                </select>
              </div>
              <div className="option">
                <label>Ordering:</label>
                <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                  {/* Add more sorting options */}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Columns */}
      {sortedGroups.map((groupKey) => (
        <Column key={groupKey} title={groupKey} tickets={groupedTickets[groupKey]} users={users} />
      ))}
    </div>
  );
}

export default KanbanBoard;
