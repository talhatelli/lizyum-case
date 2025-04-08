import React, { useState } from 'react';
import { colors } from '../utils/colors';
import ChatMessage from './ChatMessage';

function ChatDetail({ chat, onBack }) {
  const [newMessage, setNewMessage] = useState('');
  
  // Sample messages for this conversation
  const messageGroups = [
    {
      date: 'Bugün',
      messages: [
        {
          id: 1,
          text: 'Merhaba, hizmetiniz hakkında bilgi almak istiyorum',
          time: '09:30',
          sender: {
            id: chat.id,
            name: chat.name,
            avatar: chat.avatar
          },
          isRead: true
        },
        {
          id: 2,
          text: 'Merhaba, tabii ki! Hangi hizmet hakkında bilgi almak istersiniz?',
          time: '09:32',
          sender: {
            id: 'me',
            name: 'Ben',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
          },
          isRead: true
        },
        {
          id: 3,
          text: 'Ev temizliği hizmetiniz hakkında fiyat bilgisi alabilir miyim?',
          time: '09:35',
          sender: {
            id: chat.id,
            name: chat.name,
            avatar: chat.avatar
          },
          isRead: true
        },
        {
          id: 4,
          text: 'Tabii ki, 2+1 ev için 350 TL, 3+1 ev için 450 TL fiyatlarımız var. Detaylı bilgi için web sitemizi de inceleyebilirsiniz.',
          time: '09:40',
          sender: {
            id: 'me',
            name: 'Ben',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
          },
          isRead: true
        },
        {
          id: 5,
          text: 'Teşekkürler, bu hafta için randevu alabilir miyim?',
          time: '09:41',
          sender: {
            id: chat.id,
            name: chat.name,
            avatar: chat.avatar
          },
          isRead: false
        }
      ]
    }
  ];

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    // Here you would normally send the message to an API
    // For now we'll just clear the input
    setNewMessage('');
  };

  return (
    <div className="chat-detail d-flex flex-column" style={{ height: '100vh', backgroundColor: '#F4F5F6' }}>
      {/* Chat Header */}
      <div className="chat-header px-3 py-3 d-flex align-items-center bg-white" 
           style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <button 
          className="btn border-0 me-2 p-1" 
          onClick={onBack}
          style={{ backgroundColor: 'transparent' }}
        >
          <i className="bi bi-arrow-left fs-5"></i>
        </button>
        <img 
          src={chat.avatar} 
          alt={chat.name} 
          className="rounded-circle me-3"
          style={{ width: "45px", height: "45px", objectFit: "cover" }}
        />
        <div className="flex-grow-1">
          <h6 className="mb-0 fw-bold">{chat.name}</h6>
          <small className="text-muted">{chat.isOnline ? 'Çevrimiçi' : 'Son görülme: Bugün 08:30'}</small>
        </div>
        <div className="d-flex">
          <button className="btn border-0 p-2" style={{ backgroundColor: 'transparent' }}>
            <i className="bi bi-telephone"></i>
          </button>
          <button className="btn border-0 p-2" style={{ backgroundColor: 'transparent' }}>
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages p-3 flex-grow-1" style={{ overflowY: 'auto', backgroundColor: '#F4F5F6' }}>
        {messageGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="message-group mb-4">
            <div className="text-center mb-3">
              <small className="text-muted bg-white px-3 py-1 rounded-pill shadow-sm">{group.date}</small>
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

      {/* Message Input */}
      <div className="message-input p-2 d-flex align-items-center bg-white" style={{ boxShadow: '0 -1px 3px rgba(0,0,0,0.1)' }}>
        <button className="btn border-0 p-1 me-2" style={{ backgroundColor: 'transparent' }}>
          <i className="bi bi-plus-circle fs-5 text-muted"></i>
        </button>
        <div className="input-group flex-grow-1">
          <input 
            type="text" 
            className="form-control rounded-pill border-0"
            placeholder="Mesaj yazın..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            style={{ backgroundColor: '#F5F5F5' }}
          />
        </div>
        {newMessage.trim() ? (
          <button 
            className="btn border-0 p-1 ms-2" 
            onClick={handleSend}
            style={{ backgroundColor: 'transparent' }}
          >
            <i className="bi bi-send-fill" style={{ color: colors.activeTab }}></i>
          </button>
        ) : (
          <button className="btn border-0 p-1 ms-2" style={{ backgroundColor: 'transparent' }}>
            <i className="bi bi-mic fs-5 text-muted"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default ChatDetail; 