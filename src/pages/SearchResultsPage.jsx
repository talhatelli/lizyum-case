import React from 'react';
import Header from '../components/Header';
import { colors } from '../utils/colors';
import cleaningIcon from '../assets/cleaning-icon.svg';
import messageSentIcon from '../assets/icon-park-solid_message-sent.svg';
import dotsMenuIcon from '../assets/entypo_dots-three-vertical.svg';

function SearchResultsPage({ searchTerm = "Temizlik Şirketi", onBack, onServiceSelect }) {
  // Dummy data to display search results
  const searchResults = [
    {
      id: 1,
      name: "Lorem Ipsum Temizlik",
      rating: 4.0,
      reviewCount: 200,
      price: "₺ 500",
      description: "den başlayan fiyatlarla",
      image: cleaningIcon
    },
    {
      id: 2,
      name: "Lorem Ipsum Temizlik",
      rating: 4.0,
      reviewCount: 200,
      price: "₺ 500",
      description: "den başlayan fiyatlarla",
      image: cleaningIcon
    },
    {
      id: 3,
      name: "Lorem Ipsum Temizlik",
      rating: 4.0,
      reviewCount: 200,
      price: "₺ 500",
      description: "den başlayan fiyatlarla",
      image: cleaningIcon
    }
  ];

  // Card styling based on the provided CSS
  const cardStyle = {
    borderRadius: '10px',
    padding: '16px 10px',
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
    cursor: 'pointer'
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

  return (
    <div className="search-results-page">
      <Header onSearch={() => {}} placeholder={searchTerm} />
      
      <div className="container-fluid px-3 py-3" style={{ backgroundColor: colors.backgroundColor ,minHeight: '100vh'}}>
        {searchResults.map((result) => (
          <div 
            key={result.id} 
            className="result-card" 
            style={cardStyle}
            onClick={() => onServiceSelect && onServiceSelect(result.id)}
          >
            {/* Menu icon */}
            <div style={menuIconStyle} onClick={handleMenuClick}>
              <img src={dotsMenuIcon} alt="Menu" width="20" height="20" />
            </div>
            
            <div className="d-flex flex-column">
              {/* Top section with image and name/rating */}
              <div className="d-flex">
                <div className="result-image me-3">
                  <img 
                    src={result.image} 
                    alt={result.name} 
                    style={{ 
                      width: '56px', 
                      height: '56px', 
                      borderRadius: '50%',
                      backgroundColor: '#F0F5FF',
                      padding: '8px'
                    }} 
                  />
                </div>
                <div className="result-details flex-grow-1">
                  <h5 className="mb-1">{result.name}</h5>
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2">{result.rating}</span>
                    <div className="rating-stars me-2">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`bi bi-star${i < Math.floor(result.rating) ? '-fill' : ''}`}
                          style={{ color: i < Math.floor(result.rating) ? '#FFC107' : '#B0B7C3' }}
                        ></i>
                      ))}
                    </div>
                    <span style={{ color: '#007BFF' }}>({result.reviewCount} değerlendirme)</span>
                  </div>
                </div>
              </div>
              
              {/* Bottom section with message button and price - NOW ON THE SAME LINE */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <button 
                    style={messageButtonStyle} 
                    onClick={(e) => handleMessageClick(e, result.id)}
                  >
                    <img src={messageSentIcon} alt="Message" className="me-2" style={{ width: '20px', height: '20px' }} />
                    <span style={messageTextStyle}>Mesaj At</span>
                  </button>
                </div>
                
                <div className="price-section text-end">
                  <div className="d-flex align-items-baseline">
                    <h5 style={{ marginBottom: '0', fontWeight: 'bold', fontSize: '22px' }}>{result.price}</h5>
                    <p style={{ marginBottom: '0', fontSize: '14px', color: '#6C757D', marginLeft: '2px' }}>{result.description}</p>
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