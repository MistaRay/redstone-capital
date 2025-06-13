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
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: '/', label: language === 'en' ? 'Home' : '首页', match: /^\/$/ },
    { to: '/about', label: language === 'en' ? 'About Us' : '关于我们', match: /^\/about/ },
    { to: '/portfolio', label: language === 'en' ? 'Portfolio' : '投资组合', match: /^\/portfolio/ },
    { to: '/contact', label: language === 'en' ? 'Contact' : '联系', match: /^\/contact/ },
  ];
  return (
    <nav className="glass border-b-2 border-red-800 w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/" className="flex items-center space-x-2 group">
          <img src="/redstone1-removebg-preview.png" alt="Redstone Capital Logo" className="h-14 w-14 rounded-lg mt-2" />
          <span className="text-2xl font-extrabold text-red-800 tracking-wide whitespace-nowrap">红石厚峰</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-semibold text-base transition-colors duration-200 px-1 pb-1 ${link.match.test(location.pathname) ? 'text-red-800 border-b-2 border-red-800' : 'text-black hover:text-red-800'}`}
            >
              {link.label}
            </Link>
          ))}
          <button onClick={onLanguageToggle} className="ml-4 px-3 py-1 rounded border border-red-800 text-red-800 bg-white/70 hover:bg-red-800 hover:text-white transition-all duration-200 shadow-md text-sm flex items-center gap-1">
            <span className="flex items-center">{language === 'en' ? <HanziIcon /> : <GlobeIcon />}</span>
            <span className="flex items-center">{language === 'en' ? '中文' : 'EN'}</span>
          </button>
        </div>
        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded focus:outline-none border border-red-800 text-red-800 bg-white/80 hover:bg-red-800 hover:text-white transition-all duration-200"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-t border-red-800 shadow-lg absolute w-full left-0 top-full z-40 animate-fadeinup">
          <div className="flex flex-col items-center py-4 gap-2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-center font-semibold text-lg py-2 px-4 rounded transition-colors duration-200 ${link.match.test(location.pathname) ? 'text-red-800 bg-red-100' : 'text-black hover:text-red-800'}`}
              >
                {link.label}
              </Link>
            ))}
            <button onClick={() => { onLanguageToggle(); setMenuOpen(false); }} className="mt-2 px-4 py-2 rounded border border-red-800 text-red-800 bg-white/80 hover:bg-red-800 hover:text-white transition-all duration-200 shadow-md text-base flex items-center gap-1">
              <span className="flex items-center">{language === 'en' ? <HanziIcon /> : <GlobeIcon />}</span>
              <span className="flex items-center">{language === 'en' ? '中文' : 'EN'}</span>
            </button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeinup {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeinup {
          animation: fadeinup 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </nav>
  );
}

export default Navbar; 