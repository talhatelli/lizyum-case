import React from 'react';
import { searchBarStyles } from '../styles/searchBarStyles';
import { searchBarDefaults } from '../data/searchBarData';
import searchIcon from '../assets/search.svg';
import filterIcon from '../assets/proicons_filter.svg';

function SearchBar({ 
  placeholder = searchBarDefaults.defaultPlaceholder, 
  value = "", 
  onChange = () => {}, 
  backgroundColor = searchBarDefaults.defaultBackgroundColor,
  iconBackgroundColor = searchBarDefaults.defaultIconBackgroundColor,
  withFilter = searchBarDefaults.defaultWithFilter,
  containerClassName = ""
}) {
  return (
    <div className={`search-container ${containerClassName}`}>
      <div className="bg-white d-flex align-items-center p-1" style={searchBarStyles.container(backgroundColor)}>
        <div className="search-icon ms-1 me-2" style={searchBarStyles.iconContainer(iconBackgroundColor)}>
          <img src={searchIcon} alt="Search" />
        </div>
        <input 
          type="text" 
          className="form-control border-0 shadow-none bg-transparent p-1"
          placeholder={placeholder}
          style={searchBarStyles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {withFilter && (
          <div className="filter-icon me-1" style={searchBarStyles.iconContainer(iconBackgroundColor)}>
            <img src={filterIcon} alt="Filter" />
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar; 