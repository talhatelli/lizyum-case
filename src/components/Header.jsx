import React, { useState } from 'react';
import { colors } from '../utils/colors';
import SearchBar from './SearchBar';

function Header({ onSearch, placeholder }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (value) => {
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };
  
  const headerGradientStyle = {
    background: 'linear-gradient(to bottom, #AEC8E9, #E5EEFF)',
    width: '100%'
  };
  
  return (
    <div className="header-container mb-3" style={headerGradientStyle}>
      <div className="d-flex justify-content-between align-items-center d-md-none px-3 py-3" style={{ background: 'transparent' }}>
        <div>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '4px',
            color: colors.darkText
          }}>Merhaba!</h1>
          <p style={{ 
            color: colors.secondaryText, 
            marginBottom: 0,
            fontSize: '16px'
          }}>Lizyum'a Hoşgeldiniz</p>
        </div>
        <div className="profile-picture">
          <img 
            src="https://randomuser.me/api/portraits/women/65.jpg" 
            alt="Profile" 
            className="rounded-circle border border-white"
            style={{ width: "46px", height: "46px", objectFit: "cover" }}
          />
        </div>
      </div>
      
      <div className="px-3 pb-3 d-md-none" style={{ background: 'transparent' }}>
        <SearchBar 
          value={searchTerm}
          onChange={handleSearch}
          containerClassName="mt-2"
          placeholder={placeholder || "Aramak İstediğiniz Hizmeti Yazın"}
        />
      </div>
      
      <div className="d-none d-md-flex flex-column w-100" style={{ background: 'transparent' }}>
        <div className="d-flex align-items-center justify-content-between w-100 py-2 px-3">
          <div className="d-flex align-items-center">
            <h1 className="fs-4 fw-bold mb-0 me-4">Lizyum</h1>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active fw-medium" href="#">Ana Sayfa</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hizmetler</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hakkımızda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">İletişim</a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <a href="#" className="btn btn-sm btn-outline-primary me-2">Giriş Yap</a>
            <a href="#" className="btn btn-sm btn-primary">Kayıt Ol</a>
            <div className="profile-picture ms-3">
              <img 
                src="https://randomuser.me/api/portraits/women/65.jpg" 
                alt="Profile" 
                className="rounded-circle border border-white border-2"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="px-3 pb-3">
          <SearchBar 
            value={searchTerm}
            onChange={handleSearch}
            placeholder={placeholder || "Aramak İstediğiniz Hizmeti Yazın"}
          />
        </div>
      </div>
    </div>
  );
}

export default Header; 