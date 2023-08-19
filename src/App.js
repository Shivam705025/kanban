// src/App.js
import React from "react";
import KanbanBoard from "./components/KanbanBoard"; // Import your KanbanBoard component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your KanbanBoard component */}
        <KanbanBoard />
      </header>
    </div>
  );
}

export default App;
