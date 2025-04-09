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

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activePage, setActivePage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  // Handle service detail navigation
  const handleServiceDetail = (serviceId) => {
    setActivePage('serviceDetail');
  };

  // Handle back navigation
  const handleBackToHome = () => {
    setActivePage('home');
  };

  // Handle search functionality
  const handleSearch = (term) => {
    if (term.trim()) {
      setSearchTerm(term);
      setActivePage('searchResults');
    }
  };

  // Content for the body section based on active tab and page
  const renderBodyContent = () => {
    // First check if we're in a specific page that overrides the tab navigation
    if (activePage === 'serviceDetail') {
      return <ServiceDetailPage onBack={handleBackToHome} />;
    } else if (activePage === 'searchResults') {
      return <SearchResultsPage 
              searchTerm={searchTerm} 
              onBack={handleBackToHome} 
              onServiceSelect={handleServiceDetail}
            />;
    }

    // Otherwise use the tab-based navigation
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
    <div className="app-wrapper d-flex flex-column vh-100 vw-100 p-0 m-0" style={{ overflow: 'hidden' }}>
      {/* BODY */}
      <main className="app-body flex-grow-1" style={{ 
        backgroundColor: activeTab === 'messages' ? '#F4F5F6' : colors.lightBlue, 
        overflow: 'auto'
      }}>
        {renderBodyContent()}
      </main>
      
      {/* FOOTER */}
      <footer className="app-footer">
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </footer>
    </div>
  )
}

export default App
