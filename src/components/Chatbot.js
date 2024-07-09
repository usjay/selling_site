import React from 'react';
import chatbotIcon from '../assets/chatbot-icon.png';

const Chatbot = () => {
  return (
    <div>
      <img src={chatbotIcon} alt="Chatbot Icon" />
      <div>
        <p>Hello! How can I help you today?</p>
      </div>
    </div>
  );
};

export default Chatbot;
