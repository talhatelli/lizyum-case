import { useState } from 'react'
import './App.css'
import BottomNav from './components/BottomNav'
import { colors } from './utils/colors'
import MessagesPage from './pages/MessagesPage'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import SettingsPage from './pages/SettingsPage'
import CategoryPage from './pages/CategoryPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import SearchResultsPage from './pages/SearchResultsPage'
import CompanyDetailPage from './pages/CompanyDetailPage'
import ReservationSuccessPage from './pages/ReservationSuccessPage'

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activePage, setActivePage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  const handleServiceDetail = (serviceId) => {
    setActivePage('serviceDetail');
  };

  const handleCompanyDetail = (companyId) => {
    setSelectedCompanyId(companyId);
    setActivePage('companyDetail');
  };

  const handleBackToHome = () => {
    setActivePage('home');
  };

  const handleBackToSearch = () => {
    setActivePage('searchResults');
  };
  
  const handleReservationSuccess = () => {
    setActivePage('reservationSuccess');
  };
  
  const handleViewReservationDetails = () => {
    setActivePage('companyDetail');
  };

  const handleSearch = (term) => {
    if (term.trim()) {
      setSearchTerm(term);
      setActivePage('searchResults');
    }
  };

  const renderBodyContent = () => {
    if (activePage === 'serviceDetail') {
      return <ServiceDetailPage onBack={handleBackToHome} />;
    } else if (activePage === 'companyDetail') {
      return <CompanyDetailPage 
              companyId={selectedCompanyId} 
              onBack={handleBackToSearch}
              onReservationSuccess={handleReservationSuccess}
            />;
    } else if (activePage === 'searchResults') {
      return <SearchResultsPage 
              searchTerm={searchTerm} 
              onBack={handleBackToHome} 
              onServiceSelect={handleCompanyDetail}
            />;
    } else if (activePage === 'reservationSuccess') {
      return <ReservationSuccessPage
              onViewDetails={handleViewReservationDetails}
              onBackToHome={handleBackToHome}
            />;
    }

    switch(activeTab) {
      case 'messages':
        return <MessagesPage />;
      case 'service':
        return <TasksPage />;
      case 'settings':
        return <SettingsPage />;
      case 'category':
        return <CategoryPage />;
      case 'home':
      default:
        return <HomePage onServiceSelect={handleServiceDetail} onSearch={handleSearch} />;
    }
  };

  return (
    <div className="app-wrapper d-flex flex-column vh-100 p-0 m-0" style={{ overflow: 'hidden', width: '100%', maxWidth: '100%' }}>
      <main className="app-body flex-grow-1" style={{ 
        backgroundColor: activeTab === 'messages' ? '#F4F5F6' : 
                        activePage === 'reservationSuccess' ? '#FFFFFF' : 
                        colors.lightBlue, 
        overflow: 'auto'
      }}>
        {renderBodyContent()}
      </main>
      
      {(activePage !== 'companyDetail' && activePage !== 'reservationSuccess') && (
        <footer className="app-footer">
          <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </footer>
      )}
    </div>
  )
}

export default App
