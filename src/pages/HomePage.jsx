import React, { useState } from 'react';
import Header from '../components/Header';
import CategorySection from '../components/CategorySection';
import FeaturedSection from '../components/FeaturedSection';
import NearbySection from '../components/NearbySection';

function HomePage({ onServiceSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="home-page">
      <Header onSearch={handleSearch} />
      
      <div className="container-fluid px-3">
        <CategorySection />
        <FeaturedSection searchTerm={searchTerm} onServiceSelect={onServiceSelect} />
        <NearbySection />
      </div>
    </div>
  );
}

export default HomePage; 