import React, { useEffect, useState } from "react";
import "./ChatSection.css";

function ChatSection() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("https://api.example.com/chats")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching chat history:", error));
  }, []);

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      // Post the message to the API
      fetch("https://api.example.com/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sender: "You", content: newMessage }),
      })
        .then((response) => response.json())
        .then((newChat) => setMessages([...messages, newChat]))
        .catch((error) => console.error("Error sending message:", error));
      setNewMessage("");
    }
  };

  return (
    <div className="chat-section">
      <h3>Chat Section</h3>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <strong>{msg.sender}:</strong> {msg.content} <small>({msg.timestamp})</small>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatSection;
