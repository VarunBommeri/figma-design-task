import React from "react";
import "./ActionLauncher.css";

function ActionLauncher() {
  const handleActionClick = (action) => {
    // Replace with your actual API endpoint
    fetch(`https://api.example.com/actions/${action}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((result) => alert(`Action "${action}" executed successfully!`))
      .catch((error) => console.error(`Error executing action "${action}":`, error));
  };

  return (
    <div className="action-launcher">
      <h3>Action Launcher</h3>
      <button onClick={() => handleActionClick("add-note")}>Add Note</button>
      <button onClick={() => handleActionClick("mark-complete")}>Mark as Complete</button>
      <button onClick={() => handleActionClick("escalate")}>Escalate</button>
    </div>
  );
}

export default ActionLauncher;

