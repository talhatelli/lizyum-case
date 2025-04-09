import React, { useState } from 'react';
import Header from '../components/Header';
import { categories } from '../data/mockData';
import ServiceList from '../components/ServiceList';
import { servicePageStyles } from '../styles/servicePageStyles';
import { serviceLabels } from '../data/serviceData';

function ServicePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <div className="services-page">
      <Header 
        title="Hizmetler" 
        placeholder="Hizmet ara..." 
        onSearch={handleSearch}
      />
      
      <div className="container-fluid" style={servicePageStyles.container}>
        <div style={servicePageStyles.categorySection}>
          <h3 style={servicePageStyles.categorySectionTitle}>{serviceLabels.categoriesTitle}</h3>
          <div style={servicePageStyles.categoryButtonsContainer}>
            {categories.slice(0, 8).map(category => (
              <button 
                key={category.id}
                className="btn"
                style={servicePageStyles.categoryButton(selectedCategory === category.id)}
                onClick={() => handleCategorySelect(category.id)}
              >
                <i className={`bi bi-${category.icon} me-1`}></i>
                {category.title}
              </button>
            ))}
          </div>
        </div>
        
        <ServiceList 
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}

export default ServicePage; 