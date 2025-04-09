import React, { useState } from 'react';
import Header from '../components/Header';
import CategorySection from '../components/CategorySection';
import FeaturedSection from '../components/FeaturedSection';
import NearbySection from '../components/NearbySection';
import { colors } from '../utils/colors';

function HomePage({ onServiceSelect, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

  return (
    <div className="home-page">
      <Header onSearch={handleSearch} />
      
      <div className="container-fluid px-3 py-3" style={{ backgroundColor: colors.backgroundColor }}>
        <CategorySection />
        <FeaturedSection searchTerm={searchTerm} onServiceSelect={onServiceSelect} />
        <NearbySection />
      </div>
    </div>
  );
}

export default HomePage; 