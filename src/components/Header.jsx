import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { headerStyles } from '../styles/headerStyles';
import { navigationLinks, profileInfo, placeholderText } from '../data/headerData';

function Header({ onSearch, placeholder }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (value) => {
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };
  
  return (
    <div className="header-container mb-3" style={headerStyles.headerGradient}>
      <div className="d-flex justify-content-between align-items-center d-md-none px-3 py-3" style={headerStyles.mobileHeaderContainer}>
        <div>
          <h1 style={headerStyles.title}>Merhaba!</h1>
          <p style={headerStyles.subtitle}>Lizyum'a Hoşgeldiniz</p>
        </div>
        <div className="profile-picture">
          <img 
            src={profileInfo.avatar} 
            alt="Profile" 
            className="rounded-circle border border-white"
            style={headerStyles.mobileProfilePicture}
          />
        </div>
      </div>
      
      <div className="px-3 pb-3 d-md-none" style={headerStyles.mobileSearchContainer}>
        <SearchBar 
          value={searchTerm}
          onChange={handleSearch}
          containerClassName="mt-2"
          placeholder={placeholder || placeholderText}
        />
      </div>
      
      <div className="d-none d-md-flex flex-column w-100" style={headerStyles.desktopHeaderContainer}>
        <div className="d-flex align-items-center justify-content-between w-100 py-2 px-3">
          <div className="d-flex align-items-center">
            <h1 className="fs-4 fw-bold mb-0 me-4">Lizyum</h1>
            <ul className="nav">
              {navigationLinks.map(link => (
                <li className="nav-item" key={link.id}>
                  <a 
                    className={`nav-link ${link.isActive ? 'active fw-medium' : ''}`} 
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <a href="#" className="btn btn-sm btn-outline-primary me-2">Giriş Yap</a>
            <a href="#" className="btn btn-sm btn-primary">Kayıt Ol</a>
            <div className="profile-picture ms-3">
              <img 
                src={profileInfo.avatar} 
                alt="Profile" 
                className="rounded-circle border border-white border-2"
                style={headerStyles.desktopProfilePicture}
              />
            </div>
          </div>
        </div>
        <div className="px-3 pb-3">
          <SearchBar 
            value={searchTerm}
            onChange={handleSearch}
            placeholder={placeholder || placeholderText}
          />
        </div>
      </div>
    </div>
  );
}

export default Header; 