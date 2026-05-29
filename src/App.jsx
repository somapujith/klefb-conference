import './index.css';
import { useState, useEffect } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CallForPapers } from './pages/CallForPapers';
import { ImportantDates } from './pages/ImportantDates';
import { Speakers } from './pages/Speakers';
import { Committee } from './pages/Committee';
import { Venue } from './pages/Venue';
import { Themes } from './pages/Themes';
import { Sponsorship } from './pages/Sponsorship';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Registration } from './pages/Registration';
import { Payment } from './pages/Payment';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
function App() {
  const pathname = window.location.pathname;
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('adminAuth') === 'true';
  });

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAdminLoggedIn(false);
    window.location.href = '/admin';
  };

  // Admin routes
  if (pathname === '/admin') {
    if (isAdminLoggedIn) {
      window.location.href = '/admin/dashboard';
      return null;
    }
    return <AdminLogin onLogin={handleAdminLogin} />;
  }

  if (pathname === '/admin/dashboard') {
    if (!isAdminLoggedIn) {
      window.location.href = '/admin';
      return null;
    }
    return <AdminDashboard onLogout={handleAdminLogout} />;
  }

  let page;
  switch (pathname) {
    case '/about':
      page = <About />;
      break;
    case '/call-for-papers':
      page = <CallForPapers />;
      break;
    case '/important-dates':
      page = <ImportantDates />;
      break;
    case '/speakers':
      page = <Speakers />;
      break;
    case '/committee':
      page = <Committee />;
      break;
    case '/venue':
      page = <Venue />;
      break;
    case '/themes':
      page = <Themes />;
      break;
    case '/sponsorship':
      page = <Sponsorship />;
      break;
    case '/contact':
      page = <Contact />;
      break;
    case '/registration':
      page = <Registration />;
      break;
    case '/payment':
      page = <Payment />;
      break;
    case '/404':
      page = <NotFound />;
      break;
    default:
      if (pathname === '/' || pathname === '/index.html') {
        page = <Home />;
      } else {
        page = <NotFound />;
      }
  }

  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
}

export default App;
