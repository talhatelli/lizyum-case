import React from 'react';
import VectorHome from '../assets/TabIcon/Vector.svg';
import ChatIcon from '../assets/TabIcon/majesticons_chat-line.svg';
import MedicalIcon from '../assets/TabIcon/material-symbols_medical-services-outline.svg';
import SettingIcon from '../assets/TabIcon/uil_setting.svg';
import StarIcon from '../assets/TabIcon/star-outline.svg';
import { colors, hexToFilter } from '../utils/colors';

function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', name: 'Anasayfa', icon: VectorHome },
    { id: 'service', name: 'Hizmet', icon: MedicalIcon },
    { id: 'category', name: 'Kategori', icon: StarIcon }, // Using MedicalIcon as a placeholder for category
    { id: 'messages', name: 'Mesajlar', icon: ChatIcon },
    { id: 'settings', name: 'Ayarlar', icon: SettingIcon }
  ];

  return (
    <div className="bottom-nav-container w-100">
      {/* Mobile Navigation */}
      <div className="bg-white shadow-lg border-top d-md-none" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
        <div className="d-flex justify-content-around align-items-center py-2">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className="d-flex flex-column align-items-center justify-content-center border-0 bg-transparent"
              onClick={() => setActiveTab(tab.id)}
            >
              <img 
                src={tab.icon} 
                alt={tab.name}
                className="mb-1"
                style={{ 
                  width: '24px', 
                  height: '24px',
                  filter: activeTab === tab.id ? hexToFilter(colors.activeTab) : 'none'
                }} 
              />
              <span className="small mt-1" style={{ color: activeTab === tab.id ? colors.activeTab : colors.inactiveTab }}>{tab.name}</span>
              {activeTab === tab.id && <div className="blue-indicator mt-1" style={{ width: '20px', height: '3px', backgroundColor: colors.activeTab, borderRadius: '2px' }}></div>}
            </button>
          ))}
        </div>
        <div className="home-indicator mx-auto my-1 bg-dark" style={{ width: '130px', height: '5px', borderRadius: '3px' }}></div>
      </div>

      {/* Desktop Navigation */}
      <nav className="navbar navbar-expand navbar-light bg-white d-none d-md-block w-100">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              {tabs.map(tab => (
                <li className="nav-item mx-3" key={tab.id}>
                  <a 
                    className="nav-link d-flex align-items-center"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(tab.id);
                    }}
                    style={{ 
                      color: activeTab === tab.id ? colors.activeTab : colors.inactiveTab,
                      fontWeight: activeTab === tab.id ? 'bold' : 'normal'
                    }}
                  >
                    <img 
                      src={tab.icon} 
                      alt={tab.name}
                      className="me-2"
                      style={{ 
                        width: '24px', 
                        height: '24px',
                        filter: activeTab === tab.id ? hexToFilter(colors.activeTab) : 'none'
                      }} 
                    />
                    {tab.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BottomNav; 