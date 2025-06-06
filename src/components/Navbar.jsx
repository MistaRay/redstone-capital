import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

// SVG icons for language
const GlobeIcon = () => (
  <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="2" /></svg>
);
const HanziIcon = () => (
  <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><text x="4" y="18" fontSize="16" fontFamily="Arial">文</text></svg>
);

function Navbar({ language, onLanguageToggle }) {
  const location = useLocation();
  const navLinks = [
    { to: '/', label: language === 'en' ? 'Home' : '首页', match: /^\/$/ },
    { to: '/about', label: language === 'en' ? 'About Us' : '关于我们', match: /^\/about/ },
    { to: '/portfolio', label: language === 'en' ? 'Portfolio' : '投资组合', match: /^\/portfolio/ },
    { to: '/contact', label: language === 'en' ? 'Contact' : '联系', match: /^\/contact/ },
  ];
  return (
    <nav className="glass border-b-2 border-red-800 w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex items-center space-x-2">
          <img src="/redstone2.jpg" alt="Redstone Capital Logo" className="h-12 w-12 rounded-lg" />
          <span className="text-xl font-extrabold text-red-800 tracking-wide">红石厚峰</span>
        </div>
        <div className="flex items-center space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-semibold text-base transition-colors duration-200 px-1 pb-1 ${link.match.test(location.pathname) ? 'text-red-800 border-b-2 border-red-800' : 'text-black hover:text-red-800'}`}
            >
              {link.label}
            </Link>
          ))}
          <button onClick={onLanguageToggle} className="ml-4 mb-1.5 px-3 py-1 rounded border border-red-800 text-red-800 bg-white/70 hover:bg-red-800 hover:text-white transition-all duration-200 shadow-md text-sm flex items-center gap-1">
            <span className="flex items-center">{language === 'en' ? <HanziIcon /> : <GlobeIcon />}</span>
            <span className="flex items-center">{language === 'en' ? '中文' : 'EN'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 