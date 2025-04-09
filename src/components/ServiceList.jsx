import React from 'react';
import { featuredServices, categories } from '../data/mockData';
import ServiceCard from './ServiceCard';
import { serviceListStyles } from '../styles/serviceListStyles';
import { serviceLabels } from '../data/serviceData';

function ServiceList({ searchTerm, selectedCategory }) {
  const filteredServices = featuredServices.filter(service => {
    const matchesSearch = searchTerm 
      ? service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    
    const matchesCategory = selectedCategory 
      ? service.category === selectedCategory
      : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="service-list" style={serviceListStyles.container}>
      <h3 style={serviceListStyles.title}>
        {selectedCategory
          ? serviceLabels.servicesTitle(categories.find(c => c.id === selectedCategory)?.title)
          : serviceLabels.allServicesTitle}
      </h3>
      
      {filteredServices.length === 0 ? (
        <div style={serviceListStyles.emptyStateContainer}>
          <i className="bi bi-search" style={serviceListStyles.emptyStateIcon}></i>
          <p style={serviceListStyles.emptyStateText}>{serviceLabels.noServicesFoundMessage}</p>
        </div>
      ) : (
        <div className="row g-3">
          {filteredServices.map(service => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ServiceList; 