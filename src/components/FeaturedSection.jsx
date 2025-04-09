import React, { useState } from 'react';
import arrowIcon from '../assets/arrow.svg';
import { featuredItems } from '../data/mockData';
import { featuredStyles } from '../styles/featuredStyles';

function FeaturedSection({ searchTerm = '', onServiceSelect }) {
  const [activeTab, setActiveTab] = useState('individual');

  const handleServiceClick = (serviceId) => {
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
  };

  const filteredItems = featuredItems
    .filter(item => item.category === activeTab || activeTab === 'all')
    .filter(item => {
      if (!searchTerm) return true;
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  const noItemsFound = filteredItems.length === 0;

  return (
    <section className="featured-section mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title fw-bold mb-0">
          <span className="text-primary fw-bold fs-4">#</span> <span className="fs-4">Öne Çıkanlar</span>
        </h2>
        
        <div className="tab-buttons">
          <div style={featuredStyles.tabContainer}>
            <button 
              type="button" 
              onClick={() => setActiveTab('individual')}
              style={featuredStyles.tabButton(activeTab === 'individual')}
            >
              Bireysel
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('corporate')}
              style={{
                ...featuredStyles.tabButton(activeTab === 'corporate'),
                ...featuredStyles.corporateTab
              }}
            >
              Kurumsal
            </button>
          </div>
        </div>
      </div>

      {searchTerm && (
        <div className="mb-3">
          <p className="text-muted">
            <i className="bi bi-search me-2"></i>
            <span>"{searchTerm}" için arama sonuçları</span>
            {noItemsFound && (
              <span> - Sonuç bulunamadı</span>
            )}
          </p>
        </div>
      )}

      {noItemsFound ? (
        <div className="text-center py-5">
          <i className="bi bi-search fs-1 text-muted"></i>
          <p className="mt-3 text-muted">Aramanıza uygun öğe bulunamadı.</p>
        </div>
      ) : (
        <div className="featured-grid">
          <div className="d-md-none d-flex overflow-auto pb-2 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="me-3" 
                style={featuredStyles.mobileCardContainer}
              >
                <div 
                  className="featured-card position-relative rounded-4 overflow-hidden"
                  onClick={() => handleServiceClick(item.id)}
                  style={featuredStyles.card}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-100" 
                    style={featuredStyles.mobileCardImage}
                  />
                  <div 
                    className="featured-overlay position-relative position-absolute bottom-0 start-0 text-white"
                    style={featuredStyles.overlay}
                  >
                    <p className="mb-1 small">{item.price}</p>
                    <h5 className="mb-0 fs-5 fw-bold">{item.title}</h5>
                    
                    <div 
                      className="arrow-icon position-absolute d-flex justify-content-center align-items-center"
                      style={featuredStyles.mobileArrowIcon}
                    >
                      <img src={arrowIcon} alt="Arrow" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="row g-3 d-none d-md-flex">
            {filteredItems.map(item => (
              <div key={item.id} className="col-md-6 col-lg-4 col-xl-3">
                <div 
                  className="featured-card position-relative rounded-4 overflow-hidden mb-3"
                  onClick={() => handleServiceClick(item.id)}
                  style={featuredStyles.card}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-100" 
                    style={featuredStyles.desktopCardImage}
                  />
                  <div 
                    className="featured-overlay position-relative position-absolute bottom-0 start-0 text-white"
                    style={featuredStyles.overlay}
                  >
                    <p className="mb-1 small">{item.price}</p>
                    <h5 className="mb-0 fs-5 fw-bold">{item.title}</h5>
                    
                    <div 
                      className="arrow-icon position-absolute d-flex justify-content-center align-items-center"
                      style={featuredStyles.desktopArrowIcon}
                    >
                      <img src={arrowIcon} alt="Arrow" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <style jsx>{featuredStyles.scrollbarCSS}</style>
    </section>
  );
}

export default FeaturedSection; 