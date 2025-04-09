import React from 'react';
import { colors, hexToFilter } from '../utils/colors';
import { tabs } from '../data/navigationData';
import { navStyles } from '../styles/navigationStyles';

function BottomNav({ activeTab, setActiveTab }) {
  return (
    <div className="bottom-nav-container w-100">
      <div className="bg-white shadow-lg d-md-none" style={navStyles.bottomNavContainer}>
        <div className="d-flex justify-content-between align-items-center py-2" style={navStyles.bottomNavInner}>
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className="d-flex flex-column align-items-center justify-content-center border-0 bg-transparent"
              onClick={() => setActiveTab(tab.id)}
              style={navStyles.tabButton}
            >
              <img 
                src={tab.icon} 
                alt={tab.name}
                className="mb-1"
                style={navStyles.tabIcon(activeTab === tab.id)} 
              />
              <span className="small mt-1 text-center" style={navStyles.tabText(activeTab === tab.id)}>
                {tab.name}
              </span>
              {activeTab === tab.id && <div className="blue-indicator mt-1" style={navStyles.activeIndicator}></div>}
            </button>
          ))}
        </div>
        <div className="home-indicator mx-auto my-1 bg-dark" style={navStyles.homeIndicator}></div>
      </div>

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
                    style={navStyles.desktopNavLink(activeTab === tab.id)}
                  >
                    <img 
                      src={tab.icon} 
                      alt={tab.name}
                      className="me-2"
                      style={navStyles.tabIcon(activeTab === tab.id)} 
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