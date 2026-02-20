import { useState} from "react";
import { Chatbot } from "supersimpledev";

function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(e) {
    setInputText(e.target.value);
    console.log(inputText);
  }

  function sendText() {
    if (!inputText.trim()) {
      return;
    }
    const response = Chatbot.getResponse(inputText);

    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    console.log(response);

    setInputText("");
  }

  return (
    <div className="container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        value={inputText}
        onChange={saveInputText}
        className="chat-input"
      />
      <button onClick={sendText} className="send-button">
        Send
      </button>
    </div>
  );
}


export default ChatInput;