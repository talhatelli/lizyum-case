import React from 'react';
import Header from '../components/Header';

function ServiceDetailPage({ onBack }) {
  // Sample featured services matching the image
  const featuredServices = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '200 TL\'den başlayan fiyatlar...',
      title: 'Tamirat Servisi',
      description: 'Profesyonel ekibimizle her türlü tamirat işleminizi kısa sürede tamamlıyoruz.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '200 TL\'den başlayan fiyatlar...',
      title: 'Mutfak Servisi',
      description: 'Mutfağınızdaki her türlü arıza ve tamirat işlemleri için profesyonel çözümler.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '200 TL\'den başlayan fiyatlar...',
      title: 'Elektrik Servisi',
      description: 'Elektrik tesisatı ve tamiri için hızlı ve güvenilir hizmet.'
    }
  ];

  return (
    <div className="service-detail-page">
      {/* Custom Header with Back Button */}
      <div className="custom-header bg-white p-3 d-flex align-items-center">
        <button 
          className="btn border-0 me-2 p-1" 
          onClick={onBack}
          style={{ backgroundColor: 'transparent' }}
        >
          <i className="bi bi-arrow-left fs-5"></i>
        </button>
        <h1 className="mb-0 fw-bold fs-5">Servis Detayı</h1>
      </div>
      
      <div className="container-fluid p-0">
        {/* Featured Services Section */}
        <section className="featured-services-section mb-4">
          <div className="px-3 pt-2 pb-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="section-title fw-bold mb-0 fs-4">
                <span className="text-primary fw-bold">#</span> Öne Çıkanlar
              </h2>
              
              <div className="tab-buttons">
                <div className="btn-group rounded-pill overflow-hidden" role="group">
                  <button 
                    type="button" 
                    className="btn btn-primary px-3 py-1"
                  >
                    Bireysel
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-light px-3 py-1"
                  >
                    Kurumsal
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Horizontal scrollable services */}
          <div className="d-flex overflow-auto pb-3 hide-scrollbar px-3" 
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {featuredServices.map(service => (
              <div 
                key={service.id} 
                className="me-3" 
                style={{ 
                  minWidth: '275px', 
                  maxWidth: '275px',
                  flexShrink: 0 
                }}
              >
                <div className="featured-card position-relative rounded-4 overflow-hidden shadow-sm">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-100" 
                    style={{ height: '170px', objectFit: 'cover' }}
                  />
                  <div className="featured-overlay position-absolute bottom-0 start-0 w-100 p-3 text-white"
                       style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                    <p className="mb-1 small">{service.price}</p>
                    <h5 className="mb-0 fs-5 fw-bold">{service.title}</h5>
                  </div>
                  <div className="arrow-icon position-absolute bottom-3 end-3 bg-white rounded-circle d-flex justify-content-center align-items-center"
                       style={{ width: '32px', height: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Service Details */}
        <section className="service-details p-3">
          <div className="card border-0 rounded-4 mb-4">
            <div className="card-body p-3">
              <h3 className="card-title fw-bold mb-3">Servis Hakkında</h3>
              <p className="card-text text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit.
              </p>
            </div>
          </div>
          
          <div className="card border-0 rounded-4 mb-4">
            <div className="card-body p-3">
              <h3 className="card-title fw-bold mb-3">Servis Sağlayıcıları</h3>
              <div className="providers-list">
                <div className="provider-item d-flex align-items-center mb-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Provider" 
                    className="rounded-circle me-3"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">Ahmet Yılmaz</h6>
                    <p className="mb-0 text-muted small">4.8 <i className="bi bi-star-fill text-warning"></i> (120 değerlendirme)</p>
                  </div>
                </div>
                
                <div className="provider-item d-flex align-items-center mb-3">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Provider" 
                    className="rounded-circle me-3"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">Ayşe Demir</h6>
                    <p className="mb-0 text-muted small">4.7 <i className="bi bi-star-fill text-warning"></i> (98 değerlendirme)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
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
    </div>
  );
}

export default ServiceDetailPage; 