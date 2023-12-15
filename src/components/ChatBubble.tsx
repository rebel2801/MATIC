// ChatBubble.tsx
import React from "react";

interface ChatBubbleProps {
  message: string;
  sender: string;
  imageData?: string; // Added imageData prop for image messages
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender, imageData }) => {
  return (
    <div className={`chat-bubble ${sender === "me" ? "me" : "other"}`}>
      {imageData ? (
        // If imageData is present, render an img element
        <img src={imageData} alt="Captured" className="max-w-full" />
      ) : (
        // Otherwise, render the text message
        <p>{message}</p>
      )}
    </div>
  );
};

export default ChatBubble;
