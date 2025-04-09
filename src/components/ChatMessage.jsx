import React from 'react';
import { chatMessageStyles } from '../styles/chatMessageStyles';

function ChatMessage({ message, isOwn }) {
  return (
    <div style={chatMessageStyles.container(isOwn)}>
      {!isOwn && (
        <div style={chatMessageStyles.avatarContainer}>
          <img 
            src={message.sender.avatar} 
            alt={message.sender.name}
            className="rounded-circle"
            style={chatMessageStyles.avatar}
          />
        </div>
      )}
      <div 
        className={`message-bubble ${isOwn ? 'text-white' : ''}`}
        style={chatMessageStyles.messageBubble(isOwn)}
      >
        <p style={{
          ...chatMessageStyles.messageText,
          color: chatMessageStyles.messageText.color(isOwn)
        }}>
          {message.text}
        </p>
        <div style={chatMessageStyles.timeContainer}>
          <small style={chatMessageStyles.timeText(isOwn)}>
            {message.time}
          </small>
          
          {isOwn && (
            <span style={{ marginLeft: '4px' }}>
              {message.isRead ? (
                <i className="bi bi-check2-all" style={chatMessageStyles.readIndicator(true)}></i>
              ) : (
                <i className="bi bi-check2" style={chatMessageStyles.readIndicator(false)}></i>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage; 