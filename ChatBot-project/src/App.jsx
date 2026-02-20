import { useState  } from "react";
import ChatInput from './components/Chatinput.jsx'
import ChatMessages from "./components/ChatMessages.jsx";
import RobotProfileImage from "./assets/download.jpeg";
import UserProfileImage from "./assets/user.png";
import "./App.css";


/* ChatMessage moved to src/components/ChatMessage.jsx */


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
