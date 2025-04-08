import React from 'react';

function NearbySection() {
  return (
    <section className="nearby-section mb-5 pb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title fw-bold mb-0">
          <span className="text-primary fw-bold fs-4">#</span> <span className="fs-4">Yakındakiler</span>
        </h2>
      </div>

      {/* For simplicity, we don't add real nearby content since none is visible in the screenshot */}
      <div className="nearby-grid">
        <div className="d-flex justify-content-center align-items-center" style={{ height: '60px' }}>
          <p className="text-muted mb-0">Yakındaki hizmetler şu anlık yüklenmiyor</p>
        </div>
      </div>
    </section>
  );
}

export default NearbySection; 