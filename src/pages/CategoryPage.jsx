import React from 'react';
import Header from '../components/Header';
import { categories } from '../data/mockData';
import { colors } from '../utils/colors';
import BackButton from '../components/BackButton';

function CategoryPage({ onServiceSelect, onBack }) {

  // Render sub-category item
  const renderSubCategoryItem = (subCategory) => {
    return (
      <div 
        key={subCategory.id} 
        className="subcategory-item" 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          borderBottom: '1px solid #f0f0f0',
          cursor: 'pointer'
        }}
        onClick={() => onServiceSelect && onServiceSelect(subCategory.id)}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={subCategory.icon} 
            alt={subCategory.title} 
            style={{ 
              width: '32px', 
              height: '32px', 
              marginRight: '12px',
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
          />
          <span style={{ fontSize: '16px' }}>{subCategory.title}</span>
        </div>
        <i className="bi bi-chevron-right" style={{ color: colors.secondary }}></i>
      </div>
    );
  };

  // Render category section
  const renderCategorySection = (category) => {
    return (
      <div key={category.id} className="category-section mb-4">
        <h2 
          style={{ 
            fontSize: '18px', 
            fontWeight: '700', 
            margin: '12px 16px', 
            color: colors.darkText 
          }}
        >
          {category.title}
        </h2>
        <div 
          style={{ 
            backgroundColor: '#fff', 
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          {category.subCategories.map(subCategory => renderSubCategoryItem(subCategory))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: colors.backgroundColor, minHeight: '100vh' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <Header 
          leftComponent={<BackButton onClick={onBack} />}
          onSearch={() => {}}
          placeholder="Kategori Ara"
        />
      </div>

      <div className="container-fluid px-3 py-2">
        {categories.map(category => renderCategorySection(category))}
      </div>
    </div>
  );
}

export default CategoryPage; 