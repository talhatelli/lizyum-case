import React, { useState } from 'react';

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
          <div className="btn-group rounded-pill overflow-hidden" role="group">
            <button 
              type="button" 
              className={`btn ${activeTab === 'individual' ? 'btn-primary' : 'btn-light'} px-3 py-1`}
              onClick={() => setActiveTab('individual')}
            >
              Bireysel
            </button>
            <button 
              type="button" 
              className={`btn ${activeTab === 'corporate' ? 'btn-primary' : 'btn-light'} px-3 py-1`}
              onClick={() => setActiveTab('corporate')}
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
                  <div className="featured-overlay position-absolute bottom-0 start-0 w-100 p-3 text-white"
                       style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                    <p className="mb-1 small">{item.price}</p>
                    <h5 className="mb-0 fs-5 fw-bold">{item.title}</h5>
                  </div>
                  <div className="arrow-icon position-absolute bottom-3 end-3 bg-white rounded-circle d-flex justify-content-center align-items-center"
                       style={{ width: '32px', height: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <i className="bi bi-arrow-right"></i>
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
                  <div className="featured-overlay position-absolute bottom-0 start-0 w-100 p-3 text-white"
                       style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                    <p className="mb-1 small">{item.price}</p>
                    <h5 className="mb-0 fs-5 fw-bold">{item.title}</h5>
                  </div>
                  <div className="arrow-icon position-absolute bottom-3 end-3 bg-white rounded-circle d-flex justify-content-center align-items-center"
                       style={{ width: '32px', height: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <i className="bi bi-arrow-right"></i>
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