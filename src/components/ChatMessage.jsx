import React from 'react';
import { colors } from '../utils/colors';

function ChatMessage({ message, isOwn }) {
  return (
    <div className={`d-flex mb-3 ${isOwn ? 'justify-content-end' : 'justify-content-start'}`}>
      {!isOwn && (
        <div className="me-2">
          <img 
            src={message.sender.avatar} 
            alt={message.sender.name}
            className="rounded-circle"
            style={{ width: "35px", height: "35px", objectFit: "cover" }}
          />
        </div>
      )}
      <div 
        className={`message-bubble px-3 py-2 rounded-4 ${isOwn ? 'text-white' : ''}`}
        style={{ 
          maxWidth: '75%',
          backgroundColor: isOwn ? colors.activeTab : '#FFFFFF',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}
      >
        <p className="mb-1" style={{ fontSize: '14px' }}>{message.text}</p>
        <div className="d-flex align-items-center justify-content-end">
          <small 
            className={isOwn ? 'text-white-50' : 'text-muted'} 
            style={{ fontSize: '11px' }}
          >
            {message.time}
          </small>
          
          {isOwn && (
            <span className="ms-1">
              {message.isRead ? (
                <i className="bi bi-check2-all" style={{ fontSize: '12px', color: '#8de0fd' }}></i>
              ) : (
                <i className="bi bi-check2" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}></i>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage; 