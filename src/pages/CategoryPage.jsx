import React from 'react';
import Header from '../components/Header';

function CategoryPage() {
  const categories = [
    { id: 1, title: 'Ev Temizliği', icon: 'house' },
    { id: 2, title: 'Ofis Temizliği', icon: 'building' },
    { id: 3, title: 'Tamirat Hizmetleri', icon: 'tools' },
    { id: 4, title: 'Boyama Hizmetleri', icon: 'brush' },
    { id: 5, title: 'Tesisatçı', icon: 'droplet' },
    { id: 6, title: 'Elektrik Servisi', icon: 'lightning' },
    { id: 7, title: 'Nakliyat', icon: 'truck' },
    { id: 8, title: 'Bahçe Bakımı', icon: 'tree' },
    { id: 9, title: 'Mobilya Montaj', icon: 'box' },
    { id: 10, title: 'Çocuk Bakımı', icon: 'people' },
    { id: 11, title: 'Yaşlı Bakımı', icon: 'heart' },
    { id: 12, title: 'Özel Ders', icon: 'book' }
  ];

  const cardStyle = {
    height: '75px',
    padding: '16px 10px',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: '#f0f0f0',
    backgroundColor: 'white',
    width: '100%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  };

  const iconStyle = {
    width: '40px', 
    height: '40px',
    backgroundColor: '#edf2ff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15px'
  };

  return (
    <div className="category-page">
      <Header title="Kategoriler" placeholder="Kategori ara" />
      
      <div className="container-fluid px-3 py-3" style={{backgroundColor: "#F4F5F6"}}>
        <h2 className="section-title fw-bold mb-3">
          <span className="text-primary fw-bold fs-4">#</span> <span className="fs-4">Tüm Kategoriler</span>
        </h2>
        
        <div className="category-grid">
          <div className="row g-3">
            {categories.map(category => (
              <div key={category.id} className="col-12 col-md-6 col-lg-4">
                <div 
                  style={cardStyle} 
                  className="category-card d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <div style={iconStyle} className="category-icon">
                      <i className={`bi bi-${category.icon}`}></i>
                    </div>
                    <span className="category-title fw-medium">{category.title}</span>
                  </div>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage; 