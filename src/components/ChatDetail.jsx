import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { chatStyles } from '../styles/chatStyles';
import { messageGroups as defaultMessageGroups } from '../data/chatData';

function ChatDetail({ chat, onBack }) {
  const [newMessage, setNewMessage] = useState('');
  const [messageGroups, setMessageGroups] = useState([]);
  
  useEffect(() => {
    const updatedGroups = defaultMessageGroups.map(group => ({
      ...group,
      messages: group.messages.map(message => {
        if (message.sender.id === 'user') {
          return {
            ...message,
            sender: {
              id: chat.id,
              name: chat.name,
              avatar: chat.avatar
            }
          };
        }
        return message;
      })
    }));
    
    setMessageGroups(updatedGroups);
  }, [chat]);

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    setNewMessage('');
  };

  return (
    <div className="chat-detail d-flex flex-column" style={chatStyles.container}>
      <div className="chat-header px-3 py-3 d-flex align-items-center bg-white" style={chatStyles.header}>
        <button 
          className="btn border-0 me-2 p-1" 
          onClick={onBack}
          style={chatStyles.backButton}
        >
          <i className="bi bi-arrow-left fs-5"></i>
        </button>
        <img 
          src={chat.avatar} 
          alt={chat.name} 
          className="rounded-circle me-3"
          style={chatStyles.avatar}
        />
        <div className="flex-grow-1">
          <h6 className="mb-0 fw-bold">{chat.name}</h6>
          <small className="text-muted">{chat.isOnline ? 'Çevrimiçi' : 'Son görülme: Bugün 08:30'}</small>
        </div>
        <div className="d-flex">
          <button className="btn border-0 p-2" style={chatStyles.actionButton}>
            <i className="bi bi-telephone"></i>
          </button>
          <button className="btn border-0 p-2" style={chatStyles.actionButton}>
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </div>

      <div className="chat-messages p-3 flex-grow-1" style={chatStyles.messageContainer}>
        {messageGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="message-group mb-4">
            <div className="text-center mb-3">
              <small style={chatStyles.datePill}>{group.date}</small>
            </div>
            
            {group.messages.map((message) => (
              <ChatMessage 
                key={message.id} 
                message={message} 
                isOwn={message.sender.id === 'me'} 
              />
            ))}
          </div>
        ))}
      </div>

      <div className="message-input p-2 d-flex align-items-center bg-white" style={chatStyles.inputContainer}>
        <button className="btn border-0 p-1 me-2" style={chatStyles.iconButton}>
          <i className="bi bi-plus-circle fs-5 text-muted"></i>
        </button>
        <div className="input-group flex-grow-1">
          <input 
            type="text" 
            className="form-control rounded-pill border-0"
            placeholder="Mesaj yazın..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            style={chatStyles.textInput}
          />
        </div>
        {newMessage.trim() ? (
          <button 
            className="btn border-0 p-1 ms-2" 
            onClick={handleSend}
            style={chatStyles.iconButton}
          >
            <i className="bi bi-send-fill" style={chatStyles.sendIcon}></i>
          </button>
        ) : (
          <button className="btn border-0 p-1 ms-2" style={chatStyles.iconButton}>
            <i className="bi bi-mic fs-5" style={chatStyles.micIcon}></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default ChatDetail; 