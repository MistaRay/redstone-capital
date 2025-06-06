import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ language, onLanguageToggle }) {
  return (
    <nav className="glass border-b-2 border-red-800 w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex items-center space-x-2">
          <img src="/redstone2-removebg-preview.png" alt="Redstone Capital Logo" className="h-12 w-12 rounded-lg" />
          <span className="text-xl font-extrabold text-red-800 tracking-wide">红石厚峰</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-black hover:text-red-800 font-semibold text-base transition-colors duration-200">{language === 'en' ? 'Home' : '首页'}</Link>
          <Link to="/about" className="text-black hover:text-red-800 font-semibold text-base transition-colors duration-200">{language === 'en' ? 'About Us' : '关于我们'}</Link>
          <Link to="/portfolio" className="text-black hover:text-red-800 font-semibold text-base transition-colors duration-200">{language === 'en' ? 'Portfolio' : '投资组合'}</Link>
          <Link to="/contact" className="text-black hover:text-red-800 font-semibold text-base transition-colors duration-200">{language === 'en' ? 'Contact' : '联系'}</Link>
          <button onClick={onLanguageToggle} className="ml-4 px-3 py-1 rounded border border-red-800 text-red-800 bg-white/70 hover:bg-red-800 hover:text-white transition-all duration-200 shadow-md text-sm">
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 