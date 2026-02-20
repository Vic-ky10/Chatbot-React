import { useState, useRef, useEffect } from "react";

import RobotProfileImage from "./assets/download.jpeg";
import UserProfileImage from "./assets/user.png";

import "./App.css";



function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="robot-img" alt="robot avatar" />
      )}
      <div class="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="user-img" alt="user avatar" />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
        />
      ))}
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "hello ! How can i help you",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "today is February 17 ",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput setChatMessages={setChatMessages} />
    </div>
  );
}

export default App;
