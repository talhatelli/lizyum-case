import React, { useState } from 'react';
import arrowIcon from '../assets/arrow.svg';

function FeaturedSection({ searchTerm = '', onServiceSelect }) {
  const [activeTab, setActiveTab] = useState('individual');

  const featuredItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '200 TL\'den başlayan fiyatlar...',
      title: 'Tamirat Servisi',
      category: 'individual'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '200 TL\'den başlayan fiyatlar...',
      title: 'Mutfak Servisi',
      category: 'individual'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '200 TL\'den başlayan fiyatlar...',
      title: 'Elektrik Servisi',
      category: 'corporate'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '200 TL\'den başlayan fiyatlar...',
      title: 'Tesisatçı',
      category: 'corporate'
    }
  ];

  // Handle service item click
  const handleServiceClick = (serviceId) => {
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
  };

  // Filter items by tab and search term
  const filteredItems = featuredItems
    .filter(item => item.category === activeTab || activeTab === 'all')
    .filter(item => {
      if (!searchTerm) return true;
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  // Show a message if no items found
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
          {/* Horizontal scrollable container for mobile */}
          <div className="d-flex overflow-auto pb-2 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
          
          {/* Desktop view - Show in grid */}
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
      
      {/* CSS for hiding scrollbar but allowing scroll */}
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