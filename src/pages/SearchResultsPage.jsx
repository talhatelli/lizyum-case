import React from 'react';
import Header from '../components/Header';
import { getSearchResultsData } from '../data/searchResultsData';
import { getSearchResultsStyles } from '../styles/searchResultsStyles';

function SearchResultsPage({ searchTerm = "Temizlik Şirketi", onServiceSelect }) {
  const data = getSearchResultsData(searchTerm);
  const styles = getSearchResultsStyles();

  const handleMessageClick = (e, id) => {
    e.stopPropagation(); 
  };

  const handleMenuClick = (e) => {
    e.stopPropagation(); 
  };
  
  const handleCardClick = (id) => {
    if (onServiceSelect) {
      onServiceSelect(id);
    }
  };

  return (
    <div className="search-results-page">
      <Header onSearch={() => {}} placeholder={data.searchTerm} />
      
      <div className="container-fluid px-3 py-3" style={styles.container}>
        {data.results.map((result) => (
          <div 
            key={result.id} 
            className="result-card" 
            style={styles.card}
            onClick={() => handleCardClick(result.id)}
          >
            <div style={styles.menuIcon} onClick={handleMenuClick}>
              <img src={data.icons.dotsMenu} alt="Menu" width="20" height="20" />
            </div>
            
            <div style={styles.contentWrapper}>
              <div className="d-flex mb-2">
                <div style={styles.imageContainer}>
                  <img 
                    src={result.image} 
                    alt={result.name} 
                    style={styles.companyImage} 
                  />
                </div>
                
                <div>
                  <h5 style={styles.companyName}>{result.name}</h5>
                  
                  <div style={styles.ratingWrapper}>
                    <div style={styles.ratingValue}>{Math.floor(result.rating)}</div>
                    
                    <div style={styles.starsContainer}>
                      {[...Array(Math.floor(result.rating))].map((_, i) => (
                        <i 
                          key={i} 
                          className="bi bi-star-fill"
                          style={styles.starFilled}
                        ></i>
                      ))}
                      {result.rating % 1 >= 0.5 && (
                        <i 
                          className="bi bi-star-half"
                          style={styles.starFilled}
                        ></i>
                      )}
                      {[...Array(5 - Math.ceil(result.rating))].map((_, i) => (
                        <i 
                          key={i} 
                          className="bi bi-star"
                          style={styles.starEmpty}
                        ></i>
                      ))}
                      
                      <div style={styles.reviewCount}>({result.reviewCount} değerlendirme)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={styles.footer}>
                <button 
                  style={styles.messageButton} 
                  onClick={(e) => handleMessageClick(e, result.id)}
                >
                  <img src={data.icons.messageSent} alt="Message" className="me-2" style={{ width: '20px', height: '20px' }} />
                  <span style={styles.messageText}>Mesaj At</span>
                </button>
                
                <div style={styles.priceContainer}>
                  <span style={styles.currencySymbol}>{result.price}</span>
                  <span style={styles.priceAmount}>{result.amount}</span>
                  <span style={styles.priceDescription}>{result.description}</span>
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