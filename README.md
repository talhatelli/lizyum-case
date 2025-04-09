# Lizyum - Service Provider Platform

![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.5-7952B3?logo=bootstrap)

Lizyum is a responsive web application designed to connect users with local service providers. The platform enables users to browse through various service categories, search for specific services, view service details, and communicate with service providers through an integrated messaging system.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with responsive layout for all screen sizes
- **Category Browsing**: Browse through multiple service categories
- **Featured Services**: Discover highlighted services on the homepage
- **Search Functionality**: Find services by name or category
- **Service Details**: View comprehensive information about each service
- **Company Profiles**: Review company details including ratings and contact information
- **Messaging System**: Communicate directly with service providers
- **Reservation System**: Book services with a simple workflow
- **Tabbed Navigation**: Easy switching between individual and corporate service options

## 📱 Mobile View Screenshots

<!-- Add Mobile Screenshots Here -->

## 💻 Desktop View Screenshots

<!-- Add Desktop Screenshots Here -->

## 📚 Tech Stack

- **React 19**: Latest version of React for building the user interface
- **Vite**: Fast build tool and development server
- **Bootstrap 5**: CSS framework for responsive layout and UI components
- **React Router Dom**: For application routing and navigation
- **React Bootstrap**: React components built on Bootstrap

## 🛠️ Project Structure

The project follows a component-based architecture:

```
src/
├── assets/       # Images, icons and other static resources
├── components/   # Reusable UI components
├── data/         # Mock data and constants
├── pages/        # Page components
├── styles/       # Component-specific styles
├── utils/        # Utility functions
└── App.jsx       # Main application component
```

## 📋 Components

- **Header**: Navigation and search component
- **BottomNav**: Mobile navigation bar
- **SearchBar**: Reusable search field component
- **BackButton**: Navigation component
- **FeaturedSection**: Display featured services
- **CategorySection**: Display service categories
- **ServiceCard**: Display individual service information
- **ChatMessage**: Message component for conversations
- **ChatDetail**: Detailed conversation view

## 📄 Pages

- **HomePage**: Main landing page with featured services and categories
- **ServicePage**: Browse and search through services
- **CategoryPage**: Browse through service categories
- **MessagesPage**: Chat list and conversations
- **ServiceDetailPage**: Detailed view of a service
- **CompanyDetailPage**: Company information and services
- **SearchResultsPage**: Display search results
- **ReservationSuccessPage**: Confirmation page after booking
- **SettingsPage**: User settings and options

## 🔧 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/lizyum-case.git
cd lizyum-case
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:3000

## 🚀 Build for Production

```bash
npm run build
```

## 🧪 Linting

```bash
npm run lint
```


