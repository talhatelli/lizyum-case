import React, { useState } from 'react';
import { colors } from '../utils/colors';
import ChatDetail from '../components/ChatDetail';
import Header from '../components/Header';
import { getMessagesData } from '../data/messagesData';
import { getMessagesStyles } from '../styles/messagesStyles';

function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  
  const chatGroups = getMessagesData();
  const styles = getMessagesStyles();

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
    <div className="messages-page" style={styles.messagesPage}>
      <div className="messages-header">
        <Header
          title="Mesajlar"
          onSearch={handleSearch}
          placeholder="Aramak istediğiniz mesajı yazın"
        />
      </div>
      
      <div className="chat-list" style={styles.chatList}>
        {filteredChatGroups.length === 0 ? (
          <div style={styles.emptySearch}>
            <i className="bi bi-search" style={styles.emptySearchIcon}></i>
            <p style={styles.emptySearchText}>Aramanıza uygun mesaj bulunamadı.</p>
          </div>
        ) : (
          filteredChatGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="chat-group">
              <div style={styles.dateDivider}>
                <span style={styles.dateText}>{group.date}</span>
              </div>
              
              {group.chats.map(chat => (
                <div 
                  key={chat.id} 
                  style={styles.chatItem}
                  onClick={() => handleChatClick(chat)}
                >
                  <div style={styles.avatarContainer}>
                    <img 
                      src={chat.avatar} 
                      alt={chat.name}
                      style={styles.avatar}
                    />
                    {chat.isOnline && (
                      <div style={styles.onlineIndicator}></div>
                    )}
                  </div>
                  <div style={styles.chatContent}>
                    <div style={styles.chatHeader}>
                      <h6 style={styles.chatName}>{chat.name}</h6>
                      <span style={styles.chatTime}>{chat.time}</span>
                    </div>
                    <div style={styles.chatFooter}>
                      <p style={styles.lastMessage} className="text-truncate">
                        {chat.lastMessage}
                      </p>
                      {chat.unread > 0 && (
                        <span style={styles.unreadBadge}>
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