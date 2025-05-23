import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh-CN', name: '简体中文' },
    { code: 'zh-TW', name: '繁體中文' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  // Get current language display name
  const getCurrentLanguageDisplay = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language);
    return currentLang ? currentLang.name : 'English';
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-gray-300 hover:text-white transition px-3 py-2 rounded-md focus:outline-none"
        onClick={toggleDropdown}
      >
        <span>{t('navbar.languageSwitcher')}: {getCurrentLanguageDisplay()}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
          {languages.map(language => (
            <button
              key={language.code}
              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
              onClick={() => changeLanguage(language.code)}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;