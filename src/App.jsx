import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import './App.css';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('en');
  const handleLanguageToggle = () => setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar language={language} onLanguageToggle={handleLanguageToggle} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/portfolio" element={<Portfolio language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
