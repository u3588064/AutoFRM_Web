import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-400 flex items-center">
            Auto<span className="text-yellow-400">FRM</span>
            <span className="ml-2 bg-gradient-to-r from-blue-400 to-cyan-300 h-6 w-1 rounded-full"></span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition">{t('navbar.features')}</a>
          <a href="#technology" className="text-gray-300 hover:text-white transition">{t('navbar.technology')}</a>
          <a href="#future" className="text-gray-300 hover:text-white transition">{t('navbar.future')}</a>
          <LanguageSwitcher />
          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-md hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow-lg shadow-blue-500/30">
            {t('navbar.contactUs')}
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;