import React from 'react';
import { colors } from '../utils/colors';

function SearchBar({ 
  placeholder = "Aramak İstediğiniz Hizmeti Yazın", 
  value = "", 
  onChange = () => {}, 
  backgroundColor = colors.white,
  iconBackgroundColor = colors.lightBlue,
  withFilter = true,
  containerClassName = ""
}) {
  return (
    <div className={`search-container ${containerClassName}`}>
      <div className="bg-white d-flex align-items-center p-1" style={{ borderRadius: '10px', backgroundColor }}>
        <div className="search-icon ms-1 me-2" style={{
          width: "40px",
          height: "40px",
          borderRadius: '50%',
          backgroundColor: iconBackgroundColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0
        }}>
          <i className="bi bi-search text-dark"></i>
        </div>
        <input 
          type="text" 
          className="form-control border-0 shadow-none bg-transparent p-1"
          placeholder={placeholder}
          style={{ boxShadow: 'none' }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {withFilter && (
          <div className="filter-icon me-1" style={{
            width: "40px",
            height: "40px",
            borderRadius: '50%',
            backgroundColor: iconBackgroundColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0
          }}>
            <i className="bi bi-filter text-dark"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar; 