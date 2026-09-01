
import React, { useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Magazine from './pages/Magazine';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Discounts from './pages/Discounts';
import Admin from './pages/Admin';
import Impresszum from './pages/Impresszum';
import Adatvedelem from './pages/Adatvedelem';

const App: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={
          <div className="flex flex-col min-h-screen">
            <a
              href="#main-content"
              onClick={(e) => {
                // HashRouter treats any "#..." href as a route change, so a plain
                // anchor jump would navigate to a nonexistent route and blank out
                // <main> instead of scrolling to it. Focus/scroll manually instead.
                e.preventDefault();
                mainRef.current?.focus();
                mainRef.current?.scrollIntoView();
              }}
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-teal-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ugrás a tartalomra
            </a>
            <Navbar />
            <main id="main-content" ref={mainRef} tabIndex={-1} className="flex-grow focus:outline-none">
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
