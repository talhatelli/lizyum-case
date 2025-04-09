import React from 'react';
import { categoryRows } from '../data/categoryData';
import { categoryStyles } from '../styles/categoryStyles';

function CategorySection() {
  const getWidthForSize = (size) => {
    return categoryStyles.sizeConfig[size] || categoryStyles.sizeConfig.medium;
  };

  return (
    <section className="category-section mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title fw-bold mb-0">
          <span className="text-primary fw-bold fs-4">#</span> <span className="fs-4">Senin İçin</span>
        </h2>
        <a href="#" className="text-decoration-none text-dark fw-medium">Tümünü Gör</a>
      </div>

      <div className="category-rows">
        {categoryRows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="category-row d-flex overflow-auto hide-scrollbar mb-3 px-1" 
            style={categoryStyles.row}
          >
            {row.map((category) => {
              const sizeConfig = getWidthForSize(category.width);
              
              return (
                <div 
                  key={category.id} 
                  style={{
                    ...categoryStyles.card,
                    minWidth: sizeConfig.min,
                    maxWidth: sizeConfig.max
                  }} 
                  className="category-card"
                >
                  <div style={categoryStyles.icon} className="category-icon">
                    <i className={`bi bi-${category.icon}`}></i>
                  </div>
                  <span className="category-title fw-medium text-nowrap" style={categoryStyles.title}>
                    {category.title}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <style jsx>{categoryStyles.css}</style>
    </section>
  );
}

export default CategorySection; 