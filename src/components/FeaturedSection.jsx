import React, { useState } from 'react';
import arrowIcon from '../assets/arrow.svg';
import { featuredItems } from '../data/mockData';

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
          <div style={{ 
            width: '154px',
            height: '40px',
            borderRadius: '10px',
            borderRightWidth: '1px',
            borderLeftWidth: '1px',
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#E6E8EC',
            background: 'linear-gradient(90deg, #E5EEFF 0%, #FFFFFF 27%, #E6EFFF 63%, #FFFFFF 95%)',
            boxShadow: 'inset 0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            padding: '2px 4px'
          }}>
            <button 
              type="button" 
              onClick={() => setActiveTab('individual')}
              style={{ 
                width: '65px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: activeTab === 'individual' ? '#FFFFFF' : 'transparent',
                border: activeTab === 'individual' ? '0.5px solid #E6E8EC' : 'none',
                padding: '0 10px',
                fontSize: '13px',
                color: '#3B3E45',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: activeTab === 'individual' ? '0px 2px 4px rgba(0, 0, 0, 0.06)' : 'none',
                position: 'relative',
                zIndex: activeTab === 'individual' ? 2 : 1
              }}
            >
              Bireysel
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('corporate')}
              style={{ 
                width: '65px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: activeTab === 'corporate' ? '#FFFFFF' : 'transparent',
                border: activeTab === 'corporate' ? '0.5px solid #E6E8EC' : 'none',
                padding: '0 10px',
                fontSize: '13px',
                color: '#3B3E45',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: activeTab === 'corporate' ? '0px 2px 4px rgba(0, 0, 0, 0.06)' : 'none',
                position: 'relative',
                zIndex: activeTab === 'corporate' ? 2 : 1,
                marginLeft: 'auto'
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
                style={{ 
                  minWidth: '280px', 
                  maxWidth: '280px',
                  flexShrink: 0 
                }}
              >
                <div 
                  className="featured-card position-relative rounded-4 overflow-hidden"
                  onClick={() => handleServiceClick(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-100" 
                    style={{ height: '175px', objectFit: 'cover' }}
                  />
                  <div 
                    className="featured-overlay position-relative position-absolute bottom-0 start-0 text-white"
                    style={{ 
                      width: 'calc(100% - 8px)', 
                      height: '74px', 
                      borderRadius: '10px',
                      background: '#FFFFFF33',
                      backdropFilter: 'blur(8px)',
                      margin: '4px',
                      padding: '12px'
                    }}
                  >
                    <p className="mb-1 small">{item.price}</p>
                    <h5 className="mb-0 fs-5 fw-bold">{item.title}</h5>
                    
                    <div 
                      className="arrow-icon position-absolute d-flex justify-content-center align-items-center"
                      style={{ 
                        width: '36px', 
                        height: '36px', 
                        top: '0px', 
                        right: '0px',
                        borderRadius: '90px',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        transform: 'rotate(-12.5deg)',
                        margin: '4px'
                      }}
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
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-100" 
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div 
                    className="featured-overlay position-relative position-absolute bottom-0 start-0 text-white"
                    style={{ 
                      width: 'calc(100% - 8px)', 
                      height: '74px', 
                      borderRadius: '10px',
                      background: '#FFFFFF33',
                      backdropFilter: 'blur(8px)',
                      margin: '4px',
                      padding: '12px'
                    }}
                  >
                    <p className="mb-1 small">{item.price}</p>
                    <h5 className="mb-0 fs-5 fw-bold">{item.title}</h5>
                    
                    <div 
                      className="arrow-icon position-absolute d-flex justify-content-center align-items-center"
                      style={{ 
                        width: '34px', 
                        height: '34px', 
                        top: '0px', 
                        right: '0px',
                        borderRadius: '90px',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        transform: 'rotate(135deg)'
                      }}
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
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default FeaturedSection; 