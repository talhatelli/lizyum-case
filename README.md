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
<img width="309" alt="Screenshot 2025-04-09 at 22 36 42" src="https://github.com/user-attachments/assets/45d67fb4-1094-4291-9064-0d46a5f95418" />
<img width="306" alt="Screenshot 2025-04-09 at 22 37 09" src="https://github.com/user-attachments/assets/8a869f64-eb8e-449b-a241-05a3e993617f" />
<img width="307" alt="Screenshot 2025-04-09 at 22 37 20" src="https://github.com/user-attachments/assets/fae9d519-b068-49a8-8921-7d60939f1191" />
<img width="306" alt="Screenshot 2025-04-09 at 22 37 31" src="https://github.com/user-attachments/assets/caf7c9c5-5c50-410c-82f1-5b8fff214740" />
<img width="306" alt="Screenshot 2025-04-09 at 22 37 44" src="https://github.com/user-attachments/assets/5ef6688b-96be-4188-b09e-dad7618ee550" />

<img width="307" alt="Screenshot 2025-04-09 at 22 38 16" src="https://github.com/user-attachments/assets/9b14ca8b-1e05-4895-89e0-332f1cbe012e" />
<img width="306" alt="Screenshot 2025-04-09 at 22 38 42" src="https://github.com/user-attachments/assets/97c1155a-d6af-4ccd-aa9c-69f1a3684d48" />
<img width="309" alt="Screenshot 2025-04-09 at 22 39 13" src="https://github.com/user-attachments/assets/dbd06a00-9404-4791-aae4-c1205f79b273" />




## 💻 Desktop View Screenshots

<img width="1440" alt="Screenshot 2025-04-09 at 22 29 21" src="https://github.com/user-attachments/assets/e9a42399-dcd4-493c-80a8-32f41cda212e" />
<img width="1440" alt="Screenshot 2025-04-09 at 22 29 29" src="https://github.com/user-attachments/assets/6dec6dde-7c1b-42c2-bb44-17fa96dbf3e9" />
<img width="1440" alt="Screenshot 2025-04-09 at 22 29 33" src="https://github.com/user-attachments/assets/a52cdf72-9b62-4e5b-bffe-bf8ac4a9fbb9" />
<img width="1440" alt="Screenshot 2025-04-09 at 22 29 38" src="https://github.com/user-attachments/assets/411d07f3-0d3e-4ebf-be59-1eb2fecce18b" />
<img width="1440" alt="Screenshot 2025-04-09 at 22 29 42" src="https://github.com/user-attachments/assets/7816906e-eb5b-4181-9c98-9b6625eb84d4" />
<img width="1440" alt="Screenshot 2025-04-09 at 22 30 07" src="https://github.com/user-attachments/assets/cc1c7f61-24fa-4934-ba38-bfe89a1ae0b2" />
<img width="1440" alt="Screenshot 2025-04-09 at 22 30 15" src="https://github.com/user-attachments/assets/eb2907e9-1ce0-48d1-aaca-1ce09f18f98f" />
<img width="1440" alt="Screenshot 2025-04-09 at 22 35 06" src="https://github.com/user-attachments/assets/fa126358-6007-4e0b-be1d-808780851441" />



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
git clone https://github.com/talhatelli/lizyum-case.git
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


