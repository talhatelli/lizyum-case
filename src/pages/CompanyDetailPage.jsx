import React, { useState, useEffect } from 'react';
import messageSentIcon from '../assets/icon-park-solid_message-sent.svg';
import gridAddIcon from '../assets/gridicons_add.svg';
import arrowBackIcon from '../assets/arrow-back.svg';
import { colors } from '../utils/colors';
import { getCompanyData } from '../data/companyData';
import { getCompanyDetailStyles } from '../styles/companyDetailStyles';
import { getSearchResultsStyles } from '../styles/searchResultsStyles';

function CompanyDetailPage({ onBack, companyId, onReservationSuccess }) {
  const [activeTab, setActiveTab] = useState('company');
  const [isWebView, setIsWebView] = useState(false);
  
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
  
  const company = getCompanyData(companyId);
  const styles = getCompanyDetailStyles(isWebView);
  const searchResultStyles = getSearchResultsStyles();

  const handleReservation = () => {
    if (onReservationSuccess) {
      onReservationSuccess();
    }
  };

  const renderTabContent = () => {
    if (isWebView) {
      return (
        <div style={styles.webContent}>
          <div style={styles.webMainContent}>
            {activeTab === 'services' ? (
              <div className="services-content py-3">
                <h3 className="mb-3">Hizmetler</h3>
                <div style={styles.servicesCard}>
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
              <div className="company-info-content py-3">
                <div style={styles.contactCard} className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-geo-alt" style={{ fontSize: '24px', color: '#667085' }}></i>
                    </div>
                    <span style={{ marginLeft: '8px', color: colors.companyDetailText, fontSize: '16px' }}>
                      {company.address}
                    </span>
                  </div>
                
                  <div className="d-flex align-items-center mb-3">
                    <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-question-circle" style={{ fontSize: '24px', color: '#667085' }}></i>
                    </div>
                    <a href={`mailto:${company.email}`} style={{ marginLeft: '8px', color: colors.companyDetailLink, fontSize: '16px', textDecoration: 'none' }}>
                      {company.email}
                    </a>
                  </div>
                
                  <div className="d-flex gap-3 mt-3">
                    <button style={styles.actionButton} className="w-100">
                      <img src={messageSentIcon} alt="Message" className="me-2" style={{ width: '20px', height: '20px' }} />
                      <span style={styles.buttonText}>Mesaj At</span>
                    </button>
                  
                    <button style={styles.actionButton} className="w-100" onClick={handleReservation}>
                      <img src={gridAddIcon} alt="Add" className="me-2" style={{ width: '20px', height: '20px' }} />
                      <span style={styles.buttonText}>Randevu Al</span>
                    </button>
                  </div>
                </div>

                <div style={styles.servicesCard} className="mb-4">
                  <h3 className="mb-3">Hizmetler</h3>
                  <div>
                    {company.services.map((service, index) => (
                      <div key={index} style={styles.serviceItem} className="mb-3">
                        <span className="me-2" style={{fontSize: '16px', color: colors.companyDetailBulletColor}}>•</span>
                        {service}
                      </div>
                    ))}
                    <a href="#" 
                      onClick={() => setActiveTab('services')}
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',   
                        color: colors.companyDetailLink, 
                        textDecoration: 'none',
                        fontSize: '14px',
                        marginTop: '8px'
                      }}
                    >
                      Tüm hizmetleri gör &gt;
                    </a>
                  </div>
                </div>

                <div style={styles.aboutCard}>
                  <h3 className="mb-3">Hakkında</h3>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: colors.companyDetailTextSecondary
                  }}>{company.about}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    
    switch(activeTab) {
      case 'company':
        return (
          <div className="container-fluid px-3 py-3" style={{ backgroundColor: colors.backgroundColor, minHeight: 'calc(100vh - 180px)'}}>
            <div style={styles.contactCard}>
              <div className="d-flex align-items-center">
                <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-geo-alt" style={{ fontSize: '24px', color: '#667085' }}></i>
                </div>
                <span style={{ marginLeft: '8px', color: colors.companyDetailText, fontSize: '16px' }}>
                  {company.address}
                </span>
              </div>
              
              <div className="d-flex align-items-center">
                <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-question-circle" style={{ fontSize: '24px', color: '#667085' }}></i>
                </div>
                <a href={`mailto:${company.email}`} style={{ marginLeft: '8px', color: colors.companyDetailLink, fontSize: '16px', textDecoration: 'none' }}>
                  {company.email}
                </a>
              </div>
              
              <div className="d-flex gap-3 mt-2">
                <button style={styles.actionButton}>
                  <img src={messageSentIcon} alt="Message" className="me-2" style={{ width: '20px', height: '20px' }} />
                  <span style={styles.buttonText}>Mesaj At</span>
                </button>
                
                <button 
                  style={styles.actionButton}
                  onClick={handleReservation}
                >
                  <img src={gridAddIcon} alt="Add" className="me-2" style={{ width: '20px', height: '20px' }} />
                  <span style={styles.buttonText}>Randevu Al</span>
                </button>
              </div>
            </div>
            
            <section className="company-info-section mb-3">
              <div style={styles.servicesCard}>
                <h3 style={{ 
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  fontSize: '15px', 
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: colors.companyDetailText,
                  margin: 0,
                  padding: 0
                }}>Hizmetler</h3>
                <div style={{ marginTop: '10px' }}>
                  {company.services.slice(0, 3).map((service, index) => (
                    <div key={index} style={styles.serviceItem}>
                      {service}
                    </div>
                  ))}
                  <a href="#" style={{ 
                    display: 'flex',
                    alignItems: 'center',   
                    justifyContent: 'flex-start',
                    color: colors.companyDetailLink, 
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

              <div style={styles.aboutCard}>
                <h3 style={{ 
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  fontSize: '15px', 
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: colors.companyDetailText,
                  margin: 0,
                  padding: 0
                }}>Hakkında</h3>
                <p style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '170%',
                  letterSpacing: '0%',
                  color: colors.companyDetailTextSecondary,
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
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: colors.companyDetailText, marginBottom: '4px' }}>{company.name}</h1>
            <div className="d-flex align-items-center" style={searchResultStyles.ratingWrapper}>
              <div style={searchResultStyles.ratingValue}>{Math.floor(company.rating)}</div>
              <div style={searchResultStyles.starsContainer}>
                {[...Array(Math.floor(company.rating))].map((_, i) => (
                  <i 
                    key={i} 
                    className="bi bi-star-fill"
                    style={searchResultStyles.starFilled}
                  ></i>
                ))}
                {company.rating % 1 >= 0.5 && (
                  <i 
                    className="bi bi-star-half"
                    style={searchResultStyles.starFilled}
                  ></i>
                )}
                {[...Array(5 - Math.ceil(company.rating))].map((_, i) => (
                  <i 
                    key={i} 
                    className="bi bi-star"
                    style={searchResultStyles.starEmpty}
                  ></i>
                ))}
                <div style={searchResultStyles.reviewCount}>({company.reviewCount} değerlendirme)</div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.badge}>
          <img src={company.badgeIcon} alt="Badge" width="20" height="20" className="me-2" />
          <span style={styles.badgeText}>{company.badge}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="company-detail-page">
      <div style={styles.headerGradient}>
        <button 
          style={styles.backButton} 
          onClick={onBack}
          aria-label="Geri"
        >
          <img src={arrowBackIcon} alt="Geri" width="24" height="24" />
        </button>
        
        {isWebView ? (
          <div style={{ width: '80%', maxWidth: '1100px', padding: '0 24px' }}>
            {renderWebCompanyInfo()}
          </div>
        ) : (
          <div style={styles.card}>
            <div className="d-flex">
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
              
              <div>
                <h2 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: colors.companyDetailText
                }}>{company.name}</h2>
                
                <div className="d-flex align-items-center" style={searchResultStyles.ratingWrapper}>
                  <div style={searchResultStyles.ratingValue}>{Math.floor(company.rating)}</div>
                  <div style={searchResultStyles.starsContainer}>
                    {[...Array(Math.floor(company.rating))].map((_, i) => (
                      <i 
                        key={i} 
                        className="bi bi-star-fill"
                        style={searchResultStyles.starFilled}
                      ></i>
                    ))}
                    {company.rating % 1 >= 0.5 && (
                      <i 
                        className="bi bi-star-half"
                        style={searchResultStyles.starFilled}
                      ></i>
                    )}
                    {[...Array(5 - Math.ceil(company.rating))].map((_, i) => (
                      <i 
                        key={i} 
                        className="bi bi-star"
                        style={searchResultStyles.starEmpty}
                      ></i>
                    ))}
                    <div style={searchResultStyles.reviewCount}>({company.reviewCount} değerlendirme)</div>
                  </div>
                </div>
                
                <div style={styles.badge}>
                  <img src={company.badgeIcon} alt="Badge" width="16" height="16" className="me-1" />
                  <span style={styles.badgeText}>{company.badge}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div style={{backgroundColor: colors.backgroundColor}}>
        <div style={styles.tabContainer}>
          <div 
            style={activeTab === 'company' ? styles.activeTab : styles.inactiveTab}
            onClick={() => setActiveTab('company')}
          >
            Şirket Bilgileri
          </div>
          <div 
            style={activeTab === 'comments' ? styles.activeTab : styles.inactiveTab}
            onClick={() => setActiveTab('comments')}
          >
            Yorumlar
          </div>
          <div 
            style={activeTab === 'badges' ? styles.activeTab : styles.inactiveTab}
            onClick={() => setActiveTab('badges')}
          >
            Rozet Kataloğu
          </div>
        </div>
      </div>
      
      {renderTabContent()}
    </div>
  );
}

export default CompanyDetailPage; 