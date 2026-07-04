
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Magazine from './pages/Magazine';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Discounts from './pages/Discounts';
import Admin from './pages/Admin';
import Impresszum from './pages/Impresszum';
import Adatvedelem from './pages/Adatvedelem';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ujsag" element={<Magazine />} />
                <Route path="/szolgaltatasok" element={<Services />} />
                <Route path="/kedvezmenyek" element={<Discounts />} />
                <Route path="/kapcsolat" element={<Contact />} />
                <Route path="/impresszum" element={<Impresszum />} />
                <Route path="/adatvedelem" element={<Adatvedelem />} />
              </Routes>
            </main>
            <Footer />
            <CookieBanner />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
