import React from 'react';
import Header from '../components/Header';
import { colors } from '../utils/colors';
import messageSentIcon from '../assets/icon-park-solid_message-sent.svg';
import dotsMenuIcon from '../assets/entypo_dots-three-vertical.svg';
import { searchResults } from '../data/mockData';

function SearchResultsPage({ searchTerm = "Temizlik Şirketi", onBack, onServiceSelect }) {
  // Card styling based on the provided CSS
  const cardStyle = {
    borderRadius: '10px',
    padding: '16px',
    gap: '10px',
    borderWidth: '1px',
    background: '#FFFFFF80', // Translucent white background
    border: '1px solid #E9EAEC',
    marginBottom: '16px',
    position: 'relative',
    cursor: 'pointer'
  };

  // Updated message button style based on the provided specifications
  const messageButtonStyle = {
    borderRadius: '8px',
    borderWidth: '1px',
    padding: '10px 14px',
    gap: '4px',
    background: '#EFF8FF',
    border: '1px solid #1570EF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    minWidth: '110px'
  };

  // Text style for the message button
  const messageTextStyle = {
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0%',
    color: '#1570EF'
  };

  // Menu icon style
  const menuIconStyle = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    cursor: 'pointer',
    zIndex: 2
  };

  // Handle message button click
  const handleMessageClick = (e, id) => {
    e.stopPropagation(); // Prevent card click
    // Handle message functionality
  };

  // Handle menu icon click
  const handleMenuClick = (e) => {
    e.stopPropagation(); // Prevent card click
    // Handle menu functionality
  };

  // Handle card click to view company details
  const handleCardClick = (id) => {
    if (onServiceSelect) {
      onServiceSelect(id);
    }
  };

  return (
    <div className="search-results-page">
      <Header onSearch={() => {}} placeholder={searchTerm} />
      
      <div className="container-fluid px-3 py-3" style={{ backgroundColor: colors.backgroundColor, minHeight: '100vh'}}>
        {searchResults.map((result) => (
          <div 
            key={result.id} 
            className="result-card" 
            style={cardStyle}
            onClick={() => handleCardClick(result.id)}
          >
            <div style={menuIconStyle} onClick={handleMenuClick}>
              <img src={dotsMenuIcon} alt="Menu" width="20" height="20" />
            </div>
            
            <div style={{ paddingRight: '15px' }}>
              <div className="d-flex mb-2">
                <div className="me-3" style={{ flexShrink: 0 }}>
                  <img 
                    src={result.image} 
                    alt={result.name} 
                    style={{ 
                      width: '56px', 
                      height: '56px', 
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }} 
                  />
                </div>
                
                <div>
                  <h5 style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold',
                    marginBottom: '4px'
                  }}>{result.name}</h5>
                  
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ 
                      fontSize: '18px', 
                      fontWeight: '500',
                      marginRight: '6px' 
                    }}>{result.rating}</div>
                    
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {[...Array(Math.floor(result.rating))].map((_, i) => (
                        <i 
                          key={i} 
                          className="bi bi-star-fill"
                          style={{ 
                            color: '#FFC107', 
                            fontSize: '15px',
                            marginRight: '1px'
                          }}
                        ></i>
                      ))}
                      {[...Array(5 - Math.floor(result.rating))].map((_, i) => (
                        <i 
                          key={i} 
                          className="bi bi-star"
                          style={{ 
                            color: '#B0B7C3', 
                            fontSize: '15px',
                            marginRight: '1px'
                          }}
                        ></i>
                      ))}
                      
                      <div style={{ 
                        color: '#007BFF', 
                        fontSize: '14px',
                        marginLeft: '6px'
                      }}>({result.reviewCount} değerlendirme)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mt-2">
                <button 
                  style={messageButtonStyle} 
                  onClick={(e) => handleMessageClick(e, result.id)}
                >
                  <img src={messageSentIcon} alt="Message" className="me-2" style={{ width: '20px', height: '20px' }} />
                  <span style={messageTextStyle}>Mesaj At</span>
                </button>
                
                <div>
                  <div className="d-flex align-items-center">
                    <span style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      marginRight: '2px',
                      marginLeft: '10px'
                    }}>{result.price}</span>
                    <span style={{ 
                      fontSize: '24px', 
                      fontWeight: 'bold', 
                      lineHeight: '1'
                    }}>{result.amount}</span>
                    <span style={{ 
                      fontSize: '14px', 
                      marginLeft: '1px',
                      marginTop: '2px'
                    }}>{result.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsPage; 