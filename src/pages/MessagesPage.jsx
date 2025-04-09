import React, { useState } from 'react';
import { colors } from '../utils/colors';
import ChatDetail from '../components/ChatDetail';
import Header from '../components/Header';

function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  
  const chatGroups = [
    {
      date: 'Bugün',
      chats: [
        {
          id: 1,
          name: 'Ali Yılmaz',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          lastMessage: 'Merhaba, hizmetiniz hakkında bilgi almak istiyorum',
          time: '09:41',
          unread: 2,
          isOnline: true
        },
        {
          id: 2,
          name: 'Ayşe Demir',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          lastMessage: 'Teşekkürler, görüşmek üzere',
          time: '08:23',
          unread: 0,
          isOnline: true
        }
      ]
    },
    {
      date: 'Dün',
      chats: [
        {
          id: 3,
          name: 'Mehmet Kaya',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
          lastMessage: 'Tamam, anlaştık o zaman',
          time: '22:15',
          unread: 0,
          isOnline: false
        },
        {
          id: 4,
          name: 'Zeynep Çelik',
          avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
          lastMessage: 'Hizmetinizi çok beğendim, tekrar teşekkürler',
          time: '16:30"',
          unread: 0,
          isOnline: false
        },
        {
          id: 5,
          name: 'Can Yücel',
          avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
          lastMessage: 'Detayları mail olarak gönderebilir misiniz?',
          time: '15:22',
          unread: 1,
          isOnline: false
        }
      ]
    }
  ];

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackToList = () => {
    setSelectedChat(null);
  };

  const handleSearch = (term) => {
    setSearchQuery(term);
  };

  if (selectedChat) {
    return <ChatDetail chat={selectedChat} onBack={handleBackToList} />;
  }
  
  const filterChats = (chats) => {
    return chats.filter(chat => 
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  const filteredChatGroups = chatGroups.map(group => ({
    ...group,
    chats: filterChats(group.chats)
  })).filter(group => group.chats.length > 0);

  return (
    <div className="messages-page d-flex flex-column h-100">
      <div className="messages-header">
        <Header
          title="Mesajlar"
          onSearch={handleSearch}
          placeholder="Aramak istediğiniz mesajı yazın"
        />
      </div>
      
      <div className="chat-list flex-grow-1" style={{ overflowY: 'auto' }}>
        {filteredChatGroups.length === 0 ? (
          <div className="text-center py-5">
            <i className="bi bi-search fs-1 text-muted"></i>
            <p className="mt-3 text-muted">Aramanıza uygun mesaj bulunamadı.</p>
          </div>
        ) : (
          filteredChatGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="chat-group">
                 <div className="date-divider px-3 py-2 d-flex align-items-center">
                <span className="mb-0 fw-bold text-start" style={{ color: '#404040' }}>{group.date}</span>
              </div>
              
              
              {group.chats.map(chat => (
                <div 
                  key={chat.id} 
                  className="chat-item d-flex align-items-center px-3 py-3 mb-1" 
                  style={{ 
                    cursor: 'pointer'
                  }}
                  onClick={() => handleChatClick(chat)}
                >
                  <div className="position-relative">
                    <img 
                      src={chat.avatar} 
                      alt={chat.name} 
                      className="rounded-circle"
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                    {chat.isOnline && (
                      <div className="online-indicator position-absolute" 
                           style={{ 
                             width: '12px', 
                             height: '12px', 
                             backgroundColor: '#4CAF50', 
                             borderRadius: '50%', 
                             border: '2px solid white',
                             bottom: '2px',
                             right: '2px'
                           }}>
                      </div>
                    )}
                  </div>
                  <div className="chat-content ms-3 flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0 fw-bold">{chat.name}</h6>
                      <span className="text-muted small">{chat.time}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0 text-muted text-truncate" style={{ maxWidth: '200px' }}>
                        {chat.lastMessage}
                      </p>
                      {chat.unread > 0 && (
                        <span className="badge rounded-pill" 
                              style={{ 
                                backgroundColor: colors.activeTab,
                                color: 'white',
                                fontSize: '11px',
                                minWidth: '20px'
                              }}>
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MessagesPage; 