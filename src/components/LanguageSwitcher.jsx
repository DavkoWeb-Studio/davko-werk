import React from 'react';
import { useTranslation } from 'react-i18next';

// ✅ USUNIĘTO WSZYSTKIE IMPORTY OBRAZKÓW

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // ✅ Używamy bezpośrednich ścieżek do plików w /public
  const languages = [
    { code: 'pl', name: 'Polski', flag: '/pl.png' },
    { code: 'nl', name: 'Nederlands', flag: '/nl.png' },
    { code: 'en', name: 'English', flag: '/gb.png' }
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
            i18n.language === lang.code
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
          <span className="hidden sm:inline">{lang.name}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;