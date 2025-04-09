import React from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import { categoriesWithSubcategories } from '../data/categoryData';
import { categoryPageStyles } from '../styles/categoryPageStyles';

function CategoryPage({ onServiceSelect, onBack }) {

  const renderSubCategoryItem = (subCategory) => {
    return (
      <div 
        key={subCategory.id} 
        className="subcategory-item" 
        style={categoryPageStyles.subCategoryItem}
        onClick={() => onServiceSelect && onServiceSelect(subCategory.id)}
      >
        <div style={categoryPageStyles.subCategoryContent}>
          <img 
            src={subCategory.icon} 
            alt={subCategory.title} 
            style={categoryPageStyles.subCategoryIcon} 
          />
          <span style={categoryPageStyles.subCategoryTitle}>{subCategory.title}</span>
        </div>
        <i className="bi bi-chevron-right" style={categoryPageStyles.arrowIcon}></i>
      </div>
    );
  };

  const renderCategorySection = (category) => {
    return (
      <div key={category.id} className="category-section mb-4">
        <h2 style={categoryPageStyles.sectionTitle}>
          {category.title}
        </h2>
        <div style={categoryPageStyles.sectionContainer}>
          {category.subCategories.map(subCategory => renderSubCategoryItem(subCategory))}
        </div>
      </div>
    );
  };

  return (
    <div style={categoryPageStyles.container}>
      <div style={categoryPageStyles.headerContainer}>
        <Header 
          onSearch={() => {}}
          placeholder="Kategori Ara"
        />
      </div>

      <div style={categoryPageStyles.contentContainer}>
        {categoriesWithSubcategories.map(category => renderCategorySection(category))}
      </div>
    </div>
  );
}

export default CategoryPage; 