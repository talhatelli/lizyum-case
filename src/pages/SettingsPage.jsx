import React from 'react';
import Header from '../components/Header';

function SettingsPage() {
  return (
    <div className="settings-page">
      <Header title="Ayarlar" />
      
      <div className="container-fluid px-3 py-3">
        <h2 className="fs-4 fw-bold mb-4">Ayarlar</h2>
        
        <div className="list-group rounded-4 mb-4">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <span>Profil Bilgileri</span>
            <i className="bi bi-chevron-right"></i>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <span>Bildirim Ayarları</span>
            <i className="bi bi-chevron-right"></i>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <span>Güvenlik</span>
            <i className="bi bi-chevron-right"></i>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <span>Dil</span>
            <span>Türkçe <i className="bi bi-chevron-right"></i></span>
          </a>
        </div>
        
        <div className="list-group rounded-4">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <span>Yardım Merkezi</span>
            <i className="bi bi-chevron-right"></i>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <span>Hakkımızda</span>
            <i className="bi bi-chevron-right"></i>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-danger">
            <span>Çıkış Yap</span>
            <i className="bi bi-box-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage; 