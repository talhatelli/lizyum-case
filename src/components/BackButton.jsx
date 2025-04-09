import React from 'react';

function BackButton({ onClick }) {
  return (
    <button 
      className="btn border-0 me-2 p-1" 
      onClick={onClick}
      style={{ backgroundColor: 'transparent' }}
    >
      <i className="bi bi-arrow-left fs-5"></i>
    </button>
  );
}

export default BackButton; 