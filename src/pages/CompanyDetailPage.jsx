import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import cleaningImage from '../assets/Image/clean-image.jpeg';
import messageSentIcon from '../assets/icon-park-solid_message-sent.svg';
import gridAddIcon from '../assets/gridicons_add.svg';
import arrowBackIcon from '../assets/arrow-back.svg';
import ribbonIcon from '../assets/gaming-Ribbon-First--Streamline-Ultimate.svg';
import { colors } from '../utils/colors';

function CompanyDetailPage({ onBack, companyId, onReservationSuccess }) {
  const [activeTab, setActiveTab] = useState('company'); // Default active tab
  const [isWebView, setIsWebView] = useState(false);
  
  // Responsive screen detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsWebView(window.innerWidth > 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  // Mock data for the company details
  const company = {
    id: companyId || 1,
    name: "Lorem Ipsum Temizlik",
    rating: 4.0,
    reviewCount: 200,
    price: "₺",
    amount: "500",
    description: "den başlayan fiyatlarla",
    image: cleaningImage,
    about: "Lorem ipsum dolor sit amet consectetur. Risus vestibulum pretium felis non pellentesque. Tincidunt elit ac vitae dignissim ut tellus. Pretium feugiat mauris eu sit mi id.",
    address: "123 Main St, Apt 4B Lorem Ipsum...",
    email: "loremipsum@gmail.com",
    phone: "+90 555 123 4567",
    website: "www.loremipsum.com",
    services: [
      "Ev Temizliği",
      "Ofis Temizliği",
      "İnşaat Sonrası Temizlik",
      "Apartman Temizliği"
    ],
    badge: "Mahallenin Muhtarı"
  };

  // Action button style for Mesaj At and Randevu Al
  const actionButtonStyle = {
    width: 118,
    height: 40,
    borderRadius: '8px',
    borderWidth: '1px',
    paddingTop: '10px',
    paddingRight: '14px',
    paddingBottom: '10px',
    paddingLeft: '14px',
    background: '#EFF8FF',
    border: '1px solid #1570EF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  };

  // Text style for the buttons
  const buttonTextStyle = {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '0%',
    color: '#1570EF'
  };

  // Header için gradient arka plan stili
  const headerGradientStyle = {
    background: 'linear-gradient(to bottom, #AEC8E9, #E5EEFF)',
    width: '100%',
    position: 'relative',
    paddingTop: '16px',
    paddingBottom: '16px',
    ...(isWebView && {
      height: '240px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    })
  };

  // Geri buton stil
  const backButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '14px',
    width: '40px',
    height: '40px',
    marginBottom: '8px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    border: 'none',
    cursor: 'pointer',
    zIndex: 10,
    ...(isWebView && {
      position: 'absolute',
      top: '20px',
      left: '20px',
      marginLeft: 0
    })
  };

  // Card stili
  const cardStyle = {
    width: isWebView ? '600px' : '351px',
    maxWidth: '100%',
    margin: '0 auto',
    borderRadius: '10px',
    borderWidth: '1px',
    padding: '16px 10px',
    background: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #E9EAEC',
    ...(isWebView && {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px'
    })
  };

  // Badge stili
  const badgeStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px'
  };

  // Badge text stili
  const badgeTextStyle = {
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '170%',
    letterSpacing: '0%',
    color: '#363A33'
  };
  
  // Tab container style
  const tabContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '10px',
    padding: '15px',
    borderRightWidth: '1px',
    borderLeftWidth: '1px',
    height: '40px',
    gap: '2px',
    ...(isWebView && {
      width: '80%',
      maxWidth: '800px',
      margin: '0 auto'
    })
  };
  
  // Active tab style
  const activeTabStyle = {
    flex: 1,
    textAlign: 'center',
    borderRadius: '10px',
    padding: '8px 5px',
    background: '#FFFFFF',
    border: '0.5px solid #E6E8EC',
    fontWeight: 500,
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    height: '30px',
    whiteSpace: 'nowrap',
  };
  
  // Inactive tab style
  const inactiveTabStyle = {
    flex: 1,
    textAlign: 'center',
    borderRadius: '10px',
    padding: '8px 5px',
    border: '0.5px solid #E6E8EC',
    background: 'transparent',
    fontWeight: 400,
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    height: '30px',
    whiteSpace: 'nowrap',
  };
  
  // Contact card style
  const contactCardStyle = {
    borderRadius: '10px',
    borderWidth: '1px',
    padding: '16px',
    border: '1px solid #E6E8EC',
    marginBottom: '16px',
    background: '#FFFFFF80 50%',
  };
  
  // Services card style
  const servicesCardStyle = {
    width: 351,
    height: 154,
    borderRadius: '10px',
    borderWidth: '1px',
    paddingTop: '16px',
    paddingRight: '10px',
    paddingBottom: '16px',
    paddingLeft: '10px',
    gap: '10px',
    background: '#FFFFFF80 50%',
    border: '1px solid #E9EAEC',
    ...(isWebView && {
      width: '100%',
      height: 'auto',
      minHeight: '200px'
    })
  };
  
  // About card style - using the same dimensions and styling
  const aboutCardStyle = {
    width: 351,
    height: 134,
    borderRadius: '10px',
    borderWidth: '1px',
    paddingTop: '16px',
    paddingRight: '10px',
    paddingBottom: '16px',
    paddingLeft: '10px',
    gap: '10px',
    background: '#FFFFFF80 50%',
    border: '1px solid #E9EAEC',
    marginTop: '16px',
    ...(isWebView && {
      width: '100%',
      height: 'auto',
      minHeight: '150px'
    })
  };
  
  // Service item style
  const serviceItemStyle = {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '170%',
    width: 332,
    height: 20,
    color: '#333',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    ...(isWebView && {
      width: 'auto',
      fontSize: '14px'
    })
  };

  // Web content wrapper style
  const webContentStyle = {
    width: '100%',
    padding: '24px 0',
    backgroundColor: colors.backgroundColor
  };

  const webMainContentStyle = {
    gridColumn: 'span 8',
  };

  const webSidebarStyle = {
    gridColumn: 'span 4',
  };

  // Function to handle reservation submission
  const handleReservation = () => {
    // Here we would normally process the reservation with an API call
    // For now, we'll just trigger the success page
    if (onReservationSuccess) {
      onReservationSuccess();
    }
  };

  // Render tab content based on active tab
  const renderTabContent = () => {
    // For web view - combined layout
    if (isWebView) {
      return (
        <div style={webContentStyle}>
          <div style={webMainContentStyle}>
            {activeTab === 'services' ? (
              <div className="services-content py-3">
                <h3 className="mb-3">Hizmetler</h3>
                <div style={servicesCardStyle}>
                  <ul className="list-unstyled">
                    {company.services.map((service, index) => (
                      <li key={index} className="mb-3 d-flex align-items-center">
                        <span className="me-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="btn btn-primary w-100 mt-4"
                    onClick={handleReservation}
                  >
                    Randevu Oluştur
                  </button>
                </div>
              </div>
            ) : activeTab === 'comments' ? (
              <div className="comments-content py-3">
                <h3 className="mb-3">Yorumlar</h3>
                <div className="card p-3">
                  <p className="text-muted">Henüz yorum bulunmamaktadır.</p>
                </div>
              </div>
            ) : activeTab === 'badges' ? (
              <div className="badges-content py-3">
                <h3 className="mb-3">Rozet Kataloğu</h3>
                <div className="card p-3">
                  <p className="text-muted">Henüz rozet bulunmamaktadır.</p>
                </div>
              </div>
            ) : (
              // Default company tab - alt alta düzenlenmiş
              <div className="company-info-content py-3">
                {/* İletişim kartı ilk sırada */}
                <div style={contactCardStyle} className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-geo-alt" style={{ fontSize: '24px', color: '#667085' }}></i>
                    </div>
                    <span style={{ marginLeft: '8px', color: '#333', fontSize: '16px' }}>
                      {company.address}
                    </span>
                  </div>
                
                  <div className="d-flex align-items-center mb-3">
                    <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-question-circle" style={{ fontSize: '24px', color: '#667085' }}></i>
                    </div>
                    <a href={`mailto:${company.email}`} style={{ marginLeft: '8px', color: '#2483F0', fontSize: '16px', textDecoration: 'none' }}>
                      {company.email}
                    </a>
                  </div>
                
                  <div className="d-flex gap-3 mt-3">
                    <button style={actionButtonStyle} className="w-100">
                      <img src={messageSentIcon} alt="Message" className="me-2" style={{ width: '20px', height: '20px' }} />
                      <span style={buttonTextStyle}>Mesaj At</span>
                    </button>
                  
                    <button style={actionButtonStyle} className="w-100" onClick={handleReservation}>
                      <img src={gridAddIcon} alt="Add" className="me-2" style={{ width: '20px', height: '20px' }} />
                      <span style={buttonTextStyle}>Randevu Al</span>
                    </button>
                  </div>
                </div>

                {/* Hizmetler ikinci sırada */}
                <div style={servicesCardStyle} className="mb-4">
                  <h3 className="mb-3">Hizmetler</h3>
                  <div>
                    {company.services.map((service, index) => (
                      <div key={index} style={serviceItemStyle} className="mb-3">
                        <span className="me-2" style={{fontSize: '16px', color: '#4387FF'}}>•</span>
                        {service}
                      </div>
                    ))}
                    <a href="#" 
                      onClick={() => setActiveTab('services')}
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',   
                        color: '#2483F0', 
                        textDecoration: 'none',
                        fontSize: '14px',
                        marginTop: '8px'
                      }}
                    >
                      Tüm hizmetleri gör &gt;
                    </a>
                  </div>
                </div>

                {/* Hakkında en son sırada */}
                <div style={aboutCardStyle}>
                  <h3 className="mb-3">Hakkında</h3>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#363A33'
                  }}>{company.about}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    
    // Mobile view - switchable tabs
    switch(activeTab) {
      case 'company':
        return (
          <div className="container-fluid px-3 py-3" style={{ backgroundColor: colors.backgroundColor, minHeight: 'calc(100vh - 180px)'}}>
            {/* Contact Information Card */}
            <div style={contactCardStyle}>
              {/* Address with icon */}
              <div className="d-flex align-items-center">
                <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-geo-alt" style={{ fontSize: '24px', color: '#667085' }}></i>
                </div>
                <span style={{ marginLeft: '8px', color: '#333', fontSize: '16px' }}>
                  {company.address}
                </span>
              </div>
              
              {/* Email with icon */}
              <div className="d-flex align-items-center">
                <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-question-circle" style={{ fontSize: '24px', color: '#667085' }}></i>
                </div>
                <a href={`mailto:${company.email}`} style={{ marginLeft: '8px', color: '#2483F0', fontSize: '16px', textDecoration: 'none' }}>
                  {company.email}
                </a>
              </div>
              
              {/* Action Buttons */}
              <div className="d-flex gap-3 mt-2">
                {/* Message button */}
                <button style={actionButtonStyle}>
                  <img src={messageSentIcon} alt="Message" className="me-2" style={{ width: '20px', height: '20px' }} />
                  <span style={buttonTextStyle}>Mesaj At</span>
                </button>
                
                {/* Appointment button */}
                <button 
                  style={actionButtonStyle}
                  onClick={handleReservation}
                >
                  <img src={gridAddIcon} alt="Add" className="me-2" style={{ width: '20px', height: '20px' }} />
                  <span style={buttonTextStyle}>Randevu Al</span>
                </button>
              </div>
            </div>
            
            {/* Company Info Section */}
            <section className="company-info-section mb-3">
              <div style={servicesCardStyle}>
                <h3 style={{ 
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  fontSize: '15px', 
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: '#333',
                  margin: 0,
                  padding: 0
                }}>Hizmetler</h3>
                <div style={{ marginTop: '10px' }}>
                  {company.services.slice(0, 3).map((service, index) => (
                    <div key={index} style={serviceItemStyle}>
                      {service}
                    </div>
                  ))}
                  <a href="#" style={{ 
                    display: 'flex',
                    alignItems: 'center',   
                    justifyContent: 'flex-start',
                    color: '#2483F0', 
                    textDecoration: 'none',
                    fontSize: '10px',
                    fontWeight: 400,
                    lineHeight: '170%',
                    width: 332,
                    height: 17,
                    marginTop: '4px',
                  }}>
                    Tüm hizmetleri gör &gt;
                  </a>
                </div>
              </div>

              <div style={aboutCardStyle}>
                <h3 style={{ 
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  fontSize: '15px', 
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: '#333',
                  margin: 0,
                  padding: 0
                }}>Hakkında</h3>
                <p style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '170%',
                  letterSpacing: '0%',
                  color: '#363A33',
                  width: 332,
                  height: 79,
                  margin: '10px 0 0 0',
                  padding: 0
                }}>{company.about}</p>
              </div>
              
            </section>
          </div>
        );
      case 'comments':
        return (
          <div className="container-fluid px-3 py-3" style={{ backgroundColor: colors.backgroundColor, minHeight: 'calc(100vh - 180px)'}}>
            <div className="card border-0 rounded-3">
              <div className="card-body p-3">
                <h3 className="fs-5 fw-bold">Yorumlar</h3>
                <p className="text-muted">Henüz yorum bulunmamaktadır.</p>
              </div>
            </div>
          </div>
        );
      case 'badges':
        return (
          <div className="container-fluid px-3 py-3" style={{ backgroundColor: colors.backgroundColor, minHeight: 'calc(100vh - 180px)'}}>
            <div className="card border-0 rounded-3">
              <div className="card-body p-3">
                <h3 className="fs-5 fw-bold">Rozet Kataloğu</h3>
                <p className="text-muted">Henüz rozet bulunmamaktadır.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Web view company header info
  const renderWebCompanyInfo = () => {
    return (
      <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
        <div className="d-flex align-items-center">
          <img 
            src={company.image} 
            alt={company.name} 
            style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: '16px'
            }} 
          />
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '4px' }}>{company.name}</h1>
            <div className="d-flex align-items-center">
              <div style={{ fontSize: '20px', fontWeight: '500', marginRight: '8px' }}>{company.rating}</div>
              <div className="d-flex me-1">
                {Array(5).fill(0).map((_, index) => (
                  <span key={index} style={{ color: index < Math.floor(company.rating) ? '#FFBA0A' : '#D9D9D9', fontSize: '20px' }}>★</span>
                ))}
              </div>
              <span style={{ color: '#2483F0', fontSize: '16px' }}>({company.reviewCount} değerlendirme)</span>
            </div>
          </div>
        </div>
        
        <div style={badgeStyle}>
          <img src={ribbonIcon} alt="Badge" width="20" height="20" className="me-2" />
          <span style={badgeTextStyle}>{company.badge}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="company-detail-page">
      {/* Custom Gradient Header */}
      <div style={headerGradientStyle}>
        {/* Back button with specified styles */}
        <button 
          style={backButtonStyle} 
          onClick={onBack}
          aria-label="Geri"
        >
          <img src={arrowBackIcon} alt="Geri" width="24" height="24" />
        </button>
        
        {isWebView ? (
          /* Web View Company Profile */
          <div style={{ width: '80%', maxWidth: '1100px', padding: '0 24px' }}>
            {renderWebCompanyInfo()}
          </div>
        ) : (
          /* Mobile View Company Profile in Header */
          <div style={cardStyle}>
            <div className="d-flex">
              {/* Company image */}
              <div className="me-3" style={{ flexShrink: 0 }}>
                <img 
                  src={company.image} 
                  alt={company.name} 
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }} 
                />
              </div>
              
              {/* Company name and rating */}
              <div>
                <h2 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: '#333'
                }}>{company.name}</h2>
                
                <div className="d-flex align-items-center">
                  {/* Rating number */}
                  <div style={{ 
                    fontSize: '18px', 
                    fontWeight: '500',
                    marginRight: '6px',
                    color: '#333'
                  }}>{company.rating}</div>
                  
                  {/* Stars */}
                  <div className="d-flex me-1">
                    {Array(5).fill(0).map((_, index) => (
                      <span key={index} style={{ color: index < Math.floor(company.rating) ? '#FFBA0A' : '#D9D9D9', fontSize: '18px' }}>★</span>
                    ))}
                  </div>
                  
                  {/* Review count */}
                  <span style={{ color: '#2483F0', fontSize: '14px' }}>({company.reviewCount} değerlendirme)</span>
                </div>
                
                {/* Badge */}
                <div style={badgeStyle}>
                  <img src={ribbonIcon} alt="Badge" width="16" height="16" className="me-1" />
                  <span style={badgeTextStyle}>{company.badge}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Tabs Navigation */}
      <div style={{backgroundColor: colors.backgroundColor}}>
        <div style={tabContainerStyle}>
          <div 
            style={activeTab === 'company' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('company')}
          >
            Şirket Bilgileri
          </div>
          <div 
            style={activeTab === 'comments' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('comments')}
          >
            Yorumlar
          </div>
          <div 
            style={activeTab === 'badges' ? activeTabStyle : inactiveTabStyle}
            onClick={() => setActiveTab('badges')}
          >
            Rozet Kataloğu
          </div>
        </div>
      </div>
      
      {/* Render tab content */}
      {renderTabContent()}
    </div>
  );
}

export default CompanyDetailPage; 