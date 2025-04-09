import React, { useState } from 'react';
import arrowIcon from '../assets/arrow.svg';

function FeaturedSection({ searchTerm = '', onServiceSelect }) {
  const [activeTab, setActiveTab] = useState('individual');

  const featuredItems = [
    {
      id: 2,
      image: 'https://s3-alpha-sig.figma.com/img/f50e/d396/8acc9477cf1e875deee44ed90f9f5d25?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D19emqvdiGU8Zj1Rfg1rzu6MKGLor27feKPx4~VzL5yFuR6A2UAppoDRwWdd~-D4eccnp2nh3TI81t5rfrjJ2wepMrthj0Z7IhCl8zyYGcuA7RYFOdwLDDscn3KNL~LD9uj5cH2Z7njGNFRL3vMtrBMiavwJSMJrQ6laHDH4RPAnd9OY36Ha~D9EnWbLXlxuaJjtRmcip2492atnS7Ak~Pq4TFYJxGCwKTc10BoC1xbPi1ZZHXOlhjujgyHNUtOEJMN2I3ny5ShYpzesX5O5rFI3ziRSatapsPpAMPx6tkOZiuhyFQhPjKqV8QZp6R~8sKHmD4-t~UZClp4InlLhCQ__',
      price: '200 TL\'den başlayan fiyatlar...',
      title: 'Mutfak Servisi',
      category: 'individual'
    },


    {
      id: 1,
      image: 'https://s3-alpha-sig.figma.com/img/1105/47b2/740fad2ea4836b5b0831b6f3b8cb9504?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tSi6wMA-l4~OC8Og~GAMrq1q7gwupQyXDggompbMBO7iGiCt64SvIh0sr94w3XW~WHs4gTxFZEYxK4lplSTTPKcF2MmwZoP7OCV5zx3VNgujODAJ5sTF0Un6pEVAuw2--C8-AXi4Y0zOzt2c57LxBKpp16DXz9V3K0UOn8~LnP1v0EaoJ2ZKsfdk-7Gjske75CDpXOVTRI3uz-3-etSduH~XC69MSlLhY2ynf4mILKHBetW9Ty6pmIkTl0m7WU9SX1xzN6geDEH9pBade0PPGIBga84~Qzo16vIIP7XFmAU3l2eNWxEWYRyRg4YDaOOKDoBlA7iSqQV5KCvzYbQX9w__',
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