import RobotProfileImage from "../assets/download.jpeg";
import UserProfileImage from "../assets/user.png";

function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user" ? "chat-message-user" : "chat-message-robot"}>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="robot-img" alt="robot avatar" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="user-img" alt="user avatar" />
      )}
    </div>
  );
}

export default ChatMessage;
