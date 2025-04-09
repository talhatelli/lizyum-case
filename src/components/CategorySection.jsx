import React from 'react';

function CategorySection() {
  // Categories organized in 3 rows with different widths
  const categoryRows = [
    // Row 1
    [
      { id: 1, title: 'Lorem Ipsum', icon: 'wind', width: 'medium' },
      { id: 2, title: 'Lorem Ipsum', icon: 'pc-display', width: 'medium' },
      { id: 3, title: 'Lorem Ipsum', icon: 'cloud', width: 'small' }
    ],
    // Row 2
    [
      { id: 4, title: 'Lorem Ipsum Dolor', icon: 'droplet', width: 'large' },
      { id: 5, title: 'Lorem Ipsum', icon: 'shield-lock', width: 'medium' }
    ],
    // Row 3
    [
      { id: 6, title: 'Lorem', icon: 'key', width: 'small' },
      { id: 7, title: 'Lorem Ipsum', icon: 'lightning', width: 'medium' },
      { id: 8, title: 'Lorem Ipsum', icon: 'wind', width: 'small' }
    ]
  ];

  // Function to get width based on size
  const getWidthForSize = (size) => {
    switch(size) {
      case 'small': return { min: '110px', max: '120px' };
      case 'medium': return { min: '160px', max: '180px' };
      case 'large': return { min: '220px', max: '240px' };
      default: return { min: '160px', max: '180px' };
    }
  };

  // Base card styles
  const getCardStyle = () => ({
    height: '56px',
    padding: '8px 14px',
    borderRadius: '18px',
    backgroundColor: '#F4F5F6',
    border: '1px solid #E9EAEC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 0
  });

  // Icon style with specified color, size, border and border radius
  const iconStyle = {
    width: '40px', 
    height: '40px',
    backgroundColor: '#E5EEFF',
    borderRadius: '10px',
    borderRightWidth: '0.5px',
    borderLeftWidth: '0.5px',
    borderTopWidth: '0.5px',
    borderBottomWidth: '0.5px',
    borderStyle: 'solid',
    borderColor: '#D5DEFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '12px',
    fontSize: '14px'
  };

  return (
    <section className="category-section mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title fw-bold mb-0">
          <span className="text-primary fw-bold fs-4">#</span> <span className="fs-4">Senin İçin</span>
        </h2>
        <a href="#" className="text-decoration-none text-dark fw-medium">Tümünü Gör</a>
      </div>

      {/* Category rows - horizontally scrollable */}
      <div className="category-rows">
        {categoryRows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="category-row d-flex overflow-auto hide-scrollbar mb-3 px-1" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {row.map((category, catIndex) => {
              const sizeConfig = getWidthForSize(category.width);
              
              return (
                <div 
                  key={category.id} 
                  style={{
                    ...getCardStyle(),
                    minWidth: sizeConfig.min,
                    maxWidth: sizeConfig.max,
                    marginRight: '10px'
                  }} 
                  className="category-card"
                >
                  <div style={iconStyle} className="category-icon">
                    <i className={`bi bi-${category.icon}`}></i>
                  </div>
                  <span className="category-title fw-medium text-nowrap" style={{ color: '#444', fontSize: '14px' }}>{category.title}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* CSS for hiding scrollbar but allowing scroll */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default CategorySection; 