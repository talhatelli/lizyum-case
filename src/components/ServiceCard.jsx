import React from 'react';
import { serviceCardStyles } from '../styles/serviceCardStyles';
import { serviceLabels } from '../data/serviceData';

function ServiceCard({ service }) {
  return (
    <div className="card" style={serviceCardStyles.card}>
      <div 
        className="card-img-top position-relative" 
        style={serviceCardStyles.cardImage(service.image)}
      >
        <div 
          className="position-absolute bottom-0 start-0 end-0 p-2" 
          style={serviceCardStyles.imageOverlay}
        >
          <div style={serviceCardStyles.titleContainer}>
            <h5 className="card-title" style={serviceCardStyles.title}>{service.title}</h5>
            <span className="badge" style={serviceCardStyles.priceBadge}>{service.price}</span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text" style={serviceCardStyles.description}>{service.description}</p>
        <div style={serviceCardStyles.buttonsContainer}>
          <button className="btn" style={serviceCardStyles.detailsButton}>
            {serviceLabels.detailsButtonText}
          </button>
          <button className="btn" style={serviceCardStyles.appointmentButton}>
            <i className="bi bi-calendar-check me-1"></i> {serviceLabels.appointmentButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard; 