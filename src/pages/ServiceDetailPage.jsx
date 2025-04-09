import React, { useState } from 'react';
import { getServiceDetailData } from '../data/serviceDetailData';
import { getServiceDetailStyles } from '../styles/serviceDetailStyles';
import { colors } from '../utils/colors';

function ServiceDetailPage({ onBack }) {
  const [activeTab, setActiveTab] = useState('individual');
  const data = getServiceDetailData();
  const styles = getServiceDetailStyles(activeTab);

  const filterServicesByTab = () => {
    return data.featuredServices.filter(service => 
      (activeTab === 'individual' && service.id <= 2) || 
      (activeTab === 'corporate' && service.id > 2)
    );
  };
  
  return (
    <div className="service-detail-page">
      <div className="custom-header p-3 d-flex align-items-center">
        <button 
          style={styles.backButton} 
          onClick={onBack}
          aria-label="Geri"
        >
          <img src={data.icons.arrowBack} alt="Geri" width="24" height="24" />
        </button>
        <h1 className="mb-0 fw-bold fs-5">{data.serviceInfo.title}</h1>
      </div>
      
      <div className="container-fluid p-0" style={styles.container}>
        <section className="featured-services-section mb-4">
          <div className="px-3 pt-2 pb-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="section-title fw-bold mb-0 fs-4">
                <span className="text-primary fw-bold">{data.sections.featured.hashPrefix}</span> {data.sections.featured.title}
              </h2>
              
              <div className="tab-buttons">
                <div className="btn-group rounded-pill" style={styles.tabContainer}>
                  <button 
                    type="button" 
                    onClick={() => setActiveTab('individual')}
                    style={styles.tabButtonIndividual}
                  >
                    {data.tabs.individual}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveTab('corporate')}
                    style={styles.tabButtonCorporate}
                  >
                    {data.tabs.corporate}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="d-flex overflow-auto pb-3 hide-scrollbar px-3" style={styles.featuredCardsContainer}>
            {filterServicesByTab().map(service => (
              <div key={service.id} style={styles.featuredCard}>
                <div className="featured-card position-relative rounded-4 overflow-hidden shadow-sm" style={styles.cardContainer}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    style={styles.cardImage}
                  />
                  <div className="featured-overlay" style={styles.cardOverlay}>
                    <p style={styles.cardPrice}>{service.price}</p>
                    <h5 style={styles.cardTitle}>{service.title}</h5>
                  </div>
                  <div style={styles.arrowIcon}>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="service-details p-3">
          <div className="card" style={styles.infoCard}>
            <div className="card-body" style={styles.infoCardBody}>
              <h3 className="card-title" style={styles.infoCardTitle}>{data.sections.about.title}</h3>
              <p className="card-text" style={styles.infoCardText}>
                {data.serviceInfo.description}
              </p>
            </div>
          </div>
          
          <div className="card" style={styles.infoCard}>
            <div className="card-body" style={styles.infoCardBody}>
              <h3 className="card-title" style={styles.infoCardTitle}>{data.sections.providers.title}</h3>
              <div className="providers-list">
                {data.providers.map(provider => (
                  <div key={provider.id} style={styles.providerItem}>
                    <img 
                      src={provider.avatar} 
                      alt={provider.name} 
                      style={styles.providerAvatar}
                    />
                    <div>
                      <h6 style={styles.providerName}>{provider.name}</h6>
                      <p style={styles.providerRating}>
                        {provider.rating} <i className="bi bi-star-fill" style={styles.starIcon}></i> ({provider.reviewCount} değerlendirme)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: styles.hideScrollbarStyle }} />
    </div>
  );
}

export default ServiceDetailPage; 